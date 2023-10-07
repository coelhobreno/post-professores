import { useEffect, useReducer, useState } from 'react'
import { db } from '../firebase/config'

import {
    addDoc,
    Timestamp,
    collection,
} from 'firebase/firestore'

const initialState = {
    loading: null,
    error: null,
}

const commentaryReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: false}
        case "INSERTED_COMMENTARY":
            return {loading: false, error: false}
        case "ERROR":
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const useInsertCommentary = (docCollection) => {

    const [response, dispatch] = useReducer(commentaryReducer, initialState)

    const [cancelled, setCancelled] = useState(false)
    const checkIfCancelledBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const insertCommentary = async(docComment) => {

        checkIfCancelledBeforeDispatch({type: "LOADING",})

        try{

            const newComment = {...docComment, createdAt: Timestamp.now()}
            
            const insertedComment = await addDoc(
                collection(db, docCollection),
                newComment,
            )

            checkIfCancelledBeforeDispatch({type: "INSERTED_COMMENTARY"})

        }catch(error){

            checkIfCancelledBeforeDispatch({type: "ERROR", payload: error.message})

        }

    }

    useEffect(() => {

        return () => setCancelled(true)

    }, [])
            
    return { insertCommentary, response }

}