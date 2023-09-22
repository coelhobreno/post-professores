import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {

    const {id} = useParams()

    const { document: post, loading  } = useFetchDocument("posts", id)
    console.log(post)
    return (
        <>
            {loading && <p>Carregando...</p>}
            {post && (
                <div className={styles.post}>
                    <h1>{post.title}</h1>
                    <p className={styles.description}>{post.description}</p>
                    <img src={post.image} alt="" />
                    <p className={styles.body}>{post.body}</p>
                </div>
            )}
        </>
    )
}

export default Post