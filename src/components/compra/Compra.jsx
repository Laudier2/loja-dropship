/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { ButtonBox, InputBox, CompraStyle, Title } from './stylend';
import { FormBox, LoadingPage } from "./FormBox";
import api from '../../api/api';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import emailjs from "@emailjs/browser"
import { Link } from 'react-router-dom';

console.clear()

function Compra() {

  const cart = useSelector(state => state.cart.cartItems)
  const cartTotal = useSelector(state => state.cart)

  const productAmount = [cartTotal.cartTotalAmount]
  //const productQuantity = [cartTotal.cartTotalQuantyti]


  const GeraCode = Math.random()
  const ConvertCode = JSON.stringify(GeraCode)
  
  const [ name, setName ] = useState("")
  const [ email, setEmail] = useState("")
  const [ phone, setPhone] = useState("")
  const [ state, setState ] = useState("")
  const [ city, setCity] = useState("")
  const [ cep, setCep ] = useState("")
  const [ street, setStreet ] = useState("")
  const [ number, setNumber ] = useState("")
  const [ district, setDistrict ] = useState("")
  const [ house, setHouse ] = useState("")
  const [ code_compra ] = useState(ConvertCode)
  //const [ productslist] = useState(res)
  
  //window.location.reload();

  //console.log(productslist)

  const Example = () => (
    /*
    blank
    balls
    bars
    bubbles
    cubes
    cylon
    spin
    spinningBubbles
    spokes 
    */
  <LoadingPage>
    <ReactLoading type='spokes' color='aqua' height={'100%'} width={'100%'}  />
  </LoadingPage>
);

  const data = {
    name,
    email,
    phone,
    state,
    city,
    cep,
    street,
    number,
    district,
    /*productslist,*/
    apartment_or_house: house,
    code_compra
  }

  const name2 = cart[0].name ? cart[0].name : ""
  const price2 = cart[0].name ? productAmount[0] : ""
  const image2 = cart[0].name ? cart[0].image[0] : ""
  //const description2 = cart[0].name ? cart[0].description : ""

    
  let prod = [
    {
        title: name2,
        price: price2,
        image: image2,
        category: "Roupas",
        description: "",
    }
  ]


let prod2 = [
  {
      title: "Fone",
      price: 25,
      image: "https://m.media-amazon.com/images/I/41qM+itS5SL._AC_SY300_SX300_.jpg",
      category: "placas",
      description: "Isso é um teste",
  },
]
  
  console.log("teste: ", prod, prod2)

  const handleSubmit = async (e) => {
    e.preventDefault()

    /*api.post("/compra", data)
      .then(() => {
          console.log('A compra foi Criado com sucesso');
          
          (async () => {
            await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point))  
          })()
      })
      .catch((err) => {
        console.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente', err);
      });*/


      if(cart[0] && cart[1] === undefined && cart[2] === undefined){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(productAmount)

        const templeteParams = {
          from_name: name ? name : "",
          adress: `${res4}` ? `${res4}` : "",
          email: email ? email : "",
          phone: phone ? phone : "",
          image1: `${res1}` ? `${res1}` : "",
          nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
          quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
          price1: `${cart[0].price}` ? `${cart[0].price * cart[0].cartQuantity}` : "",
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
            console.log(prod, prod2)
          })  
        }
        PagamentoMercadoPago()
      }

      if(cart[0] && cart[1] && cart[2] === undefined){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(productAmount)

        const templeteParams = {
          from_name: name ? name : "",
          adress: `${res4}` ? `${res4}` : "",
          email: email ? email : "",
          phone: phone ? phone : "",
          image1: `${res1}` ? `${res1}` : "",
          nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
          quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
          price1: `${cart[0].price}` ? `${cart[0].price * cart[0].cartQuantity}` : "",
          image2: `${res2}` ? `${res2}` : "",
          nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
          quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()
      }
      
      if(cart[0] && cart[1] && cart[2]){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res3 =  JSON.stringify(cart[2].image[0]) 
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(productAmount)

        const templeteParams = {
          from_name: name ? name : "",
          adress: `${res4}` ? `${res4}` : "",
          email: email ? email : "",
          phone: phone ? phone : "",
          image1: `${res1}` ? `${res1}` : "",
          nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
          quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
          price1: `${cart[0].price}` ? `${cart[0].price * cart[0].cartQuantity}` : "",
          image2: `${res2}` ? `${res2}` : "",
          nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
          quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
          image3: `${res3}` ? ` ${res3}` : "",
          nameproduct3: `${cart[2].name ? cart[2].name : ""}`,
          quanty3: `${cart[2].cartQuantity ? cart[2].cartQuantity : ""}`,
          price3: `${cart[2].price ? cart[2].price * cart[2].cartQuantity : ""}`,
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()
      }

      if(cart[0] && cart[1] && cart[2] && cart[3]){

        let adress = `Estado: ${data.state}, Cidade: ${data.city}, Cep: ${data.cep}, Barrio: ${data.district}, Rua: ${data.street}, Numero: ${data.number}, AP/Casa: ${data.apartment_or_house}`
    
        let res1 = JSON.stringify(cart[0].image[0])
        let res2 = JSON.stringify(cart[1].image[0])
        let res3 =  JSON.stringify(cart[2].image[0]) 
        let res6 =  JSON.stringify(cart[3].image[0]) 
        let res4 = JSON.stringify(adress)
        let res5 = JSON.stringify(productAmount)

        const templeteParams = {
          from_name: name ? name : "",
          adress: `${res4}` ? `${res4}` : "",
          email: email ? email : "",
          phone: phone ? phone : "",
          image1: `${res1}` ? `${res1}` : "",
          nameproduct1: `${cart[0].name}` ? `${cart[0].name}` : "",
          quanty1: `${cart[0].cartQuantity}` ? `${cart[0].cartQuantity}` : "",
          price1: `${cart[0].price}` ? `${cart[0].price * cart[0].cartQuantity}` : "",
          image2: `${res2}` ? `${res2}` : "",
          nameproduct2: `${cart[1].name}` ? `${cart[1].name}` : "",
          quanty2: `${cart[1].cartQuantity}` ? `${cart[1].cartQuantity}` : "",
          price2: `${cart[1].price}` ? `${cart[1].price * cart[1].cartQuantity}` : "",
          image3: `${res3}` ? ` ${res3}` : "",
          nameproduct3: `${cart[2].name ? cart[2].name : ""}`,
          quanty3: `${cart[2].cartQuantity ? cart[2].cartQuantity : ""}`,
          price3: `${cart[2].price ? cart[2].price * cart[2].cartQuantity : ""}`,
          image4: `${res6}` ? ` ${res6}` : "",
          nameproduct4: `${cart[6].name ? cart[6].name : ""}`,
          quanty4: `${cart[6].cartQuantity ? cart[3].cartQuantity : ""}`,
          price4: `${cart[6].price ? cart[6].price * cart[6].cartQuantity : ""}`,
          total: `${res5}`
        }
    
        emailjs.send("service_lflbrlm", "template_6bgdvos", templeteParams, "uh-vq_J-Q9IBlCdVH")
        .then((res) => {
          console.log("EMAIL ENVIADO", res.status, res.text)
        }, (err) => {
          console.log("ERRO: ", err)
        })

        const PagamentoMercadoPago = async () => {
          await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point), (err) => {
            alert(err)
          })  
        }
        PagamentoMercadoPago()
      }

  }


  return (
    <>
      {cart == "" ? <Example /> :
        <CompraStyle>
       <FormBox>
          <form onSubmit={handleSubmit}>
          <Link to="/" style={
              {
                  textDecoration: "none", 
                  fontSize: "30px", 
                  fontWeight: "bold",
                  background: "aqua",
                  padding: "5px",
                  borderRadius: "10px",
                  marginTop: "5px",
                  margin: "5px"
              }
          }>Voltar para StylesTop</Link> 
            <Title>
              Preencha com seus dados
            </Title>
            
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={(e) => setName(e.target.value)} 
                value={name.name}  
                required
              />
              <label htmlFor="">Nome completo</label>
            </InputBox>
            <InputBox>
              <input
                name="email" 
                type="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email.email} 
                required 
              />
              <label htmlFor="">E-mail</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="phone" 
                id="phone" 
                onChange={(e) => setPhone(e.target.value)} 
                value={phone.phone}  
                required
              />
              <label htmlFor="">Telefone</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="state" 
                id="state" 
                onChange={(e) => setState(e.target.value)} 
                value={state.state}  
                required
              />
              <label htmlFor="">Estado</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="city" 
                id="city" 
                onChange={(e) => setCity(e.target.value)} 
                value={city.city}  
                required
              />
              <label htmlFor="">Cidade</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="cep" 
                id="cep" 
                onChange={(e) => setCep(e.target.value)} 
                value={cep.cep}  
                required
              />
              <label htmlFor="">Cep</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="district" 
                id="district" 
                onChange={(e) => setDistrict(e.target.value)} 
                value={district.district}  
                required
              />
              <label htmlFor="">Bairro</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="street" 
                id="street" 
                onChange={(e) => setStreet(e.target.value)} 
                value={street.street}  
                required
              />
              <label htmlFor="">Rua</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="number" 
                id="number" 
                onChange={(e) => setNumber(e.target.value)} 
                value={number.number}  
                required
              />
              <label htmlFor="">Numero</label>
            </InputBox>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="text" 
                name="house" 
                id="house" 
                onChange={(e) => setHouse(e.target.value)} 
                value={house.house}  
                required
              />
              <label htmlFor="">Complemento AP/CASA</label>
            </InputBox>       
            <ButtonBox type="submit">
              Finaliza Compra
            </ButtonBox>
          </form>  
          
      </FormBox>
    </CompraStyle>}
    </>
  );
}

export default Compra;
