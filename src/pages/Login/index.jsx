import { FormDefault, Header, Register, Form } from './styles'

//hooks
import { useEffect, useState } from 'react'

//components
import { ButtonForm, LabelInputForm, TitleForm } from '../../components/FormSplit';
import { Loading } from '../../components/Others/Loading';
import BoxError from '../../components/BoxError';

//hooks personality
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [ formError, setFormError] = useState("")

    const { login, loading, error } = useAuthentication()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setFormError("")

        const user = {
            email,
            password,
        }

        const res = await login(user)
    }

    useEffect(() => {
        if(error){
            setFormError(error)
        }

    }, [error])

    return(
        <FormDefault>
            <Header>
                <TitleForm value="Entrar"/>
                <Register to="/register">Cadastre-se</Register>
            </Header>

            <Form onSubmit={handleSubmit}>

                <LabelInputForm
                    title="E-mail"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Informe seu e-mail'
                    value={email}
                    required 
                />

                <LabelInputForm
                    title="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Informe sua senha'
                    value={password}
                    required
                />

                {!loading && <ButtonForm value="Continuar"/>}
                {loading && <ButtonForm disabled value={<Loading/>} />}
                
                {formError && <BoxError errorMessage={formError}/>}
            </Form>
            
        </FormDefault>
    )
}

export default Login