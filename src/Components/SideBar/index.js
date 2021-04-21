import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './SideBarElements'

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
});

const SideBar = ({ isOpen, toggle }) => {
    const styles = useStyles();

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLink onClick={toggle}>
                            <Link className={styles.link} to={'/about'}>home</Link>
                        </SideBarLink>
                        <SideBarLink onClick={toggle}>
                            <Link className={styles.link} to={'/about'}>about</Link>
                        </SideBarLink>
                        <SideBarLink onClick={toggle}>
                            <Link className={styles.link} to={'/'}>projects</Link>
                        </SideBarLink>
                        <SideBarLink onClick={toggle}>
                            <Link className={styles.link} to={'/community'}>community</Link>
                        </SideBarLink>
                        <SideBarLink>
                            <a className={styles.link} href="https://drive.google.com/file/d/10wj7lyNlm4WQBz9slUk7fSmh5gKmlNeh/view?usp=sharing" target="_blank" rel="noreferrer">
                                resume
                            </a>
                        </SideBarLink>
                    </SideBarMenu>
                </SideBarWrapper>
            </SidebarContainer>
        </>
    )
}

export default SideBar
