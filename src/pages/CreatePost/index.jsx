import React, { useEffect, useState } from 'react';

import { FormDefault, Header, Form, AddOrRemoveArea, IconAdd, IconRemove } from './styles'

//hooks
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';

//components
import { TitleForm, LabelTextAreaForm, LabelInputForm, ButtonForm } from '../../components/FormSplit';
import { Loading } from '../../components/Others/Loading';
import BoxError from '../../components/BoxError';

//utils
import { isSpecialChacacters } from '../../utils/isSpecialChacacters';
import { manageContent, handleInputChange } from '../../utils/contentManipulation' //Gerenciamento dos conteúdos

const CreatePost = () => {

    const navigate = useNavigate()
    const { user } = useAuthValue()

    const { response, insertDocument } = useInsertDocument("posts")

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [tags, setTags] = useState("")

    const [formError, setFormError] = useState(null)

    const handleSubmit = async(e) => {
        
        e.preventDefault()
        
        setFormError("")

        if(!title || !description || !image || !tags){
            return setFormError("Preencha todos os campos")
        }

        try{
            new URL(image)
        }catch(error){
            return setFormError("A imagem é inválida")
        }

        if(isSpecialChacacters(tags)){
            return setFormError("O campo 'tags' está com caracteres indesejados. Por favor, evite o uso de acentos e caracteres especiais, como '@', '#', '.' e outros")
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

        navigate("/")
        
    }

    useEffect(() => {
        setFormError(response.error)
    }, [response.error])

    {/*Variáveis subtitulos e conteúdos*/}
    const [inputState, setInputState] = useState([
        {subTitle: "", body: "" },
    ])

    return (

        <FormDefault>
            <Header>
                <TitleForm value="Criar post"/>
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

                {!response.loading && <ButtonForm value="Continuar"/>}
                {response.loading && <ButtonForm disabled value={<Loading/>} />}
                
                {formError && <BoxError errorMessage={formError}/>}

            </Form>
            
         </FormDefault>
    )
}

export default CreatePost