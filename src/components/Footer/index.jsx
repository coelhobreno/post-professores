import { Container, Title, Description, ListSocialNetworks, Redirect } from './styles'

import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {

    return(
        <Container>
            <Title>Aprimore seus estudos com nosso site!</Title>

            <Description>Plataforma interativa de compartilhamento para estudantes, facilitando a troca de materiais educacionais, notas e dúvidas entre colegas, promovendo uma comunidade colaborativa e enriquecendo o aprendizado &copy; 2023</Description>

            <ListSocialNetworks>
                <Redirect href="https://www.linkedin.com/in/coelhobreno/"><IoLogoLinkedin/></Redirect>
                <Redirect href="mailto:coelhobreno21@gmail.com"><IoMdMail/></Redirect>
                <Redirect href="https://github.com/coelhobreno"><IoLogoGithub/></Redirect>
            </ListSocialNetworks>
        </Container>
    )
}

export default Footer