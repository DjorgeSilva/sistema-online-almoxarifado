import styled from "styled-components"

export const Container = styled.div`
    width: 20vw;
    height: 55px;
    position: fixed;
    top: 0;
    z-index: 100000;

    display: flex;

`

export const Menu = styled.div`
    width: ${({ isOpen }) => (isOpen ? '20vw' : 'fit-content')};
    height: 100%;
    background: ${({ isOpen }) => (isOpen ? '#F5C32E' : '#000')};
    padding: 0 10px; 

    display: flex;
    align-items: center;


    .icone-menu{
        cursor: pointer;
        color: ${props=> props.theme.primary_color};
        font-size: 3.1rem;
        background: transparent;
    }
`;
