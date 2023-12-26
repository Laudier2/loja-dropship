/* eslint-disable eqeqeq */
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage } from './stylend';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../api/api';
import { Header } from "../header"
//import Slids from '../slids/slids';

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

//const product = []

const Products = () => {
  
  //const history = useHistory()

  const [categroy, setCategory] = useState([])

  useEffect(() =>{    
    (async() => {
      const req = await api.get("/category")
      const res = await req.data

      setCategory(res)
    })()
  },[])

  //console.log(Category)
  
  const products = useSelector(productSlace => productSlace.products.items)
  //console.log("teste", products)

  function LocalSto(e) {

    localStorage.removeItem("id")
    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)

    const img = JSON.parse(dados)
    const name = JSON.parse(dados)
    const desc = JSON.parse(dados)
    const price = JSON.parse(dados)
    const color = JSON.parse(dados)
    const quantity = JSON.parse(dados)
    const slug = JSON.parse(dados)
    const size = JSON.parse(dados)
    const bar_code = JSON.parse(dados)

    localStorage.setItem("img0", img.image[0])
    localStorage.setItem("img1", img.image[1])
    localStorage.setItem("img2", img.image[2])
    localStorage.setItem("img3", img.image[3])
    localStorage.setItem("img4", img.image[4])

    localStorage.setItem("color1", color.color[0])
    localStorage.setItem("color2", color.color[1])
    localStorage.setItem("color3", color.color[2])
    localStorage.setItem("color4", color.color[3])
    localStorage.setItem("color5", color.color[4])
    localStorage.setItem("color6", color.color[5])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    //console.log(dados)*/
  }

  console.log()

  return (
    <>
    {/*<Slids />*/}
  <Header />
  {products == "" ? <Example /> :
    <ProductProd>
      <section>
      { products.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res)}>
            <div key={res.id}>
              <img src={res.image[0]} alt="img" />
              <h5>{res.name}</h5>
              <h3>R${res.price},00</h3>
              <span>
                <FaCreditCard className='mt-1 m-1'/> Em até 12x sem juros
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          ))
        }
      </section>  
    </ProductProd>
      }
      
  </>
  );
}

export default Products;
