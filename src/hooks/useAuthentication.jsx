import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import { useEffect, useState } from "react";

export const useAuthentication = () => {

    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkIfCancelled = () => {
        if(cancelled){
            return
        }
    }

    const auth = getAuth()

    //criar usuário
    const createUser = async(data) => {

        checkIfCancelled()
        
        setLoading(true)
        setError(null)

        try{
             
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )

            await updateProfile(user, {
                displayName: data.displayName,
            })

            setLoading(false)
            return user

        }catch(error){

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado"
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            
            setError(systemErrorMessage)
            setLoading(false)

        }

    }

    const login = async(data) => {
        checkIfCancelled()
        setLoading(true)
        setError("")

        try{
            //Utilizando função signInWithEmailAndPassword para verificar se há algum usuário com esses dados. Se sim, será passado para o auth e consequentemente para todo o site
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        }catch(error){

            let systemErrorMessage;

            //Se a mensagem conter user-not, significa que o usuário não existe
            if(error.message.includes("user-not")){
                systemErrorMessage = "Usuário não encontrado"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta"
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)
            
            //Passando systemErrorMessage para a variável error e consequentemente exportando para quem for utilizar
            setLoading(false)
        }

    }

    const logout = () => {
        checkIfCancelled()

        signOut(auth)

    }

    useEffect(()=>{
        return () => {
            setCancelled(true)
        }
    },[])

    return {loading, error, auth, logout, login, createUser}

}