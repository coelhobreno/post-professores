import styles from './Login.module.css'

import { Link } from 'react-router-dom';

//hooks
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const { loading, error: formError, login } = useAuthentication()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setError("")

        const user = {
            email,
            password,
        }

        const res = await login(user)

    }

    useEffect(() => {

        if(formError){
            setError(formError)
        }

    }, [formError])

    return(
        <div className="form_default">
            <div className="header">
                <h1>Entrar</h1>
                <Link to="/register" className='btn'>Cadastre-se</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    
                    <label>
                        <span>E-mail</span>
                        <input 
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Digite seu e-mail'
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <span>Senha</span>
                        <input 
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Digite sua senha'
                            value={password}
                            required
                        />
                    </label>
                </div>

                {!loading && <button className='btn'>Continuar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
            </form>

            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
            
        </div>
    )
}

export default Login