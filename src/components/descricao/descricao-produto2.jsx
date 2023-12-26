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
  const [sizers, setSizers] = useState('')
  
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [color3, setColor3] = useState('')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('')
  const [color6, setColor6] = useState('')

  console.log(sizers[0]+sizers[1])

  function Marca(e){
    localStorage.setItem("Tamanho", e)
  }

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
    const color01 = localStorage.getItem("color0")
    const color02 = localStorage.getItem("color1")
    const color03 = localStorage.getItem("color2")
    const color04 = localStorage.getItem("color3")
    const color05 = localStorage.getItem("color4")
    const color06 = localStorage.getItem("color5")

    setColor1(color01)
    setColor2(color02)
    setColor3(color03)
    setColor4(color04)
    setColor5(color05)
    setColor6(color06)

  }, [])

  const Todes = [color1, color2, color3, color3, color4, color5, color6]

  const FilterColor1 = Todes.filter(e => e == "preto" || e == "Preto" || e == "black" || e == "Black")
  const FilterColor2 = Todes.filter(e => e == "Bege" || e == "bege" || e == "Gray" || e == "gray")
  const FilterColor3 = Todes.filter(e => e == "Dins" || e == "dins" || e == "dins claro" || e == "dins escuro")
  const FilterColor4 = Todes.filter(e => e == "Roxo" || e == "roxo" || e == "pink" || e == "Pink")
  const FilterColor5 = Todes.filter(e => e == "Branco" || e == "branco" || e == "white" || e == "White")
  const FilterColor6 = Todes.filter(e => e == "Vermelho" || e == "vermelho" || e == "red" || e == "Red")
  const FilterColor7 = Todes.filter(e => e == "Azul escuro" || e == "azul escuro" || e == "Azul claro" || e == "azul claro")
  const FilterColor8 = Todes.filter(e => e == "Azul" || e == "azul" || e == "blue" || e == "Blue")
  const FilterColor9 = Todes.filter(e => e == "Camuflado" || e == "Rjado" || e == "rajado" || e == "camuflado")

  console.log(FilterColor2[0])

  useEffect(() => {
    const size = localStorage.getItem("size")
    setSizers(size)
  }, [])

  useEffect(() => {
    const req3 = localStorage.getItem("description")
    setReceb4(req3)
  }, [])

  function Test(e){
    document.getElementById("logo").src = `${img2}`;
  }

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

  function Teste(){
    return (
      <div>
        {sizers[2] == "M" 
        ?
        <div>
          <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[0])}>
          {sizers[0] ? sizers[0] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[2])}>
          {sizers[4] ? sizers[2] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[4])}>
          {sizers[4] ? sizers[4] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[4]+sizers[6])}>
          {sizers[4] ? sizers[4]+sizers[6] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[9]+sizers[10]+sizers[11])}>
          {sizers[9] ? sizers[9]+sizers[10]+sizers[11] : ""}
        </button>
      </div>
      : 
      <div>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[0]}${sizers[1]}`)}>
          {sizers[0] ? sizers[0]+sizers[1] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[3]}${sizers[4]}`)}>
          {sizers[4] ? sizers[4]+sizers[6] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[6]}${sizers[7]}`)}>
          {sizers[6] ? sizers[6]+sizers[7] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[9]}${sizers[10]}`)}>
          {sizers[9] ? sizers[9]+sizers[10] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[9]}${sizers[10]}`)}>
          {sizers[13] ? sizers[9]+sizers[13] : ""}
        </button>
        </div>
        }      
      </div>
    )
  }
  
  return (
    <ConatinerMain>
      {productFilter === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> :
        <div >
          <div className="div2">
            <img src={img1} alt="img" className='formatImg' id="logo" />
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
              <h5>Cores</h5>
              
              <div>
              <br />
               
              {sizers[2] == "M" 
              ?
                <div>
                  <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[0])}>
                  {sizers[0] ? sizers[0] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[2])}>
                  {sizers[4] ? sizers[2] : ""}
                  </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[4])}>
                  {sizers[4] ? sizers[4] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[4]+sizers[6])}>
                  {sizers[4] ? sizers[4]+sizers[6] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(sizers[9]+sizers[10]+sizers[11])}>
                  {sizers[9] ? sizers[9]+sizers[10]+sizers[11] : ""}
                </button>
              </div>
              : 
              <div>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[0]}${sizers[1]}`)}>
                  {sizers[0] ? sizers[0]+sizers[1] : ""}
                  </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[3]}${sizers[4]}`)}>
                  {sizers[4] ? sizers[4]+sizers[6] : ""}
                  </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[6]}${sizers[7]}`)}>
                  {sizers[6] ? sizers[6]+sizers[7] : ""}
                  </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[9]}${sizers[10]}`)}>
                  {sizers[9] ? sizers[9]+sizers[10] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => Marca(`${sizers[9]}${sizers[10]}`)}>
                  {sizers[13] ? sizers[9]+sizers[13] : ""}
                </button>
                </div>
        } 
        
              </div>
              <div>
                <br />
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
        </div>
      }
    </ConatinerMain>
  );
}

export default Descricao;

