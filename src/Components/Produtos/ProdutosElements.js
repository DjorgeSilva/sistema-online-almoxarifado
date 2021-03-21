import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background: #000;
    padding: 20px;

`

export const Busca = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.ternary_color};
    border-radius: 50px;
    padding: 5px  20px;
    
    display: flex;

    .wrap-filtros{
        width: 70%;
        display: flex;
        padding-top: 3px;

        .box-filtros{
            label{
                font-weight: bold;
                color: ${props => props.theme.font_color};
            }
        }
    }

    .box-busca{
        width: 30%;
        height: 100%;

        input{
            height: 30px;
            padding-left: 10px;
        }
    }


    `

export const ResultadoBusca = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 10px;

    p{
        font-size: .9rem;
    }

 `

export const TitleResultadoBusca = styled.div`
    width: 100%;
    height: 30px;
    background: #fff;
    margin: 0 auto;
    

    .coluna-titulo-busca{
        width: 100%;
        height: 30px;
        border: 1px solid ${props => props.theme.ternary_color};
        border-bottom: none;
    }

`

export const DataBusca = styled.div`
    width: 100%;
    height: 30px;
    background: ${props => props.theme.ternary_color};

    .coluna-resultado-busca{
        height: 30px;
        border: 1px solid ${props => props.theme.secundary_color};
    }

`

export const InfoProduct = styled.div`
    width: 100%;
    height: 280px;
    background: ${props => props.theme.ternary_color};;
    margin-top: 10px;
    

    .coluna-inputs{
        width: 100%;
        display: flex;
        justify-content: space-between;
    
        .coluna-inputs-item{
            width: 100%;

            input,
            select{
                cursor: pointer;
                width: 98%;
                height: 30px;
            }
        }
    }

    .coluna-img{
        display: block;
        width: 100%;
        height: 280px;
        background: #fff;

        img{
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
`

export const Estoque = styled.div`
    width: 100%;
    height: 160px;
    background: ${props => props.theme.ternary_color};
    margin-top: 10px;
    padding: 20px;
    padding-top: 10px;
    outline:none;
    
    .wrap-box{
        height: fit-content;
        border: 1px solid #000;

        h6{
            text-align: center;
            padding: 13px 0;
            font-weight: bold;
        }

        .box-info{
            width: 100%;
            display: flex;
            flex-direction: row;
    
            .coluna-inputs-item{
                p{
                    margin: 0 10px;
                    margin-top: 27px;
                    font-weight: bold;
                    font-size: 1.3rem;
                }
            }
        }

        .btn-estoque{
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 0;
            padding-top: 0;

            button{
                background: green;
                font-size: 1.1rem;
                margin-top: 5px;
                padding: 5px 0;
                background: #000;
                color: #fff;
                border: 1px solid #fff;

                .icone-btn{
                    margin-left: 7px;
                }

                &:first-of-type{
                    margin-top: 0;
                }

                &:hover{
                    background: #fff;
                    color: #000;
                    border: 1px solid #000;
                }

            }
        }

    }




    
`