import React, { useEffect, useState } from 'react'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { ErrorBoundary } from "react-error-boundary"
import { Route, Switch } from 'react-router-dom';
import Products from './components/chec/Products';
import Desc2 from './components/descricao/descricao-produto'
import { Context } from './Context/Provaider';
import Card from './components/cart/CartMercadopago';
import api from './api/api';
import Cart from './components/cart';
import Header from './components/header';
import CartFinalize from './components/cart/cartFinalize';



function App() {

  const [prod, setProd] = useState([])

  useEffect(() => {
    async function Product() {
      const req = await api.get('/product')

      setProd(req.data)
    }
    Product()
  }, [])

  //console.log(orderData)

  const id = localStorage.getItem('id')

  const prodFilter = prod.filter((req) => (req.id === id))

  //console.log(prodFilter)

  //console.log(prodFilter)
  const q = localStorage.getItem('quantity')
  //const p = localStorage.getItem('price')
  //const a = localStorage.getItem('amount')
  //const d = localStorage.getItem('description')
  //const n = localStorage.getItem('name_card_product')
//
  const result = { quantity: 1, price: '10', description: "Lindo livro", amount: 1, name: "Livro" }

  const [data, setData] = useState([])
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [orderData, setOrderData] = useState(result);
  const [orderData2, setOrderData2] = useState({prodFilter});

  function ErroHandler() {
    return <h4>Houve um erro</h4>
    }

  return (
    <Context.Provider value={{data, setData, preferenceId, isLoading, orderData, prodFilter, setOrderData, setIsLoading, setPreferenceId, orderData2, setOrderData2}}>
      <Header />
      <ToastContainer />
      <div className="page-container">
        <div className="conatiner-wrap"> 
          <ErrorBoundary FallbackComponent={ErroHandler} onError={
            (arg1, arg2) => {
              console.log("arg1", arg1, "arg2", arg2)
            }
          }></ErrorBoundary>
          <Switch>
              
            <Route exact path="/cart" component={Cart} />   
            <Route exact path="/cartFinali" component={CartFinalize} />   
            <Route exact path='/' component={Products}/>
            <Route exact path='/desc' component={Desc2} />  
            <Route exact path="/card" component={Card} />   
          </Switch>
          
          <ErrorBoundary/>
        </div> 
      </div>
    </Context.Provider>
  );
}

export default App;
