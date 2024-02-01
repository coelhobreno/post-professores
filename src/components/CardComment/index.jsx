import { Container, InfoUser, Description, Image, IconRemove } from './styles'

import { useDeleteComment } from '../../hooks/useDeleteComment'

import userDefault from '../../assets/user_default.png'

const CardComment = ({ 
    currentComment,
    canRemove
 }) => {

    const { id, createdBy, comment } = currentComment

    const { deleteComment } = useDeleteComment("comments", id)

    const loading = true

    return(
        <Container>
            <InfoUser>
                <Image src={userDefault} alt="" />
                <Description>
                    <h3>{createdBy}</h3>
                    <p>{comment}</p>
                </Description>
            </InfoUser>

            {canRemove && <IconRemove onClick={() => deleteComment(id)}/>}
      </Container>
    )
}

export default CardComment