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
import { SlidsMenu } from '../slids/SlidsMenu';
import Footer from '../footer/footer';

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
    localStorage.removeItem("img0")
    localStorage.removeItem("img1")
    localStorage.removeItem("img2")
    localStorage.removeItem("img3")
    localStorage.removeItem("img4")

    localStorage.removeItem("color0")
    localStorage.removeItem("color1")
    localStorage.removeItem("color2")
    localStorage.removeItem("color3")
    localStorage.removeItem("color4")
    localStorage.removeItem("color5")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)

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

    console.log(e)
  }

  // Aqui estamos fazenso as requisição na API REstful com o axio, 
  //e recebendo os dados atraves do useState para poder manipula os estados

  const [categoroy, setCategory] = useState([])
  const [categoroyVestido, setCategoryVestido] = useState([])
  const [categoryShort, setcategoryShort] = useState([])
  const [categoroyShortF, setCategoryShortF] = useState([])
  const [categoryConjunto, setCategoryConjunto] = useState([])
  const [categoroyName, setCategoryName] = useState([])

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const reqB = await api.get("/category/2a81825a-0328-4ece-ba6a-2d84a19ad6a2")
      const resB = await reqB.data[0].products_categories
      const reqV = await api.get("/category/2abe662b-3668-4dbd-807c-500fe942128f")
      const resV = await reqV.data[0].products_categories
      const reqShort = await api.get("/category/42fe8d97-0c8f-4103-8efe-1421541606ec")
      const resShort = await reqShort.data[0].products_categories
      const reqShortF = await api.get("/category/09ee85a3-901f-41bf-bc9b-eceac0456820")
      const resShortF = await reqShortF.data[0].products_categories
      const reqConjunto = await api.get("/category/8ab8b4b2-bb09-4f6d-aea3-e2ae7f783223")
      const resConjunto = await reqConjunto.data[0].products_categories

      setCategory(resB)
      setCategoryVestido(resV)
      setcategoryShort(resShort)
      setCategoryShortF(resShortF)
      setCategoryConjunto(resConjunto)
      setCategoryName(resName)
    })()
  },[])

  console.log(categoroy)

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

  /*
    var salario = 100;
    var percentual = 0.25;
    var aumento = salario * percentual;
    var novo_salario = salario - aumento;
  */

  return (
    <>
    <Header/>
    <Slids />
    <SlidsMenu/>
  {categoroy == "" && categoroyVestido == "" && categoryShort == "" && categoroyShortF == "" && categoryConjunto == "" ? <Example /> : 
    <div>
      <ProductProd>
      <section>
      
      <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[7]}</h2>
      
      {categoroy.map(res => {

        const { id, name, image, price } = res.products;

        var percentual = 0.30;
        var aumento = price * percentual;
        var novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <>
                <b className='oldPrice'>R${price},00 </b>
                <b> por R${novo_price}</b>
              </>
              <span>
                <p className='p'>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          )
      })
      }
      </section>  
      
    </ProductProd>
  
    
    <ProductProd>
      <section>
     
      <h2 className='ml-3'>{categoroyVestido == "" ? "" : NameCategory[12]}</h2>
      
      {categoroyVestido.map(res => {

        const { id, name, image, price } = res.products;

        var percentual = 0.25;
        var aumento = price * percentual;
        var novo_salario = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <>
                <b className='oldPrice'>R${price},00 </b>
                <b> por R${novo_salario}</b>
              </>
              <span>
                <p className='p'>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          )
        })
      }
      </section>  
      
    </ProductProd>
      
    <ProductProd>
      <section>
     
      <h2 className='ml-3'>{categoryShort == "" ? "" : NameCategory[6]}</h2>
      
      {categoryShort.map(res => {

        const { id, name, image, price } = res.products;

        var percentual = 0.25;
        var aumento = price * percentual;
        var novo_salario = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <>
                <b className='oldPrice'>R${price},00 </b>
                <b> por R${novo_salario}</b>
              </>
              <span>
                <p className='p'>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          )
        })
      }
      </section>  
      
    </ProductProd>
     
    <ProductProd>
      
      <section>
      
      <h2 className='ml-3'>{categoryConjunto == "" ? "" : NameCategory[5]}</h2>
      
      {categoroyShortF.map(res => {

        const { id, name, image, price } = res.products;

        var percentual = 0.25;
        var aumento = price * percentual;
        var novo_salario = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <>
                <b className='oldPrice'>R${price},00 </b>
                <b> por R${novo_salario}</b>
              </>
              <span>
                <p className='p'>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          )
        })
      }
      </section>  
      
    </ProductProd>

    <SlidsProducts/>
    <br />
    <ProductProd style={{marginTop: "-10px"}}>
      <section>

      <h2 className='ml-3'>{categoryConjunto == "" ? "" : NameCategory[9]}</h2>
      
      {categoryConjunto.map(res => {

        const { id, name, image, price } = res.products;

        var percentual = 0.25;
        var aumento = price * percentual;
        var novo_salario = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <>
                <b className='oldPrice'>R${price},00 </b>
                <b> por R${novo_salario}</b>
              </>
              <span>
                <p className='p'>
                  <FaCreditCard className='cartao'/> Em até 12x sem juros
                </p>
              </span>
              <button>
                DESCRIÇÃO
              </button>
            </div>
          </Link>
          )
        })
      }
      </section>  
      
    </ProductProd>

    </div>
  }
  <Footer/>
  </>
  );
}

export default Products;
