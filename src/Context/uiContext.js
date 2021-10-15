import React, {createContext, useState, useContext} from 'react'

export const UiContext = createContext()

export const UiProvider = (props) => {
  const [loading, setLoading] = useState(true)
  
  const defaultContext = {
    loading,
    setLoading
  };

  return (
    <UiContext.Provider value={defaultContext}>
      {props.children}
    </UiContext.Provider>
  )
}

export const useUiContext = () => {
  return useContext(UiContext)
}

export default UiProvider