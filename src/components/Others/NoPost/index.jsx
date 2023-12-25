import { Container, IconWarning, Title, Description, Redirect } from './styles'

const NoPost = ({
    title,
    desc,
    redirect, 
    route
}) => {

    return (
        <Container>
            <IconWarning/>

            <Title>{title}</Title>

            <Description>{desc}</Description>

            <Redirect to={route}>{redirect}</Redirect>
        </Container>
    )
}

export default NoPost