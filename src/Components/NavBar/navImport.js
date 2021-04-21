import React, { useState } from 'react'
import Navbar from '../NavBar'
import SideBar from '../SideBar'

const NavImport = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default NavImport
