import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';


 export const SidebarContainer = styled.aside`
    position: fixed; 
    z-index: 999; 
    width: 100%; 
    height: 100%; 
    background: white;
    display: grid; 
    align-items: center; 
    top:0; 
    left: 0; 
    transition: 0.3s ease-in-out; 
    font-size: 15;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
 `;


 export const CloseIcon = styled(FaTimes)`
    color: black; 
 `;

 export const Icon = styled.div`
    position: absolute; 
    z-index: 999; 
    background: transparent;
    top:1.5rem; 
    right: 1.5rem; 
    font-size: 2rem
    outline: none; 
    cursor: pointer;

 `;

 export const SideBarWrapper = styled.div`
    colour: white;
 `;

 export const SideBarMenu = styled.ul`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(6, 100px);
    text-align: center; 

    @media screen and (max-width: 500px){
        gird-template-rows: repeat(4, 10px);
    }
 `;


 export const SideBarLink = styled.div`
 display: flex; 
 align-items: center; 
 justify-content: center; 
 font-size: 1.5rem
text-decoration: none; 
list-style: none; 
transition: 0.2s ease-in-out; 
text-decoration: none; 
color: black; 
cursor: pointer; 
font-weight: bold; 

&:hover {
    color: grey; 
    transition: 0.2s ease-in-out;
}
`;


 