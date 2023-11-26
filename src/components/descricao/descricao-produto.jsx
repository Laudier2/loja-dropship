import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import {  ConatinerMain } from './styles';
import { Link } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";


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
  const [colors, setColors] = useState('')
  const [sizers, setSizers] = useState('')

  useEffect(() => {
    window.scroll({
      top: 100,
    });
  },[])

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
    const color = localStorage.getItem("color0")
    setColors(color)
  }, [])

  useEffect(() => {
    const size = localStorage.getItem("size")
    setSizers(size)
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

  console.log(productFilter)

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }
  
  return (
    <ConatinerMain>
      {productFilter === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> :
        <div >
          <div className="div2">
            <img src={img1} alt="img" id="logo" />
            <div className="div3">
            <div className='div1' >
              {!img1 ? "" : <img src={img1} alt="img0" onMouseOver={() => over0(over0)} />}
            </div>
            <div className='div1' >
              {!img2 ? "" : <img src={img2} alt="img1" onMouseOver={() => over1(over1)} />}
            </div>
            <div className='div1' >
              {!img3 ? "" : <img src={img3} alt="img2" onMouseOver={() => over2(over2)} />}
            </div>
            <div className='div1' >
              {!img4 ? "" : <img src={img4} alt="img3" onMouseOver={() => over3(over3)} />}
            </div>
            <div className='div1' >
              {!img5 ? "" : <img src={img5} alt="img4" onMouseOver={() => over3(over4)} />}
            </div>
          </div>
          </div>
          <div className="divdesc">
              <h5 ><strong>{receb_data_name}</strong></h5>
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
              <h1>R$ {price},00</h1>
              <span>
            <FaCreditCard className='mt-1 m-1'/> Em até 12x sem juros
          </span>
              <br />
              <a href="/desc"><span>ver os meio de pagamento</span></a>
              <br />
              <h5>Cor</h5>
             
              <div role="group" aria-label="Basic example">
                <button type="button">{colors}</button>
                { }
              </div>
              <div>
              <br />
                <h4><strong>MEDIDAS</strong></h4>
                
                <p>{sizers}</p>
              </div>
              <div>
                <h4><strong>DESCRIÇÃO</strong></h4>
              
                <p>
                {desc}
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
                disponivel ({qunt})
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
          {/*<div className="div3">
            <div className='div1' >
              {!img1 ? "" : <img src={img1} alt="img0" onMouseOver={() => over0(over0)} />}
            </div>
            <div className='div1' >
              {!img2 ? "" : <img src={img2} alt="img1" onMouseOver={() => over1(over1)} />}
            </div>
            <div className='div1' >
              {!img3 ? "" : <img src={img3} alt="img2" onMouseOver={() => over2(over2)} />}
            </div>
            <div className='div1' >
              {!img4 ? "" : <img src={img4} alt="img3" onMouseOver={() => over3(over3)} />}
            </div>
            <div className='div1' >
              {!img5 ? "" : <img src={img5} alt="img4" onMouseOver={() => over3(over4)} />}
            </div>
          </div>*/}
          
        </div>
      }
    </ConatinerMain>
  );
}

export default Descricao;

