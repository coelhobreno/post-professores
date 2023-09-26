import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

import { 
    collection,
    onSnapshot,
    orderBy,
    query,
    where
 } from "firebase/firestore"

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [documents, setDocuments] = useState(null)

    //memory leak
    const [cancelled, setCancelled] = useState(false)
    
    //servirá para o get, search e get individual
    useEffect(() => {

        const loadData = async() => {

            if(cancelled){
                return
            }

            setLoading(true)
            
            const collectionRef = await collection(db, docCollection)
            

            try{

                let q
                

                //get, referenciando minha coleção
                if(search){

                    q = await query(collectionRef, where("tagsArray", "array-contains", search), 
                    orderBy("createdAt", "desc"))
                    
                }else if(uid){
                    
                    q = await query(collectionRef, where("uid", "==", uid), 
                    orderBy("createdAt", "desc"))

                }else{
                    q = await query(collectionRef, orderBy("createdAt","desc"))
                }

                //mapeamento dos docs em tempo real
                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            //os id fica separado
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setLoading(false)

            }catch(error){

                setError(error.message)
                
                setLoading(false)
            }
        }
        
        loadData()

    }, [docCollection, documents, search, uid, cancelled])
    
    useEffect(() => {
        return () => setCancelled(true)
    }, [])
    
    return {documents, loading, error}

}