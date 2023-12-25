import { Container, Title, Description, Body, ShowPost, InfoPost, UserImage, Author, TagsArea } from './styles'

import userDefault from '../../assets/user_default.png'

const CardPost = ({ post }) => {

    const { title, description, id, createdBy, tagsArray } = post

    return(
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Body>
                <ShowPost to={`/post/${id}`}>Ler conteúdo</ShowPost>
                <InfoPost>
                    <UserImage src={userDefault}/>
                    <Author>{createdBy}</Author>
                </InfoPost>
                <TagsArea>
                    {tagsArray.map((tag) => (
                        <p key={tag}><span>#</span>{tag}</p>
                    ))}
                </TagsArea>
            </Body>
        </Container>
    )
}

export default CardPost