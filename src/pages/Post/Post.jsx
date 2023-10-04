import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {

    const {id} = useParams()

    const { document: post, loading  } = useFetchDocument("posts", id)
    
    return (
        <>
            {loading && !post && <p className={styles.loading}>Carregando...</p>}
            {post && (
                <div className={styles.post}>
                    <h1>{post.title}</h1>
                    <p className={styles.description}>{post.description}</p>
                    <img src={post.image} alt="" />
                    <div className={styles.contArea}>
                        {post.inputState.map((item, index) =>(
                            <div className={styles.itemArea} key={index}>
                                <h2>{item.subTitle}</h2>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </>
    )
}

export default Post