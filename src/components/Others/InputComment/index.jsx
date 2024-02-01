import { useRef, useState } from 'react'
import { Container, ImgUser, Input, ButtonComment, IconSend, BlockInput, Login } from './styles'

import { useInsertCommentary } from '../../../hooks/useInsertCommentary'
import { Loading } from '../Loading'

import userDefault from '../../../assets/user_default.png'

const InputComment = ({
    user,
    idPost
}) => {

    const inputCommentRef = useRef()

    const [ comment, setComment ] = useState("")

    const { insertCommentary, response } = useInsertCommentary("comments")

    const handleSubmit = async(e) => {
         e.preventDefault()

         if(!comment){
             return
         }

         if(!user){
             return
         }

         const commentDoc = {
             idPost: idPost,
             uid: user.uid,
             createdBy: user.displayName,
             comment,
         }

         insertCommentary(commentDoc)
        
         inputCommentRef.current.value = ""
     }

    return(
        <>
            {/*Input Area*/}
            
            <Container onSubmit={handleSubmit}>
                <ImgUser src={userDefault} alt="" />
                <Input 
                    type="text" 
                    placeholder='Escreva seu comentário...' 
                    onChange={(e)=> setComment(e.target.value)} 
                    required
                    ref={inputCommentRef}
                    disabled={user ? false : true}
                />

                {user ? (
                    <>
                        {response.loading && <ButtonComment type='submit' disabled><Loading/></ButtonComment>}
                        {!response.loading && <ButtonComment type='submit' ><IconSend/></ButtonComment>}
                    </>
                ) : (
                    <BlockInput>
                        <span>Faça Login para comentar!</span>
                        <Login to="/login">Login</Login>
                    </BlockInput>
                )}
            </Container>
        </>
    )
}

export default InputComment