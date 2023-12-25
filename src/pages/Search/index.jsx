import { Container, NameSearch, PostsArea } from './styles.jsx'

//hooks
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//components
import CardPost from '../../components/CardPost'
import NoPost from '../../components/Others/NoPost/index.jsx'
import { BoxLoading } from '../../components/Others/Loading/index.jsx'

const Search = () => {

    const query = useQuery()

    const search = query.get("q")

    const {documents: posts, loading} = useFetchDocuments("posts", search)

    return(

        <Container>
            {/*Loading*/}
            {!posts && <BoxLoading/>}
            {posts && <NameSearch>Pesquisa por: <span>{search}</span></NameSearch>}

            {/*Área dos Cards*/}
            <PostsArea>
                {posts && posts.map((post) => (
                    <CardPost post={post} key={post.title}/>
                ))}
            </PostsArea>
            
            {posts && posts.length === 0 && (
                <NoPost
                    title="Não foram encontrados posts a partir da sua busca"
                    redirect="Voltar"
                    route="/"
                />
            )}
            
        </Container>
    )
}

export default Search