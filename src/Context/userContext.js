import React, {createContext, useState, useContext} from 'react'

export const UserDataContext = createContext()

export const UserDataProvider = (props) => {
  const [active, setActive] = useState(false)
  const [user, setUser] = useState({})
  
  const defaultContext = {
    user,
    setUser,
    active,
    setActive
  };

  return (
    <UserDataContext.Provider value={defaultContext}>
      {props.children}
    </UserDataContext.Provider>
  )
}

export const useUserDataContext = () => {
  return useContext(UserDataContext)
}

export default UserDataProvider