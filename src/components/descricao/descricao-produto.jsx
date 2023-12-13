/* eslint-disable eqeqeq */
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
  const [sizers, setSizers] = useState('')
  
  const [color1, setcolor1] = useState('')
  const [color2, setcolor2] = useState('')
  const [color3, setcolor3] = useState('')
  const [color4, setcolor4] = useState('')
  const [color5, setcolor5] = useState('')
  const [color6, setcolor6] = useState('')
  
  const [marca, setMarca] = useState('')

  console.log(marca)

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
    setcolor1(color01)
    setcolor2(color02)
    setcolor3(color03)
    setcolor4(color04)
    setcolor5(color05)
    setcolor6(color06)
  }, [])

  const Todes = [color1, color2, color3, color3, color4, color5, color6]

  const FilterColor1 = Todes.filter(e => e == "preto" || e == "Preto" || e == "black" || e == "Black")
  const FilterColor2 = Todes.filter(e => e == "Bege" || e == "bege" || e == "Gray" || e == "gray")
  const FilterColor3 = Todes.filter(e => e == "Dins" || e == "dins")
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
          <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[0]}${sizers[1]}`)}>
          {sizers[0] ? sizers[0] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[3]}${sizers[4]}`)}>
          {sizers[4] ? sizers[2] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[3]}${sizers[4]}`)}>
          {sizers[4] ? sizers[4]+sizers[6] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[9]}${sizers[10]}`)}>
          {sizers[9] ? sizers[9]+sizers[10]+sizers[11] : ""}
        </button>
      </div>
      : 
      <div>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[0]}${sizers[1]}`)}>
          {sizers[0] ? sizers[0]+sizers[1] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[3]}${sizers[4]}`)}>
          {sizers[4] ? sizers[4]+sizers[6] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[6]}${sizers[7]}`)}>
          {sizers[6] ? sizers[6]+sizers[7] : ""}
          </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[9]}${sizers[10]}`)}>
          {sizers[9] ? sizers[9]+sizers[10] : ""}
        </button>
        <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setMarca(`${sizers[9]}${sizers[10]}`)}>
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
              <div role="group" aria-label="Basic example">
                {FilterColor1[0] ? <button type="button" style={{background: "#000000", border: "none", color: "white", padding: "15px"}} onClick={() => Test(FilterColor1[0])}></button> : ""}
                {FilterColor2[0] ? <button type="button" style={{background: "#9CBAF2", border: "none", color: "white", padding: "15px"}} onClick={() => Test(FilterColor2[0])}></button> : ""}
                {FilterColor3[0] ? <button type="button" style={{background: "#215088", border: "none", color: "blue", padding: "15px"}} onClick={() => Test(FilterColor3[0])}></button> : ""}
                {FilterColor4[0] ? <button type="button" style={{background: "pink", border: "none", color: "gray", padding: "15px"}} onClick={() => Test(FilterColor4[0])}></button> : ""}
                {FilterColor5[0] ? <button type="button" style={{background: "#white", border: "solid 1px", color: "green", padding: "15px"}} onClick={() => Test(FilterColor5[0])}></button> : ""}
                {FilterColor6[0] ? <button type="button" style={{background: "red", border: "none", color: "red", padding: "15px"}} onClick={() => Test(FilterColor6[0])}></button> : ""}
                {FilterColor7[0] ? <button type="button" style={{background: "#22283B", border: "none", color: "red", padding: "15px"}} onClick={() => Test(FilterColor7[0])}></button> : ""}
                {FilterColor8[0] ? <button type="button" style={{background: "#247dd1", border: "none", color: "red", padding: "15px"}} onClick={() => Test(FilterColor8[0])}></button> : ""}
                {FilterColor9[0] ? <button type="button" style={{backgroundImage: `url("data:image/jpeg;base64,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")`, border: "none", color: "red", padding: "15px"}} onClick={() => Test(FilterColor8[0])}></button> : ""}
                { }
              </div>
              <div>
              <br />
               
               {sizers[2] == "M" | sizers[0] == 4
                ? 
                <div>
                  <h4><strong>MEDIDAS</strong></h4>
                  <Teste/>
                </div>
                :
                <div></div>
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

