import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './desc.css'
import { makeStyles } from '@material-ui/core/styles';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const useStyles = makeStyles(() => ({
  img_desc: {
    marginTop: '25px',
    width: '340px',
    height: '70vh',
    marginLeft: '-10px',
    '@media screen and (max-width: 1580px)': {
      marginTop: '-320px',
    },
    '@media screen and (max-width: 1180px)': {
      marginTop: '-320px',
    },
    '@media screen and (max-width: 780px)': {
      width: '200px',
      height: '30vh',
      marginTop: '-190px',
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
    marginTop: '-50%',
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

  const qunt = localStorage.getItem('quantity')

  const [receb1, setReceb1] = useState('')
  const [receb2, setReceb2] = useState('')
  const [receb3, setReceb3] = useState('')
  const [receb4, setReceb4] = useState('')
  const [receb01, setReceb01] = useState('')
  const [receb02, setReceb02] = useState('')
  const [receb03, setReceb03] = useState('')

  const classes = useStyles();

  useEffect(() => {
    const req = localStorage.getItem("img0")
    //const req = JSON.parse(req)
    setReceb1(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img1")
    //const req = JSON.parse(req)
    setReceb01(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img2")
    //const req = JSON.parse(req)
    setReceb02(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img3")
    //const req = JSON.parse(req)
    setReceb03(req)
  }, [])

  useEffect(() => {
    const req1 = localStorage.getItem("price")
    //const req1 = JSON.parse(req1)
    setReceb2(req1)
  }, [])

  useEffect(() => {
    const req2 = localStorage.getItem("name")
    //const req2 = JSON.parse(req2)
    setReceb3(req2)
  }, [])

  useEffect(() => {
    const req3 = localStorage.getItem("description")
    //const req3 = JSON.parse(req3)
    setReceb4(req3)
  }, [])

  function over0() {
    document.getElementById("logo").src = `${receb1}`;
  }
  function over1() {
    document.getElementById("logo").src = `${receb01}`;
  }
  function over2() {
    document.getElementById("logo").src = `${receb02}`;
  }

  function over3() {
    document.getElementById("logo").src = `${receb03}`;
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

  return (
    <div>
      <div className="container col-sm-8 mt-5">
        <div className="card-group card">
          <div className="container col-sm-5">
            <div className="card-group">
              <div className="card-body">
                <div className={classes.img_div_mini}>
                  <img className={`card ${classes.img_desc_mini} mb-1`} src={receb1} alt="Elemento vindo da função ove0" onMouseOver={() => over0(over0)} />
                  <img className={`card ${classes.img_desc_mini} mb-1`} src={receb01} alt="Elemento vindo da função ove0" onMouseOver={() => over1(over1)} />
                  <img className={`card ${classes.img_desc_mini} mb-1`} src={receb02} alt="Elemento vindo da função ove1" onMouseOver={() => over2(over2)} />
                  <img className={`card ${classes.img_desc_mini} mb-1`} src={receb03} alt="Elemento vindo da função ove2" onMouseOver={() => over3(over3)} />
                </div>
              </div>
              <img className={`${classes.img_desc}`} id="logo" src={receb1} alt="Elemento vindo da função da pasta public" />
              <h5 className={`${classes.div_title}`}>{receb3}</h5>
              <strong><p className={classes.div_price}>R$ {receb2}</p></strong>
            </div>
          </div>
          <div className="card col-sm-5">
            <div className="card-body">
              <h5 className="card-title h3 mb-3"><strong>{receb3}</strong></h5>
              <div className='mt-1'>
                4.8
                <StarOutlineIcon className='ml-2 mb-1' />
                <StarOutlineIcon className='mb-1' />
                <StarOutlineIcon className='mb-1' />
                <StarOutlineIcon className='mb-1' />
                <StarOutlineIcon className='mr-2 mb-1' />
                (6505)
              </div>
              <p className="card-text h2 mt-2"><strong>R$ {receb2}</strong></p>
              <span><strong>em 12x R$7,²³</strong></span>
              <br />
              <a href="/desc"><span>ver os meio de pagamento</span></a>
              <br /><br />
              <h5>Cor: <strong>Blue</strong></h5>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light card text-primary">Preto</button>
                { }
              </div>
              <div>
                <h5 className="mt-5"><strong>DESCRIÇÃO</strong></h5>
                <Typography className="card-text" dangerouslySetInnerHTML={{ __html: receb4 }} />
              </div>
            </div>
          </div>
          <div className="card-body col-sm-3">
            <p>
              <strong>Envio para todo o país</strong>
              <br />
              <span className={classes.font_span}>Saiba os prazos de entrega e as formas de envio.</span>
            </p>
            <div className='mt-1 mb-3'>
              <LocationOnIcon className='text-info' />
              <a href="/desc">Calcular prazo de entrega</a>
            </div>
            <div>
              <p><strong>Estoque disponível</strong> (1000) <br />
                <span className={classes.font_span}>Esse produto esta disponivel evio rapido</span>
              </p>
            </div>
            <div>
              <p><strong>Quantidade:
                <div>
                  <button className="btn btn-outline-light text-dark" onClick={handleClick1}>+</button>
                  {counter < 0 ? 0 : counter} unidade
                  <button className="btn btn-outline-light text-dark" onClick={handleClick2}>-</button>
                  ({qunt})
                </div>
              </strong> <br /><br />
                <span className={`text-success ${classes.font_span}`}>Frete gratis comprando 2 unidade</span>
              </p>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary btn-block p-2">Comprar agora</button>
              <button className="btn btn-light btn-block p-2">Adicionar ao carrinho</button>
            </Link>
            <br />
            <div>
              <p><SwapHorizIcon className='text-primary' /> <strong className='text-primary'>Devolução Gratis</strong> <br />
                <span className={classes.font_span}>Você tem 7 dias a partir da data de recebimento.</span>
              </p>
            </div>
            <br />
            <div>
              <p><VerifiedUserIcon className='text-primary' /> <strong className='text-primary'>Compra Garantida</strong> <br />
                <span className={classes.font_span}>eceba o produto que está esperando ou devolvemos o dinheiro.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default Descricao;

