import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

import { 
    collection,
    onSnapshot,
    orderBy,
    query,
    where
 } from "firebase/firestore"

export const useFetchCommentarys = (docCollection, idPost) => {
    
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [docComments, setDocComments] = useState(null)

    const [cancelled, setCancelled] = useState(false)
    
    useEffect(() => {

        const loadData = async() => {

            if(cancelled){
                return
            }

            setLoading(true)
            
            const collectionRef = await collection(db, docCollection)

            try{

                let q
    
                q = await query(collectionRef, where("idPost", "==", idPost), 
                orderBy("createdAt", "asc"))
                    
                await onSnapshot(q, (querySnapshot) => {
                    setDocComments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                    setLoading(false)
                })

            }catch(error){

                setError(error.message)
                
                setLoading(false)
            }
        }
        
        loadData()

    }, [docCollection, docComments, idPost, cancelled])
    
    useEffect(() => {
        return () => setCancelled(true)
    }, [])
    
    return {docComments, loading, error}

}