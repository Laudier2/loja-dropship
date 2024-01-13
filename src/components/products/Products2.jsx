/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage } from './stylend2';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Header } from '../header';
import Slids from '../slids/slids';
import SlidsProducts from '../slids/SlidsProducts';

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

  useEffect(() => {
    window.scroll({
      top: 100,
    });

  },[])
  
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
    localStorage.setItem("color3", color.color[3])
    localStorage.setItem("color4", color.color[4])
    localStorage.setItem("color5", color.color[5])

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
  const [categoroyMA, setCategoryMa] = useState([])
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
      const reqMA = await api.get("/category/7a07d7d3-9f53-407f-853f-f6df23fc578e")
      const resMA = await reqMA.data[0].products_categories

      setCategory(resB)
      setCategoryC(resC)
      setCategoryS(resS)
      setCategoryCA(resCA)
      setCategoryMa(resMA)
      setCategoryName(resName)
    })()
  },[])

  const [promo, setPromo] = useState([])

  useEffect((
    async function Promo(){
      const req = await api.get("/promocao")
      const res = await req.data;

      setPromo(res)
    }
  ), [])

  console.log(promo)

  const NameCategory = categoroyName.map(res => res.name)

  console.log("test",categoroyName)

  return (
    <>
    <Header/>
    <Slids />
  {categoroy == "" && categoroyC == "" && categoroyS == "" && categoroyCA == "" && categoroyMA == "" ? <Example /> : 
    <div>
      <ProductProd>
      <section>
      
      <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[0]}</h2>
      
      {categoroy.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
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
      <h2 className='ml-3'>{categoroyC == "" ? "" : NameCategory[8]}</h2>
      
      {categoroyC.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
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
      <h2 className='ml-3'>{categoroyS == "" ? "" : NameCategory[4]}</h2>
      
      {categoroyS.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
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
    
    <SlidsProducts/>
     
    <ProductProd>
      <section>
      <br />
      <h2 className='ml-3'>{categoroyCA == "" ? "" : NameCategory[7]}</h2>
      
      {categoroyCA.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
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
      <h2 className='ml-3'>{categoroyMA == "" ? "" : NameCategory[1]}</h2>
      
      {categoroyMA.map(res => (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
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

    </div>
  }
    
  </>
  );
}

export default Products;
