import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

 export const Nav = styled.nav`
    justify-content: center; 
    align-items: center; 
    font-size: 1rem; 
    top: 0; 
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
 `;

 export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    top: 0; 
    z-index:1;
    padding: 0 24px; 
    height: 80px; 
    max-width: 1100x;
 `;

 export const NavLogo= styled(LinkR)`
color: black; 
cursor: pointer; 
font-size: 1rem; 
display: flex; 
align-items: center; 
margin-left: 24px; 
font-weight: bold; 
text-decoration: none;
justify-self: flex-start;
right: 0px;
`; 


export const MobileIcon = styled.div`
display: none; 

@media screen and (max-width: 960px) {
    display: flex; 
    position: absolute; 
    top: 0; 
    right: 0; 
    transform: translate(-100%, 60%);
    font-size: 1.8rem; 
    cursor: pointer;
    color: black;
}
`;

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center; 
    margin-right: 65px; 
    text-align: center; 
    list-style: none;

    @media screen and (max-width: 960px) {
        display: none
    }
`;


export const NavItems = styled.li`
    height: 80px;
`; 

export const Items= styled.div`
color: black; 
display: flex; 
align-items: center; 
text-decorations: none; 
padding: 0 3rem; 
height: 100%; 
cursor: pointer; 

&.hover {
    border-bottom: 3px solid black; 
}
`; 