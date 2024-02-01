import { Container, FadeMain } from './styles'

//utils
import showMenu from '../../utils/showOrHideMenu'

const Fade = () => {

    return(
        <Container className='hide' id='boxFade'>
            <FadeMain onClick={showMenu}/>
        </Container>
    )

}

export default Fade