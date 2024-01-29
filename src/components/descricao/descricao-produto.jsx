/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCor, addTm } from '../../redux/cart/cart';
import {  ConatinerMain, ContainerDesc, ContainerSobre} from './styles';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { Header } from '../header';
import './style.css'
import { SlidsDescriptionOfertas } from './SlidsDescriptionOfertas';
import Footer from '../footer/footer';


const Descricao = () => {
  //window.location.reload()

  const navigate = useNavigate()
  
  const [dataCores, setDatacores] = useState('')
  const [dataTamanho, setTamanho] = useState('')

  console.log(dataCores)

  //imagem de meio de pagamentos bandeiras
  const imgCart = [
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png"},
	]

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
  
  //State de setTamanho
  //const [tamanho, setTamanho] = useState([])

  //console.log(cart)


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
  const FilterColor2 = Todes.filter(e => e == "Bege" || e == "bege" || e == "beje" || e == "Beje" || e == "Gray" || e == "gray" || e == "Cinza" || e == "cinza")
  const FilterColor3 = Todes.filter(e => e == "Dins" || e == "dins" || e == "dins claro" || e == "dins escuro" || e == "Dins ecuro")
  const FilterColor4 = Todes.filter(e => e == "Roxo" || e == "Rosa" || e == "pink" || e == "Pink")
  const FilterColor5 = Todes.filter(e => e == "Branco" || e == "branco" || e == "white" || e == "White")
  const FilterColor6 = Todes.filter(e => e == "Vermelho" || e == "vermelho" || e == "red" || e == "Red" || e == "Vermelho com Preto")
  const FilterColor7 = Todes.filter(e => e == "Jeans escuro" || e == "jeans escuro" || e == "Jeans claro" || e == "Jeans Claro" || e == "jeans claro" || e == "Jens escuro" || e == "Jeans Escuro" || e == "Jeans escuro"  || e == "Dins")
  const FilterColor8 = Todes.filter(e => e == "Jeans" || e == "jeans")
  const FilterColor9 = Todes.filter(e => e == "Camuflado" || e == "Rajado" || e == "rajado" || e == "camuflado")
  const FilterColor10 = Todes.filter(e => e == "Amarela com Preto" || e == "Amarela com Branco" || e == "Preto com Branco" || e == "Preto com Verde")
  const FilterColor11 = Todes.filter(e => e == "Amarela")
  const FilterColor12 = Todes.filter(e => e == "Verde")
  const FilterColor13 = Todes.filter(e => e == "Preto com Rosa")
  const FilterColor14 = Todes.filter(e => e == "Kaki" || e == "kaki")
  const FilterColor15 = Todes.filter(e => e == "Azul com rosa")
  const FilterColor16 = Todes.filter(e => e == "multi" ||  e == "Multi" ||  e == "MULTI")
  const FilterColor17 = Todes.filter(e => e == "Vinho" ||  e == "vinho")

console.log(FilterColor2[0], FilterColor1[0])

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
  const cart = useSelector(cartItems => cartItems.cart.cartItems.length)
  //const cart2 = useSelector(cartItems => [cartItems.cart.cartItems[0]])
  //const itemsTm = useSelector(cartItems => cartItems.cart.tmMedidas)
  //const itemsCor = useSelector(cartItems => cartItems.cart.tmCores)

  const localId = localStorage.getItem("id")
  const BNT = localStorage.getItem("name")

  console.log(BNT)


  const productFilter = product.filter(product => (product.id === localId))
  

  const dispatch = useDispatch()

  function handlerCartAdd(e) {

    const id = localStorage.getItem("id")

    const dataCor = {id: id, cor: dataCores}
    const dataTm = {id: id, tm: dataTamanho}
      
    dispatch(addTm(dataTm))
    dispatch(addCor(dataCor))
  
      if(cart <= 4){
  
        if(dataTamanho == ""){
          alert("Você tem que escolher um tamanho antes!")
        }else{
          if(dataCores == ""){
            alert("Você tem que escolher uma cor antes!")
          }else{
            dispatch(addCart(e))
            navigate("/cartFinali")
          }
        }        
      
    }else{
      alert("Você so pode adiciona 5 itens no carrio por vez")
      }   
  }

  function handlerCartAdd2(e) {

    let id = localStorage.getItem("id")
    let nameProduct = localStorage.getItem("name")
   
   const dataCor = {id: id, cor: dataCores}
   const dataTm = {id: id, tm: dataTamanho}


   console.log(dataCor, dataTm)
    
    dispatch(addTm(dataTm))
    dispatch(addCor(dataCor))

    if(cart <= 4){

      if(dataTamanho == ""){
        alert("Você tem que escolher um tamanho e uma cor!")
      }else{
        if(dataCores == ""){
          alert("Você so escolheu um tamnho tem que escolher uma cor tambem!")
        }else{
          dispatch(addCart(e))
          toast.success(`O produto ${nameProduct} foi adicionado ao carrinho!`, 
           {position: toast.POSITION.TOP_CENTER})
    
          //toast.success(`O produto ${nameProduct}`)
        }
      }        
      
    }else{
      alert("Você so pode adiciona 5 itens no carrio por vez")
    }   
  }

  let percentual = 0.25;
  let aumento = price * percentual;
  let novo_price = price - aumento;

  return (
    <>
      <Header/>
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
                  {!img5 ? "" : <img src={img5} alt="img4" onMouseOver={() => over4(over4)} />}
                </div>
              </div>
            </div>
            <ContainerDesc>
            
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
                
                <h1>R$ {novo_price},00</h1>
                <span>
              <FaCreditCard className='mt-1 m-1'/> Em até 12x sem juros
              <br />
              {imgCart.map(imgCard => (
                <img src={imgCard.img} alt="img" style={{width: "8%", display: "inline-block"}}/>
              ))}
            </span>
                <br />
                <br />
                <br /><br />
                <p>
                  <strong className=''>Cor: </strong>
                  <span>{dataCores ? dataCores : "Escolha uma cor"}</span>
                </p>
                <div>
                <div role="group" aria-label="Basic example" className='efctButton'>
                  {FilterColor1[0] ? <button type="button" style={{background: "#000000", border: "none", color: "white", padding: "15px"}} onClick={() => setDatacores(FilterColor1[0])}></button> : ""}
                  {FilterColor2[0] ? <button type="button" style={{background: "#919390", border: "none", color: "white", padding: "15px"}} onClick={() => setDatacores(FilterColor2[0])}></button> : ""}
                  {FilterColor3[0] ? <button type="button" style={{background: "#606366", border: "none", color: "blue", padding: "15px"}} onClick={() => setDatacores(FilterColor3[0])}></button> : ""}
                  {FilterColor4[0] ? <button type="button" style={{background: "pink", border: "none", color: "gray", padding: "15px"}} onClick={() => setDatacores(FilterColor4[0])}></button> : ""}
                  {FilterColor5[0] ? <button type="button" style={{background: "#white", border: "solid 1px", color: "green", padding: "15px"}} onClick={() => setDatacores(FilterColor5[0])}></button> : ""}
                  {FilterColor6[0] ? <button type="button" style={{background: "red", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor6[0])}></button> : ""}
                  {FilterColor7[0] ? <button type="button" style={{background: "#607E92", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor7[0])}></button> : ""}
                  {FilterColor8[0] ? <button type="button" style={{background: "#193363", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor8[0])}></button> : ""}
                  {FilterColor9[0] ? <button type="button" style={{backgroundImage: `url("https://www.shutterstock.com/image-vector/camouflage-seamless-pattern-trendy-style-600nw-1456834667.jpg")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor9[0])}></button> : ""}
                  {FilterColor10[0] ? <button type="button" style={{background: "#fad60c", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor10[0])}></button> : ""}
                  {FilterColor11[0] ? <button type="button" style={{background: "#b5d818", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor11[0])}></button> : ""}
                  {FilterColor12[0] ? <button type="button" style={{background: "#31b63c", borderColor: "green", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor12[0])}></button> : ""}
                  {FilterColor13[0] ? <button type="button" style={{backgroundImage: `url("https://i.pinimg.com/736x/db/48/79/db4879aa3ebd36d996fe2fba6a3ccbef.jpg")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor13[0])}></button> : ""}
                  {FilterColor14[0] ? <button type="button" style={{background: "#8c5b32", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor14[0])}></button> : ""}
                  {FilterColor15[0] ? <button type="button" style={{background: "orange", border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor15[0])}></button> : ""}
                  {FilterColor16[0] ? <button type="button" style={{backgroundImage: `url("https://ae01.alicdn.com/kf/S451958a0dc9b415aa02e94e439d709f9R/Conjunto-de-Shorts-e-Top-sem-mangas-estampa-tropical-das-mulheres-decote-em-V-ver-o.jpg_640x640.jpg_.webp")`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor16[0])}></button> : ""}
                  {FilterColor17[0] ? <button type="button" style={{background: `#712D52`, border: "none", color: "red", padding: "15px"}} onClick={() => setDatacores(FilterColor17[0])}></button> : ""}
                  { }
                </div>
                <br />
                </div>
                {sizers[2] == "M" 
                ?
                <div>
                  <p>
                    <strong>Tamnho: </strong>
                    <span>{dataTamanho ? dataTamanho : "Escolha uma tamanho"}</span>
                  </p>
                  <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers[0])}>
                  {sizers[0] ? sizers[0] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers[2])}>
                  {sizers[4] ? sizers[2] : ""}
                  </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers[4])}>
                  {sizers[4] ? sizers[4] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers[4]+sizers[6])}>
                  {sizers[4] ? sizers[4]+sizers[6] : ""}
                </button>
                <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers[9]+sizers[10]+sizers[11])}>
                  {sizers[9] ? sizers[9]+sizers[10]+sizers[11] : ""}
                </button>
              </div>
              : ""
              }
              {sizers[0] == 3 || sizers[0] == 4?  
              <div>
              <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(`${sizers[0]}${sizers[1]}`)}>
                {sizers[0] & sizers[0] == 3 || 4 || 5 ? sizers[0]+sizers[1] : ""}
              </button>
              <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(`${sizers[3]}${sizers[4]}`)}>
                {sizers[4] & sizers[4] == 3 || 4 || 5 ? sizers[3]+sizers[4] : ""}
              </button>
              <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(`${sizers[6]}${sizers[7]}`)}>
                {sizers[6] & sizers[6] == 3 || 4 || 5 ? sizers[6]+sizers[7] : ""}
              </button>
              <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(`${sizers[9]}${sizers[10]}`)}>
                {sizers[9] & sizers[9] == 3 || 4 || 5 ? sizers[9]+sizers[10] : ""}
              </button>
              <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(`${sizers[9]}${sizers[12]}`)}>
                {sizers[13] & sizers[13] == 4 || 5 || 6 ? sizers[9]+sizers[12] : ""}
              </button>
              </div> : ""
              }
              {
              sizers == "Padrão" ?
                <div>
                  <p>
                    <strong>Tamnho: </strong>
                    <span>{dataTamanho ? dataTamanho : "Escolha uma tamanho"}</span>
                  </p>
                  <button style={{border: "solid 1px", display: "-ms-flexbox", padding: "0px 8px", marginLeft: "1px"}} onClick={() => setTamanho(sizers)}>
                  {sizers}
                </button>
                </div>
              : ""
              }

                <div>
                </div>
                
              </div>
            <div className="divdescSecudare">
            <strong>Envio para todo o país</strong>
            <br />
            <span>Saiba os prazos de entrega e as formas de envio.</span>
            <div >
              <LocationOnIcon /> Frete Gratis
            </div>
            <br /><br />
            <div>
              <p>
                <strong>Disponivel em Estoque</strong> 
                <div>
                  disponivel ({qunt})
                </div>
                <br /><br />
                <strong>Finalize sua compra aqui!</strong>
              </p>
            </div>
            
              <button onClick={() => handlerCartAdd(productFilter[0])}>Comprar agora</button>
              
              <button onClick={() => handlerCartAdd2(productFilter[0])}>Adicionar ao carrinho</button>

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
            </ContainerDesc> 
            <ContainerSobre>
              <h4><strong>DESCRIÇÃO</strong></h4>
              <p>
              {desc}
              </p>
            </ContainerSobre>
          </div>
        }
      </ConatinerMain>
        <SlidsDescriptionOfertas/>
        <Footer/>
      {/*<ProductOfertas>
        <section>
        {product.map(e => (
          <div key={e.id}>
            <img src={e.image} alt={e.title} />
            <div>
              <h3>{e.name}</h3>
              <p>R${e.price},00</p>
              <button >Ver mais detalhes</button>
            </div>
          </div>
        ))}
        </section>
      </ProductOfertas>*/}
    </>
  );
}

export default Descricao;

