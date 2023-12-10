/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { ButtonBox, InputBox, CompraStyle, Title } from './stylend';
import { FormBox, LoadingPage } from "./FormBox";
import api from '../../api/api';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

console.clear()

function Compra() {

  const cart = useSelector(state => state.cart.cartItems)
  const cartTotal = useSelector(state => state.cart)

  const id0 = [cartTotal.cartItems]
  const productAmount = [cartTotal.cartTotalAmount]
  const productQuantity = [cartTotal.cartTotalQuantyti]

 let resid0 = id0[0].map(e => (`{id: ${e.id}}`))

 const prosuctsCart = [
  `${resid0}`,
  `{quantity: ${productQuantity}}`,
  `{amount: ${productAmount}}`,
 ]

  console.log("")
  console.log("")

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
  const [ productslist] = useState(prosuctsCart)
  
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
    productslist,
    apartment_or_house: house,
    code_compra
  }

  const res = cart.map(r => r.cartQuantity)
    
    let prod = [
        {
            title: res > 0 ? cart[0].name : "",
            price: cartTotal.cartTotalAmount,
            image: res > 0 ? cart[0].image[0] : "",
            category: "placas",
            description: res > 0 ? cart[0].description : "",
        },
    ]


  const handleSubmit = async (e) => {
    e.preventDefault()

    api.post("/compra", data)
      .then(() => {
          console.log('A compra foi Criado com sucesso');
          
          (async () => {
            await api.post("payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point))  
          })()
      })
      .catch((err) => {
        console.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente', err);
      });

      setTimeout(() => {
        (async() => {
          const req = await api.get("/compra")

          const filtra = req.data.filter(code => code.code_compra === code_compra)

          console.log(filtra)
          
        })()
      }, 10000)

  }


  return (//
    <>
      {cart == "" ? <Example /> :
        <CompraStyle>
       <FormBox>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="">Complemento</label>
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
