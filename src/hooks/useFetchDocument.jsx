import { db } from '../firebase/config'

import { useEffect, useState } from 'react'

import { 
    doc,
    getDoc,
} from 'firebase/firestore'

export const useFetchDocument = (docCollection, id) => {
    
    const [cancelled, setCancelled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [document, setDocument] = useState(null)
    
    useEffect(() => {
        setLoading(true)

        const loadDocument = async() => {
            if(cancelled) return

            setLoading(true)

            try{
                
                const docRef = await doc(db, docCollection, id)

                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false)

            }catch(error){
                
                setError(error.message)
                setLoading(false)

            }
        }

        loadDocument()

    }, [docCollection, id])
    
    useEffect(()=>{

        return () => {
            setCancelled(true)
        }
        
    },[])
    
    return {document, loading, error}

}