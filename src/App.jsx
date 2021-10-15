import React, {Fragment, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {firebase, db} from './DataBase/Firebase'
import {useUserDataContext} from './Context/userContext'
import {useUiContext} from './Context/uiContext'
import LayOut from './LayOut/LayOut'
import Loading from './Components/Loadings/Loading'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Contact from './Pages/Contact'

function App() {
  const {setUser, setActive} = useUserDataContext()
  const {setLoading, loading} = useUiContext()

  useEffect(()=>{
    setLoading(true)
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        const userRef = db.collection("users").doc(user.email)
        setUser((await userRef.get()).data())
        setActive(true)
        setLoading(false)
      } else {
        setActive(false)
        setUser({})
      }
    });
  },[setUser, setActive])

  return (
    <Fragment>
      {
        !loading ?
        <BrowserRouter>
        <Switch>
          <LayOut>
            <Route exact path='/' component={Home} />
            <Route exact path='/Auth' component={Auth} />
            <Route exact path='/Contact' component={Contact} />
          </LayOut>
        </Switch>
      </BrowserRouter> :
      <Loading />
      }
    </Fragment>
  );
}

export default App;