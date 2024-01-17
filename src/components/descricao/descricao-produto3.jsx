/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import {  ConatinerMain } from './styles2';
import { Link } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";


const Descricao = () => {

  const useId = localStorage.getItem("id")

  const product = useSelector(productsSlice => productsSlice.products.items)


  const productFilter = product.filter(product => (product.id === useId))

  const img = productFilter.map(i => i.image)

  console.log(img)


  function over0() {
    document.getElementById("logo").src = `${img[0]}`;
  }
  function over1() {
    document.getElementById("logo").src = `${img[1]}`;
  }
  function over2() {
    document.getElementById("logo").src = `${img[2]}`;
  }

  function over3() {
    document.getElementById("logo").src = `${img[3]}`;
  }

  function over4() {
    document.getElementById("logo").src = `${img[4]}`;
  }

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }
  
  return (
    <ConatinerMain>
      {img === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> :
        <div >
          <div className="div2">
          <img src={img ? img[1] : ""} alt="img" className='formatImg' id="logo" />
            <div className="div3">
              <div className='div1' >
              {img[1] ? "" : <img src={img[1]} alt="img4" onMouseOver={() => over3(over0)} />}
              </div>
              <div className='div1' >
              {!img[2] ? "" : <img src={img[2]} alt="img4" onMouseOver={() => over3(over1)} />}
              </div>
              <div className='div1' >
                {!img[3] ? "" : <img src={img[3]} alt="img2" onMouseOver={() => over2(over2)} />}
              </div>
              <div className='div1' >
              {!img[4] ? "" : <img src={img[4]} alt="img4" onMouseOver={() => over3(over3)} />}
              </div>
              <div className='div1' >
                {!img[5] ? "" : <img src={img[5]} alt="img4" onMouseOver={() => over3(over4)} />}
              </div>
            </div>
          </div>
          <div className="divdesc">
              <h5 ><strong>{""}</strong></h5>
              <div>
                <span className='mr-2'>4.8</span>
                <GoStarFill className='text-warning mb-1'/>
                <GoStarFill className='text-warning mb-1'/>
                <GoStarFill className='text-warning mb-1'/>
                <GoStarFill className='text-warning mb-1'/>
                <TiStarHalfOutline className='text-warning mb-1 h4'/>
                <span className='ml-2'>(6505)</span>
                <p></p>
                <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
              </div>
              <br />
              <h1>R$ {""},00</h1>
              <span>
            <FaCreditCard className='mt-1 m-1'/> Em até 12x sem juros
          </span>
              <br />
              <a href="/desc"><span>ver os meio de pagamento</span></a>
              <br />
              <h5>Cores</h5>
              
              <div>
              <br />
       
        
              </div>
              <div>
                <br />
                <h4><strong>DESCRIÇÃO</strong></h4>
              
                <p>
                {""}
                </p>
              </div>
            </div>
          <div className="divdescSecudare">
          <strong>Envio para todo o país</strong>
          <br />
          <span>Saiba os prazos de entrega e as formas de envio.</span>
          <div >
            <LocationOnIcon />
            <a href="/desc">Frete gratis para todo o pais</a>
          </div>
          <br /><br />
          <div>
            <p>
              <strong>Quantidade</strong> 
              <div>
                disponivel ({""})
              </div>
              <br /><br />
              <strong>Finalize sua compra aqui!</strong>
            </p>
          </div>
          <Link to="/cartFinali">
            <button onClick={() => handlerCartAdd(productFilter[0])}>Comprar agora</button>
            </Link>
            <button onClick={() => handlerCartAdd(productFilter[0])}>Adicionar ao carrinho</button>

            <br />
            <div>
              <br /><br />
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
          </div>          
        </div>
      }
    </ConatinerMain>
  );
}

export default Descricao;

