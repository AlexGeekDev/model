import React, { Fragment, useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom'
import {useUserDataContext} from '../Context/userContext'
import Login from '../Components/Auth/Login'
import Google from '../Components/Auth/GoogleLogin'
import SignUp from '../Components/Auth/SignUp'

const Auth = (props) => {

    const [show, setShow] = useState(false)
    const {active} = useUserDataContext()

    useEffect(()=>{
        if (active) {
            props.history.push('/')
        }
    },[active])

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12 col-lg-6">
                    <h1>Inicia Sesión con e-mail</h1>
                        {
                            !show ?
                            <Login /> :
                            <SignUp />
                        }
                        <button onClick={()=>setShow(!show)}
                            className='my-5'
                        >
                            {
                                !show ? 
                                'No estas registrado? Crea una Cuenta' :
                                'Ya tienes cuenta? Inicia sesión'
                            }
                            </button>
                    </div>
                    <div className="col-xs-1-12 col-lg-6">   
                    <h1>Inicia Sesión con Google</h1>
                            <Google />
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Auth)
