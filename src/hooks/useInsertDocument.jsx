import { useReducer, useState } from 'react'
import { db } from '../firebase/config'

import {
    addDoc,
    Timestamp,
    collection,
} from 'firebase/firestore'

const initialState = { loading: null, error: null }

const insertReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "INSERTED_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload}
        default:
            return state
    }


}

export const useInsertDocument = (docCollection) => {

    const [ response, dispatch ] = useReducer(insertReducer, initialState)

    //Em todas as ações o cancelled será verificado
    const [cancelled, setCancelled] = useState(false)
    const checkIfCancelledBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const insertDocument = async(document) => {

        
        checkIfCancelledBeforeDispatch({type: "LOADING",})

        try{

            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument,
            )

            checkIfCancelledBeforeDispatch({type: "INSERTED_DOC",})

        }catch(error){

            checkIfCancelledBeforeDispatch({
                type: "ERROR", 
                payload: error.message,
            })

        }

    }
    /*
    useEffect(()=>{

        return () => {
            setCancelled(true)
        }
        
        
    },[])
    */
    return {response, insertDocument}

}