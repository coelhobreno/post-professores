import styles from './EditPost.module.css'

//hooks
import { useEffect, useState } from 'react'
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom';

import { useFetchDocument } from '../../hooks/useFetchDocument';

const EditPost = () => {

    const {id} = useParams()
    const { user } = useAuthValue()

    const {document: post, loading} = useFetchDocument("posts", id)

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")

    useEffect(() => {
        if(post){
            setTitle(post.title)
            setDescription(post.description)
            setImage(post.image)
            setBody(post.body)

            const textTags = post.tagsArray.join(", ")
            setTags(textTags)
        }

    }, [post])

    const [formError, setFormError] = useState(null)

    const { response, updateDocument } = useUpdateDocument("posts")

    const handleSubmit = async(e) => {
        e.preventDefault()

        setFormError("")

        //Verificação dos dados
        if(!title || !description || !image || !body || !tags){
            return setFormError("Preencha todos os campos")
            
        }

        //Verificação imagem
        try{
            new URL(image)
        }catch(error){
            return setFormError("A imagem precisa ser uma URL.")
        }

        //Criando array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        const data = {
            title,
            description,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        }

        updateDocument(data, id)
        navigate("/dashboard")
        
    }

    return(
        <div className="form_default">
            {loading && <p>Carregando...</p>}
            {post && (
                <>
                    <div className="header">
                        <h1>Editar post</h1>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form_createPost}>
                        <div className="form_container">
                            <label>
                                <span>Título</span>
                                <input 
                                    type="text"
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder='Título do seu post'
                                    value={title}
                                    required
                                />
                            </label>
                            <label>
                                <span>Descrição</span>
                                <input 
                                    type="text"
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder='Descrição do seu post'
                                    value={description}
                                    required
                                />
                            </label>
                            <label>
                                <span>Imagem</span>
                                <input 
                                    type="text"
                                    onChange={e => setImage(e.target.value)}
                                    placeholder='Imagem do seu post (link)'
                                    value={image}
                                    required
                                />
                            </label>
                            <label>
                                <span>Conteúdo</span>
                                <textarea
                                    type="text"
                                    onChange={e => setBody(e.target.value)}
                                    placeholder="Insira o conteúdo do post" 
                                    value={body}
                                    required
                                ></textarea>
                            </label>
                            <label>
                                <span>Tags</span>
                                <input 
                                    type="text"
                                    onChange={e => setTags(e.target.value)}
                                    placeholder='Insira as tags separadas por vírgula'
                                    value={tags}
                                    required
                                />
                            </label>
                        </div>

                        {!response.loading && <button className='btn'>Continuar</button>}
                        {response.loading && <button className='btn' disabled>Aguarde...</button>}
                    </form>
                </>
            )}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
            
        </div>
    )
}

export default EditPost