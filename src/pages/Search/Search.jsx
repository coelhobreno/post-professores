import styles from './Search.module.css'

//hooks
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

import CardPost from '../../components/CardPost'

const Search = () => {

    const query = useQuery()

    const search = query.get("q")

    const {documents: posts, loading} = useFetchDocuments("posts", search)

    return(
        
        <div className={styles.search}>
            <h1>Pesquisa por: {search}</h1>
            <div className={styles.posts_area}>
                {!posts && loading && <p>Carregando...</p>}
                {posts && posts.map((post) => (
                    <CardPost post={post} key={post.title}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Link to="/" className="btn btn-dark">Voltar</Link>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Search