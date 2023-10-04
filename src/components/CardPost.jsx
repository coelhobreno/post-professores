import { Link } from 'react-router-dom'
import styles from './CardPost.module.css' 

const CardPost = ({post}) => {

    return(
        <div className={styles.post_detail}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className={styles.card_footer}>
                <Link className='btn dark-outline' to={`/post/${post.id}`}>Ler conteúdo</Link>
                <div className={styles.userArea}>
                    <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
                    <h3>{post.createdBy}</h3>
                </div>
                <div className={styles.tags_area}>
                    {post.tagsArray.map((tag) => (
                        <p key={tag}><span>#</span>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardPost