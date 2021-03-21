import styled from "styled-components"

export const Container = styled.div`
    width: 20vw;
    height: fit-content;
    background: ${props => props.theme.ternary_color};   
    position: fixed;
    top: 55px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    nav{
        width: 100%;

        ul{
            list-style: none;
            margin-left: 0;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
        
            li{
                cursor: pointer;
                width: 100%;
                height: 76px;
                border: 1px solid #000;
                border-left: none;
                border-right: none;
                padding: 0 5px;
                
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover > .box-icon .icon{
                    color: #fff;
                }

                &:hover{
                    background-color: #fff;
                }

                .box-icon{
                    width: 20%;
                    height: 50px;
                    background: #000;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    z-index: 10;
                
                    

                    .icon{
                        color:  ${props => props.theme.ternary_color};
                        font-size: clamp(1rem, 2.5vw, 3rem);
                    }
                }

                .box-txt{
                    width: 80%;
                    height: 100%;
                    display: flex;
                    justify-content: center;

                    p{
                        padding-top: 22px;
                        font-size: clamp(.8rem, 2.5vw, 1.1rem);
                        text-transform: uppercase;
                        color: #000;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    `
export const Nav = styled.nav`
    width: 100%;
    height: fit-content;
    
`