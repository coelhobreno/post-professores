import { useState } from 'react'
import {db} from '../firebase/config'

import {
    doc,
    deleteDoc,
} from 'firebase/firestore'

export const useDeleteComment = (docCollection) => {

    const [loading, setLoading] = useState(null)

    const deleteComment = async(id) => {
        
        setLoading(true)

        try{

            const docRef = await doc(db, docCollection, id)
            const deletedDoc = deleteDoc(docRef)
            setLoading(false)

        }catch(error){
            setLoading(false)
        }

    }

    return { deleteComment, loading }

}