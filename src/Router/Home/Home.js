import React, { useState } from 'react'
import { Container, Main, BannerHome, TitleMenu } from "./HomeElements.js"
import { Menu } from "../../Components/Menu/Index"
import {Produto} from "../../Components/Produtos/Index"
import logo from "../../img/logo.png"

export const Home = ({ isOpen, changeComponents, setChangeComponents}) => {    

    return (
        <>
            <Menu isOpen={isOpen} changeComponents={changeComponents} setChangeComponents={setChangeComponents}/>

            <Container isOpen={isOpen}>

                {changeComponents == false ?

                    <Main>
                        <TitleMenu isOpen={isOpen} onClick={()=>setChangeComponents(!changeComponents)}>
                            <h4>Almoxarifado</h4>
                        </TitleMenu>

                        <BannerHome>
                            <img src={logo} alt="Logomarca_constru_Service" />
                        </BannerHome>
                    </Main> : null
                }

                {changeComponents == true ?

                    <Main>
                        <TitleMenu isOpen={isOpen}>
                            <h4>Cadastro de Produtos</h4>
                            <img src={logo} alt="Logomarca_constru_Service" />
                        </TitleMenu>

                        <Produto/>
                    </Main> : null
                }


            </Container>

        </>
    )
}
