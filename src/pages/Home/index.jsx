//hooks
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom';

import { Container, Title, Description, Form, PostsArea } from './styles.jsx'

//components
import SearchArea from '../../components/Others/SearchArea/index.jsx';
import { BoxLoading } from '../../components/Others/Loading/index.jsx';
import CardPost from '../../components/CardPost/index.jsx'
import NoPost from '../../components/Others/NoPost/index.jsx';

//Terá get e busca 
const Home = () => {

    const navigate = useNavigate()

    const [search, setSearch] = useState("")

    const { documents: posts } = useFetchDocuments("posts")

    const handleSubmit = (e) => {

        e.preventDefault() 

        if(search){
            return navigate(`/search?q=${search}`)
        }

    }

    return(

        <Container>
            <Title>
                Plataforma de Aprendizado Interativo: Explore, aprenda e debata!
            </Title>

            <Description>
                Conecte professores e alunos para compartilhar conhecimento e ideias, enriquecendo a experiência educacional de todos.
            </Description>

            {/*SearchArea*/}
            <Form onSubmit={handleSubmit}>
        
                <SearchArea setSearch={setSearch}/>

            </Form>

            {/*Loading*/}
            {!posts && <BoxLoading/>}

            {/*Área dos Cards*/}
            <PostsArea>
                {posts && posts.map((post) => (
                    <CardPost post={post} key={post.title}/>
                ))}
            </PostsArea>
            
            {posts && posts.length === 0 && (
                <NoPost
                    title="Ops, parece que ainda não temos nenhum post aqui!"
                    desc="Fique à vontade para ser o primeiro a compartilhar conhecimento e ideias. Escolha um título cativante e uma descrição envolvente para iniciar a conversa. Mal podemos esperar para ver suas contribuições!"
                    redirect="Crie o primeiro post"
                    route="/post/create"
                />
            )}
            
        </Container>
    )
}

export default Home