import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, Items } from './NavBarElements'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
});

const Navbar = ({ toggle }) => {
    const styles = useStyles();

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Link className={styles.link} to={'/'}>E S T H E R&nbsp;&nbsp;&nbsp; X I N</Link>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <Items>
                                <Link className={styles.link} to={'/about'}>about</Link>
                            </Items>
                        </NavItems>
                        <NavItems>
                            <Items>projects</Items>
                        </NavItems>
                        <NavItems>
                            <Items>
                                <Link className={styles.link} to={'/community'}>community</Link>
                            </Items>
                        </NavItems>
                        <NavItems>
                            <a className={styles.link} href="https://drive.google.com/file/d/10wj7lyNlm4WQBz9slUk7fSmh5gKmlNeh/view?usp=sharing" target="_blank" rel="noreferrer">
                                <Items>resume</Items>
                            </a>
                        </NavItems>
                    </NavMenu>
                </NavbarContainer>

            </Nav>
        </>
    )
}

export default Navbar;