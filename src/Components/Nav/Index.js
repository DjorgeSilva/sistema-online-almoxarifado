import React from 'react'
import { Container, Menu} from "./NavElements"
import { MdMenu } from "react-icons/md"
import { IoMdClose } from "react-icons/io"


export const Nav = ({ isOpen, setIsOpen }) => {
    return (
        <Container>

            <Menu isOpen={isOpen}>
                {isOpen ?
                    <IoMdClose className="icone-menu" onClick={() => setIsOpen(!isOpen)} />:
                    <MdMenu className="icone-menu" style={{color: "#fff"}} onClick={() => setIsOpen(!isOpen)} />}
            </Menu>

        </Container>
    )
}
