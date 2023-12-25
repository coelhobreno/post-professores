import { Container, InfoUser, Description, Image, IconRemove } from './styles'

import { useDeleteComment } from '../../hooks/useDeleteComment'

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
                <Image src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />
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