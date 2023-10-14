import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import { ConatinerMain, ContainerDecription, ContainerDecriptionSecudaria, ContainerImage, ContainerImageMini } from './styles';

const useStyles = makeStyles(() => ({
  img_desc: {
    marginTop: '-100%',
    width: '77%',
    height: '60vh',
    marginLeft: '50px',
    '@media screen and (max-width: 1580px)': {
      marginTop: '-20px',
    },
    '@media screen and (max-width: 1180px)': {
      marginTop: '15px',
    },
    '@media screen and (max-width: 780px)': {
      width: '75%',
      height: '30vh',
      marginTop: '-240px',
      marginBottom: '20%',
      marginLeft: '70px',

    }
  },
  img_desc_mini: {
    display: 'flex',
    width: '70px',
    marginLeft: '-110px',
    '@media screen and (max-width: 780px)': {
      width: '42px',
      marginLeft: '-10px',
    }
  },
  div_title: {
    fontSize: '1px',
    display: 'none',
    marginTop: '20px',
    '@media screen and (max-width: 780px)': {
      display: "flex",
      fontSize: '15px',
      marginTop: '55px',
    }
  },
  img_div_mini: {
    marginTop: '5%',
    marginLeft: '-30px',
    '@media screen and (max-width: 1680px)': {
      marginTop: '20px',
    },
    '@media screen and (max-width: 1180px)': {
      marginTop: '20px',
    },
    '@media screen and (max-width: 780px)': {
      marginTop: '10px',
    }
  },
  div_descriptio: {
    marginTop: '350px',
    '@media screen and (max-width: 780px)': {
      marginTop: '150px',
    }
  },
  div_price: {
    display: 'none',
    '@media screen and (max-width: 780px)': {
      display: "flex",
      fontSize: '25px',
      marginTop: '8px',
    }
  },
  font_span: {
    fontSize: '16px',
    opacity: '0.5'
  }
}))

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

  const classes = useStyles();

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
    const req3 = localStorage.getItem("descricao")
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


  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
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
                  <div className={classes.img_div_mini}>
                    <ContainerImageMini>
                      <img src={img1 === "" ? "" : img1} alt="" onMouseOver={() => over0(over0)} />
                    </ContainerImageMini>
                    {/*<img className={`card ${classes.img_desc_mini} mb-1`} src={img1 === "" ? "" : img1} alt="" onMouseOver={() => over0(over0)} />
                    <img className={`card ${classes.img_desc_mini} mb-1`} src={img2 === "" ? "" : img2} alt="" onMouseOver={() => over1(over1)} />
                    <img className={`card ${classes.img_desc_mini} mb-1`} src={img3 === "" ? "" : img3} alt="" onMouseOver={() => over2(over2)} />
                    <img className={`card ${classes.img_desc_mini} mb-1`} src={img4 === "" ? "" : img4} alt="" onMouseOver={() => over3(over3)} />
  <img className={`card ${classes.img_desc_mini} mb-1`} src={img5 === "" ? "" : img5} alt="" onMouseOver={() => over3(over4)} />*/}
                  </div>
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
                    <h5 ><strong>DESCRIÇÃO</strong></h5>
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
                    <p><strong>Quantidade:
                      <div>
                        <button className="" onClick={handleClick1}>+</button>
                        {counter < 0 ? 0 : counter} unidade
                        <button className="" onClick={handleClick2}>-</button>
                        ({qunt})
                      </div>
                    </strong> <br /><br />
                      <span>Frete gratis comprando 2 unidade</span>
                    </p>
                  </div>
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
                </ContainerDecriptionSecudaria>
              </div>
            </div>
          </div>
          {/*  <Footer />*/}
        </div>}
    </ConatinerMain >
  );
}

export default Descricao;

