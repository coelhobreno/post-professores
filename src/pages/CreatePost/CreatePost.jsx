import styles from './CreatePost.module.css'

//hooks
import { useEffect, useState} from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { isSpecialChacacters } from '../../components/isSpecialChacacters';

//component
import { useValueInsertContArea } from '../../context/InsertContextContArea';

//context
import InsertContArea from '../../components/InsertContArea';

const CreatePost = () => {

    const navigate = useNavigate()
    const { user } = useAuthValue()

    //reducer de subtitulos e body
    const { inputState, dispatch } = useValueInsertContArea()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [tags, setTags] = useState("")

    const [formError, setFormError] = useState(null)

    const { response, insertDocument } = useInsertDocument("posts")

    useEffect(() => {
        dispatch({type: "CLEAR"})
    }, [])

    const handleSubmit = async(e) => {
        
        e.preventDefault()
        
        setFormError("")

        //Verificação dos dados
        if(!title || !description || !image || !tags){
            return setFormError("Preencha todos os campos")
        }

        //Verificação imagem
        try{
            new URL(image)
        }catch(error){
            return setFormError("A imagem é inválida")
        }

        if(isSpecialChacacters(tags)){
            return setFormError("O campo tags contém caracteres indesejados!")
        }

        //Criando array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        insertDocument({
            title,
            description,
            image,
            inputState,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        console.log(inputState)

        dispatch({type: "CLEAR"})
        navigate("/")
        
    }

    return (
        
        <div className="form_default">
            <div className="header">
                <h1>Criar post</h1>
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
                    
                    <InsertContArea/>

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
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
            
        </div>
    )
}

export default CreatePost