import { db } from '../firebase/config'

import { useEffect, useReducer, useState } from 'react'

import {
    doc,
    updateDoc
} from 'firebase/firestore'

const updateReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "UPDATED_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

const initialState = {loading: false, error: null}

export const useUpdateDocument = (docCollection) => {

    const [response, dispatch] = useReducer(updateReducer, initialState)

    const [cancelled, setCancelled] = useState(false)
    const checkIfCancelledBefore = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const updateDocument = async(data, id) => {

        checkIfCancelledBefore({type: "LOADING"})

        try{

            const docRef = await doc(db, docCollection, id)

            const updatedDocument = await updateDoc(docRef, data)

            checkIfCancelledBefore({type: "UPDATED_DOC"})
            
        }catch(error){

            checkIfCancelledBefore({type: "ERROR", payload: error.message})

        }
        
    }
    
    useEffect(() => {

        return () => {
            setCancelled(true)
        }

    }, [])
    
    return {response, updateDocument}

}