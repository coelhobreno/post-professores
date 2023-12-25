import { Container, Header, Title, Description, RedirectLogin, RedirectCreate } from './styles'

import { useAuthValue } from '../../context/AuthContext'

const About = () => {

    const { user } = useAuthValue()

    return(
        <Container>
            <Header>Plataforma de Aprendizado Interativo</Header>
            <Title>Compartilhando Conhecimento entre Professores e Alunos</Title>
            <Description>A plataforma de postagem e debate oferece um espaço dinâmico onde professores e alunos podem compartilhar, discutir e enriquecer seus conhecimentos de maneira colaborativa. Ao promover uma abordagem participativa e interativa para o aprendizado, a plataforma visa aprimorar a educação e o desenvolvimento pessoal de todos os envolvidos.</Description>
            {!user && <RedirectLogin to="/register">Cadastre-se</RedirectLogin>}
            {user && <RedirectCreate to="/post/create">Faça seu Post</RedirectCreate>}
        </Container>
    )
}

export default About