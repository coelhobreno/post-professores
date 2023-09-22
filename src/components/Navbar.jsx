import { Link, NavLink } from 'react-router-dom'

import { FaScroll } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

import styles from './Navbar.module.css'

//hooks
import { useAuthValue } from '../context/AuthContext';
import { useAuthentication } from '../hooks/useAuthentication';

const Navbar = () => {

    const { user } = useAuthValue()

    const { logout } = useAuthentication()

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                <GiTeacher/>
            </Link>

            <ul>
                <li className={styles.checked_page}>
                    <NavLink to="/" className={({isActive}) => (isActive?styles.active:"")}>Início</NavLink>
                </li>

                <li className={styles.checked_page}>
                    <NavLink to="/about" className={({isActive}) => (isActive?styles.active:"")}>Sobre</NavLink>
                </li>
            </ul>

            {!user && (
                <>
                    <ul>
                        <li className={styles.checked_page}>
                            <NavLink to="/login" className={({isActive}) => (isActive?styles.active:"")}>Login</NavLink>
                        </li>
                        <li className={styles.btn_log}>
                            <NavLink to="/register" className="btn dark-outline" >Cadastre-se</NavLink>
                        </li>
                    </ul>
                </>
            )}
            {user && (
                <>
                    <ul>
                        <li className={styles.checked_page}>
                            <NavLink to="/dashboard" className={({isActive}) => (isActive?styles.active:"")}>Dashboard</NavLink>
                        </li>
                        <li className={styles.checked_page}>
                            <NavLink to="/post/create" className={({isActive}) => (isActive?styles.active:"")}>Criar Post</NavLink>
                        </li>
                        <li className={styles.btn_log}>
                            <button className="btn dark-outline" onClick={logout}>Sair</button>
                        </li>
                    </ul>
                </>
            )}
        </nav>
    )
}

export default Navbar