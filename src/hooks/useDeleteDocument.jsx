import { useState } from 'react'
import { db } from '../firebase/config'

import {
    doc,
    deleteDoc,
} from 'firebase/firestore'

export const useDeleteDocument = (docCollection) => {

    const [loading, setLoading] = useState(false)

    const deleteDocument = async(id) => {

        setLoading(true)

        try{
            
            const docRef = await doc(db, docCollection, id)
            const deletedDoc = deleteDoc(docRef)
            setLoading(false)

        }catch(error){

            console.log(error.message)
            setLoading(false)

        }

    }

    return { deleteDocument, loading }

}