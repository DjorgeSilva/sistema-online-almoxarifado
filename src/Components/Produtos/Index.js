import React from 'react'
import {
    Container,
    Busca,
    ResultadoBusca,
    TitleResultadoBusca,
    DataBusca,
    InfoProduct,
    Estoque,
} from "./ProdutosElements"
import { Row, Col } from "react-bootstrap"
import martelo from "../../img/martelo.png"
import { IoIosSave } from "react-icons/io"
import { BsPencilSquare } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { TiDelete } from "react-icons/ti"
import { DataProdutos } from "./DataProdutos"

export const Produto = ({ isOpen }) => {

    return (
        <Container isOpen={isOpen}>
            <Busca>

                <div className="wrap-filtros">

                    <div className="box-filtros">
                        <input type="checkbox" id="produtos" name="produtos" />
                        <label for="produtos">Produtos</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="codigo" name="codigo" />
                        <label for="codigo">Código</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="num_serie" name="num_serie" />
                        <label for="num_serie">Nº Série</label>
                    </div>

                    <div className="box-filtros">
                        <input type="checkbox" id="localization" name="localization" />
                        <label for="localization">Localização</label>
                    </div>

                </div>

                <div className="box-busca">
                    <input type="search" id="busca" name="busca" placeholder="Pesquisar produto..." />
                </div>
            </Busca>

            <ResultadoBusca>

                <TitleResultadoBusca>
                    <Row >
                        <Col xs={1} className="coluna-titulo-busca">
                            <p>Item</p>
                        </Col>

                        <Col xs={2} className="coluna-titulo-busca">
                            <p>Código de Barras</p>
                        </Col>

                        <Col xs={2} className="coluna-titulo-busca">
                            <p>Produto</p>
                        </Col>

                        <Col xs={1} className="coluna-titulo-busca">
                            <p>Qtde</p>
                        </Col>

                        <Col xs={1} className="coluna-titulo-busca">
                            <p>Kit</p>
                        </Col>

                        <Col xs={1} className="coluna-titulo-busca">
                            <p>UND</p>
                        </Col>

                        <Col xs={1} className="coluna-titulo-busca">
                            <p>Nº Série</p>
                        </Col>

                        <Col xs={2} className="coluna-titulo-busca">
                            <p>Localização</p>
                        </Col>

                        <Col xs={1} className="coluna-titulo-busca">
                            <p>Custo</p>
                        </Col>

                    </Row>
                </TitleResultadoBusca>


                {DataProdutos.map((item) => {
                    return (
                        <DataBusca>
                            <Row >
                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>1</p>
                                </Col>

                                <Col xs={2} className="coluna-resultado-busca">
                                    <p>87000000000</p>
                                </Col>

                                <Col xs={2} className="coluna-resultado-busca">
                                    <p>Martelo</p>
                                </Col>

                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>30</p>
                                </Col>

                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>No-Kit</p>
                                </Col>

                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>Peça</p>
                                </Col>

                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>4000</p>
                                </Col>

                                <Col xs={2} className="coluna-resultado-busca">
                                    <p>Ármario B</p>
                                </Col>

                                <Col xs={1} className="coluna-resultado-busca">
                                    <p>20000,00</p>
                                </Col>

                            </Row>
                        </DataBusca>

                    )
                })}


            </ResultadoBusca>

            <InfoProduct>
                <Row >
                    <Col xs={9} className="coluna-inputs">

                        <Row style={{ margin: 0 }}>
                            <Col xs={12} className="coluna-inputs">
                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Código de barras:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="produto">Produto:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="qtde">Quantidade:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Marca Modelo</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Unid. Medida</label>
                                    <input type="text" id="cod_barras" />
                                </div>
                            </Col>

                            <Col xs={12} className="coluna-inputs">

                                <div className="coluna-inputs-item">
                                    <label for="cars">Categoria:</label>

                                    <select name="cars" id="cars">
                                        <option value="volvo">Categoria 1</option>
                                        <option value="saab">Categoria 2</option>
                                        <option value="mercedes">Categoria 3</option>
                                        <option value="audi">Categoria 4</option>
                                    </select>
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Localização:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Custo Produto:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                            </Col>

                            <Col xs={12} className="coluna-inputs">

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Nº de Série:</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="data_compra">Mais informações</label>
                                    <input type="text" id="cod_barras" />
                                </div>

                            </Col>

                            <Col xs={12} className="coluna-inputs">

                                <div className="coluna-inputs-item">
                                    <label for="data_compra">Data da Compra:</label>
                                    <input type="datetime-local" id="data_picker" className="data_picker"
                                        name="meeting-time" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Data Frabricação:</label>
                                    <input type="datetime-local" id="data_picker" className="data_picker"
                                        name="meeting-time" />
                                </div>

                                <div className="coluna-inputs-item">
                                    <label for="cod_barras">Data Validade:</label>


                                    <input type="datetime-local" id="data_picker" className="data_picker"
                                        name="meeting-time" />
                                </div>

                            </Col>

                        </Row>



                    </Col>

                    <Col xs={3} className="coluna-img">
                        <img src={martelo} alt="martelo" />
                    </Col>
                </Row>
            </InfoProduct>

            <Estoque>

                <Row style={{ margin: 0 }}>

                    <Col className="wrap-box" xs={8}>
                        <h6>Resumo do Estoque</h6>

                        <div className="box-info">

                            <div className="coluna-inputs-item">
                                <label for="data_compra">Estoque Atual</label>
                                <input type="text" id="cod_barras" />
                            </div>

                            <div className="coluna-inputs-item">
                                <p>+</p>
                            </div>

                            <div className="coluna-inputs-item">
                                <label for="data_compra">Compras</label>
                                <input type="text" id="cod_barras" />
                            </div>

                            <div className="coluna-inputs-item">
                                <p>=</p>
                            </div>

                            <div className="coluna-inputs-item">
                                <label for="data_compra">Estoque Final</label>
                                <input type="text" id="cod_barras" />
                            </div>
                        </div>
                    </Col>

                    <Col xs={2} className="wrap-box" style={{ border: "none" }} >
                        <div className="btn-estoque">
                            <button type="button" >Cadastrar<IoIosSave className="icone-btn" style={{ color: "#008000" }} /></button>
                            <button type="button">Alterar<BsPencilSquare className="icone-btn" style={{ color: "#0000FF" }} /></button>
                            <button type="button">Excluir<MdDelete className="icone-btn" style={{ color: "#FF0000" }} /></button>
                            <button type="button">Limpar<TiDelete className="icone-btn" style={{ color: "#FFA500" }} /></button>
                        </div>
                    </Col>

                </Row>




            </Estoque>



        </Container>
    )
}
