import { Container } from './styles'

const NavbarLink = ({
    route,
    descrip,
    isButton
}) => {

    return (
        
        <Container 
            to={route}
            className={isButton ? 'button' : ''}
        >{descrip}</Container>
        
    )
}

export default NavbarLink