import styled from "styled-components"

export const Container = styled.div`
    width: ${({ isOpen }) => (isOpen ? 'calc(100% - 20vw)' : '100%')};
    height: fit-content;
    position: absolute;
    right: 0;
    background:  ${props => props.theme.primary_color};

`

export const Main = styled.div`
    width: 100%;
    height: fit-content;
    background: #000;
`

export const TitleMenu = styled.div`
    width: 100%;
    height: 55px;

    display: flex;


    h4{
        display: block;
        width: 80%;
        font-size: clamp(1.3rem, 2.5vw, 3rem);
        color: ${props => props.theme.ternary_color};
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        padding-top: 17px;
        padding-left: 200px;
       
    }

    img{
        width: 16%;
        object-fit: cover;
        margin-top: 10x;
    }

`

export const BannerHome = styled.div`
    width: 100%;
    padding-top:  70px;

    img{
        width: 100%;
    }
`
