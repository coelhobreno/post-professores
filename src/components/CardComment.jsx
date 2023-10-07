import { useDeleteComment } from '../hooks/useDeleteComment';
import styles from './CardComment.module.css'
import { BsTrash3Fill } from "react-icons/bs";

const CardComment = ({comment, remove=false }) => {

  const { deleteComment, loading } = useDeleteComment("comments", comment.id)

  return (
      <div className={styles.card_comment}>
        <div className={styles.info_user_area}>
          <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
          <div className={styles.cont_area}>
            <h3>{comment.createdBy}</h3>
            <p>{comment.comment}</p>
          </div>
        </div>

        {remove && 
        <div 
          className={styles.removeComment} 
          onClick={() => deleteComment(comment.id)}>
          <BsTrash3Fill/>
        </div>}

        {remove && loading && (
          <div
            className={styles.removeComment} >
            <BsTrash3Fill/>
          </div>
        )}

      </div>
  )
}

export default CardComment
