import styles from './Post.module.css'
import React from 'react'

//hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useFetchCommentarys } from '../../hooks/useFetchCommentarys'
import { useInsertCommentary } from '../../hooks/useInsertCommentary'
import { useEffect, useRef, useState } from 'react'

//components
import CardComment from '../../components/CardComment'

//context
import { useAuthValue } from '../../context/AuthContext'

const Post = () => {

    const inputCommentRef = useRef()
    const { id } = useParams()
    const { user } = useAuthValue()

    const { document: post, loading  } = useFetchDocument("posts", id)
    
    const { insertCommentary, response } = useInsertCommentary("comments")
    const { docComments, loading: loadingComments, error: errorComments } = useFetchCommentarys("comments", id)

    const [comment, setComment] = useState("")
    const [inputError, setInputError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!comment){
            return
        }

        if(!user){
            return
        }

        const commentDoc = {
            idPost: id,
            uid: user.uid,
            createdBy: user.displayName,
            comment,
        }

        insertCommentary(commentDoc)
        inputCommentRef.current.value = ""
        console.log("Cadastrado!")
    }
    
    return (
        <>
            {loading && !post && <p className={styles.loading}>Carregando...</p>}
            {post && (
                <>
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

                    <div className={styles.comment_container}>
                        <div className={styles.add_comment}>
                            <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder='Escreva seu comentário...' 
                                    onChange={(e)=> setComment(e.target.value)} 
                                    required
                                    ref={inputCommentRef}/>
                                    {response.loading && <button type='submit' disabled></button>}
                                    {!response.loading && <button type='submit'></button>}
                            </form>
                        </div>
                        {docComments && docComments.length == 0 && (
                            <div className={styles.no_comments}>
                                <h2>Ainda sem comentários!</h2>
                                <p>Queremos ouvir a sua voz e valorizamos a sua perspectiva! Seja pioneiro, seja o primeiro a adicionar um comentário e compartilhar sua opinião conosco.</p>
                            </div>
                        )}
                        {docComments && docComments.length > 0 && <h3 className={styles.title_comment}>Comentários ({docComments.length}):</h3>}
                        {docComments && docComments.map((comment, index) => (
                            <React.Fragment key={index}>
                                
                                {user.uid === comment.uid && (
                                    <CardComment comment={comment} remove={true}/>
                                )}

                                {user.uid !== comment.uid && (
                                    <CardComment comment={comment}/>
                                )}
                            </React.Fragment>
))}
                    </div>

                    
                </>
            )}
            
        </>
    )
}

export default Post