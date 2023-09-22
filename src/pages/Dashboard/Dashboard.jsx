import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'
import {useDeleteDocument} from '../../hooks/useDeleteDocument'

const Dashboard = () => {
    const { user } = useAuthValue()

    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

    const { deleteDocument } = useDeleteDocument("posts")

    return(
        <div className={styles.dashboard}>
                {posts && posts.length == 0 ? (
                    <div className={styles.no_post}>
                        <p>Não foram encontrados posts!</p>
                        <Link to="/post/create" className="btn">Crie seu primeiro post</Link>
                    </div>
                ) : (
                    <>
                        
                        {loading && <p>Carregando...</p>}
                        {posts &&(
                            <>
                                <h1>Dashboard</h1>
                                <p>Edite os seus posts</p>
                                <div className={styles.header}>
                                    <span>Título</span>
                                    <span>Ações</span>
                                </div>
                                {posts.map((post) => (
                                <div className={styles.itens} key={post.id}>
                                    <p>{post.title}</p>
                                    <div className={styles.actions}>
                                        <Link to={`/post/${post.id}`}>Ver</Link>

                                        <Link to={`/post/edit/${post.id}`}>Editar</Link>
                                        
                                        <button onClick={() => deleteDocument(post.id)}>Excluir</button>
                                    </div> 
                                </div>
                            ))}

                            </>
                        )}
                    </>
                )}
        </div>
    )
}

export default Dashboard