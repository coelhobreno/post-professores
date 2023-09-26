import styles from './Home.module.css'

import { Link } from 'react-router-dom';

import { AiOutlineSearch } from "react-icons/ai";

//hooks
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

import CardPost from '../../components/CardPost'



//Terá get e busca 
const Home = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const { user } = useAuthValue()

    const { documents: posts, loading } = useFetchDocuments("posts")

    const handleSubmit = (e) => {

        e.preventDefault() 

        if(search){
            return navigate(`/search?q=${search}`)
        }

    }

    return(
        
        <div className={styles.home}>
            <h1>Plataforma de Aprendizado Interativo: Explore, aprenda e debata!</h1>
            <p>Conecte professores e alunos para compartilhar conhecimento e ideias, enriquecendo a experiência educacional de todos.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.search_area}>
                    <AiOutlineSearch/>
                    <input type="text" placeholder='Pesquise tags do seu interesse' onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <button className='btn dark-outline'>Pesquisar</button>
            </form>
            
            { loading && !posts && <p>Carregando...</p>}

            <div className={styles.posts_area}>
                {posts && posts.map((post) => (
                    <CardPost post={post} key={post.title}/>
                ))}
            </div>

            {posts && posts.length === 0 && (
                <div className={styles.no_post}>
                    <h1>Ops, parece que ainda não temos nenhum post aqui!</h1>
                    <p>Fique à vontade para ser o primeiro a compartilhar conhecimento e ideias. Escolha um título cativante e uma descrição envolvente para iniciar a conversa. Mal podemos esperar para ver suas contribuições!</p>
                    <Link className='btn' to="post/create">Crie o primeiro post {"->"}</Link>
                </div>
            )}
        </div>
    )
}

export default Home