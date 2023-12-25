//css
import { FormDefault, Header, Form, AddOrRemoveArea, IconAdd, IconRemove } from './styles.jsx'

import { TitleForm, LabelTextAreaForm, LabelInputForm, ButtonForm } from '../../components/FormSplit';

//hooks
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//hooks personality
import { useAuthValue } from '../../context/AuthContext.jsx'
import { useUpdateDocument } from '../../hooks/useUpdateDocument.jsx';
import { useFetchDocument } from '../../hooks/useFetchDocument.jsx';

//utils
import { isSpecialChacacters } from '../../utils/isSpecialChacacters.jsx';
import { manageContent, handleInputChange } from '../../utils/contentManipulation' //Gerenciamento dos conteúdos

import BoxError from '../../components/BoxError/index.jsx';
import { Loading } from '../../components/Others/Loading';

const EditPost = () => {

    {/*Variáveis subtitulos e conteúdos*/}
    const [inputState, setInputState] = useState([
        {subTitle: "", body: "" },
    ])

    const navigate = useNavigate()

    const { id } = useParams()
    const { user } = useAuthValue()

    const {document: post, loading, error} = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [tags, setTags] = useState("")

    useEffect(() => {
        if(post){
            setTitle(post.title)
            setDescription(post.description)
            setImage(post.image)
            
            setInputState(post.inputState)

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
        if(!title || !description || !image || !tags){
            return setFormError("Preencha todos os campos")
        }

        //Verificação imagem
        try{
            new URL(image)
        }catch(error){
            return setFormError("A imagem precisa ser uma URL.")
        }

        if(isSpecialChacacters(tags)){
            return setFormError("O campo tags contém caracteres indesejados!")
        }

        //Criando array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        const data = {
            title,
            description,
            image,
            inputState,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        }

        updateDocument(data, id)
        navigate("/dashboard")
        
    }

    useEffect(() => {
        setFormError(error)
    }, [error])

    return(

        <FormDefault>
            
            {loading ? ( <Loading/> ) : (
                <>
                    <Header>
                        <TitleForm value="Editar post"/>
                    </Header>

                    <Form onSubmit={handleSubmit}>

                        <LabelInputForm
                            title="Título"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Título do seu post'
                            value={title}
                            required 
                        />

                        <LabelTextAreaForm
                            title="Descrição"
                            type="text"
                            onChange={e => setDescription(e.target.value)}
                            placeholder='Descrição do seu post'
                            value={description}
                            required
                        />

                        <LabelInputForm
                            title="Imagem"
                            type="text"
                            onChange={e => setImage(e.target.value)}
                            placeholder='Imagem do seu post (link)'
                            value={image}
                            required
                        />

                        {inputState.map((item, index) => (
                            
                            <React.Fragment key={index}>
                                <LabelInputForm
                                    title={`Subtítulo ${index+1}`}
                                    type="text"
                                    placeholder={`Insira o subtítulo ${index+1}`} 
                                    value={item.subTitle}
                                    onChange={e => handleInputChange(e, index, 'subTitle', inputState, setInputState)}
                                    required
                                />

                                <LabelTextAreaForm
                                    title={`Conteúdo ${index+1}`}
                                    type="text"
                                    placeholder={`Insira o conteúdo ${index+1}`} 
                                    value={item.body}
                                    onChange={e => handleInputChange(e, index, 'body', inputState, setInputState)}
                                    required
                                />
                            </React.Fragment>
                            
                        ))}

                        <AddOrRemoveArea>
                            <IconAdd onClick={() => manageContent('add', inputState, setInputState)}/>
                            <IconRemove onClick={() => manageContent('remove', inputState, setInputState)}/>
                        </AddOrRemoveArea>
                        
                        <LabelInputForm
                            title="Tags"
                            type="text"
                            onChange={e => setTags(e.target.value)}
                            placeholder='Insira as tags separadas por vírgula'
                            value={tags}
                            required
                        />

                        {!response.loading && <ButtonForm value="Salvar"/>}
                        {response.loading && <ButtonForm disabled value={<Loading/>} />}
                        
                        {formError && <BoxError errorMessage={formError}/>}

                    </Form>
                </>
            )}
            
        </FormDefault>
    )
}

export default EditPost