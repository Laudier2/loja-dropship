import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
//import { Typography } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import {  ConatinerMain, ContainerDecription, ContainerDecriptionSecudaria, ContainerDescriptionButton, ContainerImage, ContainerImageMini } from './styles';

const Descricao = () => {

  //console.log(orderData)


  const qunt = localStorage.getItem('quantity')
  //const id = localStorage.getItem('id')

  //const prodFilter = prod.filter((req) => (req.id === id))

  const [img1, setImage1] = useState(``)
  const [img2, setImage2] = useState('')
  const [img3, setImage3] = useState('')
  const [img4, setImage4] = useState('')
  const [img5, setImage5] = useState('')
  const [price, setReceb2] = useState('')
  const [receb_data_name, setReceb3] = useState('')
  const [desc, setReceb4] = useState('')


  useEffect(() => {
    const req = localStorage.getItem("img0")
    setImage1(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img1")
    setImage2(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img2")
    setImage3(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img3")
    setImage4(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img4")
    setImage5(req)
  }, [])

  useEffect(() => {
    const req1 = localStorage.getItem("price")
    setReceb2(req1)
  }, [])

  useEffect(() => {
    const req2 = localStorage.getItem("name")
    setReceb3(req2)
  }, [])

  useEffect(() => {
    const req3 = localStorage.getItem("description")
    setReceb4(req3)
  }, [])

  function over0() {
    document.getElementById("logo").src = `${img1}`;
  }
  function over1() {
    document.getElementById("logo").src = `${img2}`;
  }
  function over2() {
    document.getElementById("logo").src = `${img3}`;
  }

  function over3() {
    document.getElementById("logo").src = `${img4}`;
  }

  function over4() {
    document.getElementById("logo").src = `${img5}`;
  }

  const product = useSelector(productsSlice => productsSlice.products.items)

  const localId = localStorage.getItem("id")

  const productFilter = product.filter(product => (product.id === localId))

  console.log(localId)

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }


  return (
    <ConatinerMain>
      {productFilter === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> :
        <div >
          <div >
            <div >
              <div >
                <div >
                  <ContainerImageMini>
                    <img src={img1 === "" ? "" : img1} alt="" onMouseOver={() => over0(over0)} />
                  </ContainerImageMini>
                  <ContainerImageMini>
                    <img src={img2 === "" ? "" : img2} alt="" onMouseOver={() => over1(over1)} />
                  </ContainerImageMini>
                  <ContainerImageMini>
                    <img src={img3 === "" ? "" : img3} alt="" onMouseOver={() => over2(over2)} />
                  </ContainerImageMini>
                  <ContainerImageMini>
                    <img src={img4 === "" ? "" : img4} alt="" onMouseOver={() => over3(over3)} />
                  </ContainerImageMini>
                  <ContainerImageMini>
                    <img src={img5 === "" ? "" : img5} alt="" onMouseOver={() => over3(over4)} />
                  </ContainerImageMini>
                </div>
                <ContainerImage >
                  <img src={img1} id="logo" alt="Elemento vindo da função da pasta public" />
                </ContainerImage>
                <ContainerDecription>
                  <h5 ><strong>{receb_data_name}</strong></h5>
                  <div>
                    4.8
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    (6505)
                  </div>
                  <p><strong>R$ {price}</strong></p>
                  <span><strong>em 12x R$7,²³</strong></span>
                  <br />
                  <a href="/desc"><span>ver os meio de pagamento</span></a>
                  <br /><br />
                  <h5>Cor: <strong>Blue</strong></h5>
                  <div role="group" aria-label="Basic example">
                    <button type="button">Preto</button>
                    { }
                  </div>
                  <div>
                    <h4><strong>DESCRIÇÃO</strong></h4>
                    <br /><br /><br />
                    <p>
                    {desc}
                    </p>
                  </div>
                </ContainerDecription>
                <ContainerDecriptionSecudaria>

                  <strong>Envio para todo o país</strong>
                  <br />
                  <span>Saiba os prazos de entrega e as formas de envio.</span>
                  <div >
                    <LocationOnIcon />
                    <a href="/desc">Calcular prazo de entrega</a>
                  </div>
                  <div>
                    <p><strong>Quantidade
                      <div>
                        disponivel ({qunt})
                      </div>
                    </strong> <br /><br />
                      <span>Frete gratis comprando 2 unidade</span>
                    </p>
                  </div>
                  
                </ContainerDecriptionSecudaria>
                <ContainerDescriptionButton>
                <Link to="/card" style={{ textDecoration: 'none' }}>
                    <button>Comprar agora</button>
                    {/*<button className="btn btn-primary btn-block p-2">Comprar agora</button>*/}
                  </Link>
                  <button onClick={() => handlerCartAdd(productFilter)}>Adicionar ao carrinho</button>

                  <br />
                  <div>
                    <p><SwapHorizIcon /> <strong>Devolução Gratis</strong> <br />
                      <span >Você tem 7 dias a partir da data de recebimento.</span>
                    </p>
                  </div>
                  <br />
                  <div>
                    <p><VerifiedUserIcon /> <strong >Compra Garantida</strong> <br />
                      <span >eceba o produto que está esperando ou devolvemos o dinheiro.</span>
                    </p>
                  </div>
                </ContainerDescriptionButton>
              </div>
            </div>
          </div>
          {/*  <Footer />*/}
        </div>}
    </ConatinerMain>
  );
}

export default Descricao;

