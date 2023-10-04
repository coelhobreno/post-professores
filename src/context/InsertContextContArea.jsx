import { useReducer, createContext, useContext } from 'react'

export const InsertContextContArea = createContext()

export const InsertContextContAreaProvider = ({children}) => {

  const reducer = (state, action) => {
      switch(action.type){
        case "ADD":
          const newContArea = {subTitle: "", body: ""}
          return [...state, newContArea]
        case "CHANGE_SUBTITLE":
          return state.map((item, index) => {
              if(action.payload.index == index){
                  return {...item, subTitle: action.payload.value}
              }
              return item
          })
        case "CHANGE_BODY":
          return state.map((item, index) => {
              if(action.payload.index == index){
                  return {...item, body: action.payload.value}
              }
              return item
          })
        case "REMOVE":  
          return state.filter((item, index) => 
              action.payload.index !== index
          )
        case "CLEAR":
          return [{subTitle: "", body: ""}]
        case "PREV_STORE":
          return action.payload
        default:
          return state

    }
  }

  const initialState = [
      {subTitle: "", body: ""},
  ]

  const [inputState, dispatch] = useReducer(reducer, initialState)

  return <InsertContextContArea.Provider value={{inputState, dispatch}}>
    {children}
  </InsertContextContArea.Provider>
}

export const useValueInsertContArea = () => {
  return useContext(InsertContextContArea)
}