import { FormDefault, Header, Login, Form, Wrapper } from './styles.jsx'

//hooks
import { useEffect, useState } from 'react'

//hooks personality
import { useAuthentication } from '../../hooks/useAuthentication.jsx';
import { TitleForm, LabelInputForm, ButtonForm } from '../../components/FormSplit/index.jsx';

//components
import BoxError from '../../components/BoxError/index.jsx';
import { Loading } from '../../components/Others/Loading/index.jsx';

const Register = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [formError, setFormError] = useState("")

    const { createUser, loading, error  } = useAuthentication()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setFormError("")

        if(password != confirmPassword){
            return setFormError("As senhas não são idênticas")
        
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

        if(error){
            setFormError(error)
        }

    }, [error])

    return (

        <FormDefault>
            <Header>
                <TitleForm value="Cadastre-se"/>
                <Login to="/login">Entrar</Login>
            </Header>

            <Form onSubmit={handleSubmit}>

                <Wrapper>
                    <LabelInputForm
                        title="Primeiro Nome"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        placeholder='Digite seu primeiro nome'
                        value={name}
                        required
                    />
                    <LabelInputForm
                        title="Sobrenome"
                        type="text"
                        onChange={e => setSurname(e.target.value)}
                        placeholder='Digite seu sobrenome'
                        value={surname}
                        required
                    />
                </Wrapper>

                <Wrapper>
                    <LabelInputForm
                        title="E-mail"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Digite seu e-mail'
                        value={email}
                        required
                    />
                    <LabelInputForm
                        title="Celular"
                        type="text"
                        onChange={e => setPhone(e.target.value)}
                        placeholder='(XX) XXXX-XXXX'
                        value={phone}
                        required
                    />
                </Wrapper>

                <Wrapper>
                    <LabelInputForm
                        title="Senha"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Informe sua senha'
                        value={password}
                        required
                    />
                    <LabelInputForm
                        title="Confirme sua senha"
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder='Digite sua senha novamente'
                        value={confirmPassword}
                        required
                    />
                </Wrapper>

                {!loading && <ButtonForm value="Cadastrar"/>}
                {loading && <ButtonForm disabled value={<Loading/>} />}
            
                {formError && <BoxError errorMessage={formError}/>}
            </Form>
        
        </FormDefault>
    )
}

export default Register