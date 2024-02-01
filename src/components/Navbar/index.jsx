import { Container, Logo, IconLogo, List, Button, IconMenu } from './styles'

//hooks
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';

//components
import NavbarLink from '../NavbarLink';

//utils
import showMenu from '../../utils/showOrHideMenu';

const Navbar = () => {

     const { user } = useAuthValue()

     const { logout } = useAuthentication()

    return (

         <Container id="navbar">

              <IconMenu onClick={showMenu} />

             <Logo to="/">
                 <IconLogo/>
             </Logo>

             <List>
                 <NavbarLink 
                     route="/"
                     descrip="Início"
                 />  
                 <NavbarLink 
                     route="/about"
                     descrip="Sobre"
                 />
             </List>

             {!user && (
                 <List>
                     <NavbarLink 
                         route="/login"
                         descrip="Login"
                     />
                     <NavbarLink 
                         route="/register"
                         descrip="Cadastre-se"
                         isButton
                     />
                 </List>
             )}
             {user && (
                 <List>
                     <NavbarLink 
                         route="/dashboard"
                         descrip="Dashboard"
                     />
                     <NavbarLink 
                         route="/post/create"
                         descrip="Criar post"
                     />
                    
                     <Button onClick={logout}>Sair</Button>
                 </List>
             )}
         </Container>
    )
}

export default Navbar