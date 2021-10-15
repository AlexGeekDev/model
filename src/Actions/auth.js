import {firebase, db, googleAuthProvider } from "../DataBase/Firebase";

export const regEmail = (email, password, name) => {
  console.log('si llega')  
  try {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          const userRef = db.collection("users").doc(user.email)
          const newUser = {
            uid: user.uid,
            email: user.email,
            name: name,
            verified: user.emailVerified,
            role: "User",
            isAnonymous: user.isAnonymous,
            date: new Date().getTime(),
            provider: "e-mail",
          }           
          await userRef.set(newUser)
        })
  } catch (error) {
    console.log(error)
  }
};

export const loginEmail = (email, password) => {
  firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then(async({user})=>{
    console.log(user)
  })
}

export const signInGoogle = () => {
  firebase.auth()
  .signInWithPopup(googleAuthProvider)
  .then(async({user})=>{
    try {
      const userRef = db.collection("users").doc(user.email)
      const userFirebase = userRef.get()
      const newUser = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        verified: user.emailVerified,
        role: "User",
        isAnonymous: user.isAnonymous,
        date: new Date().getTime(),
        provider: "e-mail",
      }
      if ((await userFirebase).exists) {
        console.log('user exists')
      } else {
        await userRef.set(newUser)
      }
    } catch (error) {
      console.log(error)
    }
  })
}

export const logout = async () => {
  await firebase.auth().signOut();
}