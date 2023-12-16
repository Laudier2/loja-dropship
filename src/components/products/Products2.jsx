/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage } from './stylend2';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../api/api';
import { useState } from 'react';
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
  
  //const products = useSelector(productSlace => productSlace.products.items)
  //console.log(products)

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

    localStorage.setItem("color0", color.color[0])
    localStorage.setItem("color1", color.color[1])
    localStorage.setItem("color2", color.color[2])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    //console.log(dados)*/
  }

  const [categoroy, setCategory] = useState([])
  const [categoroyC, setCategoryC] = useState([])
  const [categoroyS, setCategoryS] = useState([])
  const [categoroyCA, setCategoryCA] = useState([])
  const [categoroyName, setCategoryName] = useState([])

  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const reqB = await api.get("/category/fc80a298-ba09-4195-879c-7ecd5dadbf24")
      const resB = await reqB.data[0].products_categories
      const reqC = await api.get("/category/3c6b8fd2-6375-415d-95b1-0fdef777ef5f")
      const resC = await reqC.data[0].products_categories
      const reqS = await api.get("/category/7db4cb05-6f6b-4555-9dd4-75965dfcb13f")
      const resS = await reqS.data[0].products_categories
      const reqCA = await api.get("/category/d49e0541-24ca-4a45-a9d0-bfc5e294a444")
      const resCA = await reqCA.data[0].products_categories

      setCategory(resB)
      setCategoryC(resC)
      setCategoryS(resS)
      setCategoryCA(resCA)
      setCategoryName(resName)
    })()
  },[])

  const NameCategory = categoroyName.map(res => res.name)

  console.log(categoroyS)

  return (
    <>
    {/*<Slids />*/}
  {categoroy == "" && categoroyC == "" && categoroyS == "" && categoroyCA == "" ? <Example /> : 
    <div>
      <ProductProd>
      <section>
      <br />
      <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[0]}</h2>
      
      {categoroy.map(res => (
          <Link to="desc" onClick={() => LocalSto(res.products)}>
            <div key={res.id}>
              <img src={res.products.image[0]} alt="img" />
              <h5>{res.products.name}</h5>
              <h3>R${res.products.price},00</h3>
              <span>
                <p>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
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
  
    
    <ProductProd>
      <section>
      <br />
      <h2 className='ml-3'>{categoroyC == "" ? "" : NameCategory[1]}</h2>
      
      {categoroyC.map(res => (
          <Link to="desc" onClick={() => LocalSto(res.products)}>
            <div key={res.id}>
              <img src={res.products.image[0]} alt="img" />
              <h5>{res.products.name}</h5>
              <h3>R${res.products.price}</h3>
              <span>
                <p>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
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
      
    <ProductProd>
      <section>
      <br />
      <h2 className='ml-3'>{categoroyS == "" ? "" : NameCategory[7]}</h2>
      
      {categoroyS.map(res => (
          <Link to="desc" onClick={() => LocalSto(res.products)}>
            <div key={res.id}>
              <img src={res.products.image[0]} alt="img" />
              <h5>{res.products.name}</h5>
              <h3>R${res.products.price}</h3>
              <span>
                <p>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
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
     
    <ProductProd>
      <section>
      <br />
      <h2 className='ml-3'>{categoroyCA == "" ? "" : NameCategory[2]}</h2>
      
      {categoroyCA.map(res => (
          <Link to="desc" onClick={() => LocalSto(res.products)}>
            <div key={res.id}>
              <img src={res.products.image[0]} alt="img" />
              <h5>{res.products.name}</h5>
              <h3>R${res.products.price},00</h3>
              <span>
                <p>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
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
    </div>
  }
    
  </>
  );
}

export default Products;
