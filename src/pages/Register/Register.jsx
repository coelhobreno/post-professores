import styles from './Register.module.css'

import { Link } from 'react-router-dom';

//hooks
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("")

    const [error, setError] = useState("")

    const { loading, error: formError, createUser } = useAuthentication()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setError("")

        if(password !== confirmPassword){
            setError("As senhas não são idênticas")
            return
        }

        const displayName = `${name} ${surname}`;

        const user = {
            displayName,
            email,
            password,
        }

        const res = await createUser(user)
        
    }
    


    useEffect(() => {

        if(formError){
            setError(formError)
        }

    }, [formError])

    return (
        <div className="form_default">
            <div className="header">
                <h1>Cadastre-se</h1>
                <Link to="/login" className='btn'>Entrar</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    <label>
                        <span>Primeiro Nome</span>
                        <input 
                            type="text"
                            onChange={e => setName(e.target.value)}
                            placeholder='Digite seu primeiro nome'
                            value={name}
                            required
                        />
                    </label>
                    <label>
                        <span>Sobrenome</span>
                        <input 
                            type="text"
                            onChange={e => setSurname(e.target.value)}
                            placeholder='Digite seu sobrenome'
                            value={surname}
                            required
                        />
                    </label>
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
                        <span>Celular</span>
                        <input 
                            type="tel"
                            onChange={e => setPhone(e.target.value)}
                            placeholder='(xx) xxxx-xxxx'
                            value={phone}
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
                    <label>
                        <span>Confirme sua senha</span>
                        <input 
                            type="password"
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder='Digite sua senha novamente'
                            value={confirmPassword}
                            required
                        />
                    </label>
                </div>

                <div className={styles.gerder_group}>
                    <h4>Gênero</h4>
                    <div className={styles.form_radio}>
                        <div className={styles.gerder_input}>
                            <input type="radio" name="gender" id='female' value='female' onChange={e => setGender(e.target.value)}/>
                            <label htmlFor="female">Feminino</label>
                        </div>
                        <div className={styles.gerder_input}>
                            <input type="radio" name="gender" id='male' value="male" onChange={e => setGender(e.target.value)}/>
                            <label htmlFor="male">Masculino</label>
                        </div>
                        <div className={styles.gerder_input}>
                            <input type="radio" name="gender" id='others' value="others" onChange={e => setGender(e.target.value)}/>
                            <label htmlFor="others">Outros</label>
                        </div>
                        <div className={styles.gerder_input}>
                            <input type="radio" name="gender" id='none' value="none" onChange={e => setGender(e.target.value)}/>
                            <label htmlFor="none">Prefiro não dizer</label>
                        </div>
                    </div>
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

export default Register