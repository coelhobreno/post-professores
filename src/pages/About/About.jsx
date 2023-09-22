import styles from './About.module.css'

import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'

const About = () => {

    const { user } = useAuthValue()

    return(
        <div className={styles.about}>
            <span>Plataforma de Aprendizado Interativo</span>
            <h1>Compartilhando Conhecimento entre Professores e Alunos</h1>
            <p>A plataforma de postagem e debate oferece um espaço dinâmico onde professores e alunos podem compartilhar, discutir e enriquecer seus conhecimentos de maneira colaborativa. Ao promover uma abordagem participativa e interativa para o aprendizado, a plataforma visa aprimorar a educação e o desenvolvimento pessoal de todos os envolvidos.</p>
            {!user && <Link className='btn' to="/register">Cadastre-se</Link>}
            {user && <Link className='btn' to="/post/create">Faça seu Post</Link>}
        </div>
    )
}

export default About