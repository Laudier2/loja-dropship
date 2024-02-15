/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage } from './products3';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Header } from '../header';
import SlidsProducts from '../slids/SlidsProducts';
import { SlidsMenu } from '../slids/SlidsMenu';
import Footer from '../footer/footer';
import { Slids } from '../slids/slids';

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
    <ReactLoading type='spokes' color='aqua' height={'100%'} width={'100%'} delay={'100'} />
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
  const [categoroyTenis, setCategoryTenis] = useState([])
  const [categoryShort, setcategoryShort] = useState([])
  const [categoroyShortF, setCategoryShortF] = useState([])
  const [categoryConjunto, setCategoryConjunto] = useState([])
  const [categoroyVestido, setCategoryVestido] = useState([])
  const [categoroyCamisetaF, setCategoryCamisetaF] = useState([])
  const [categoroyFone, setCategoryFone] = useState([])
  const [categoroyCalca, setCategoryCalca] = useState([])

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const reqVestido = await api.get("/category/aef683d7-5d14-4b24-a289-9100185769a8")
      const resVestido = await reqVestido.data[0].products_categories
      const reqTenis = await api.get("/category/aef683d7-5d14-4b24-a289-9100185769a8")
      const resTenis = await reqTenis.data[0].products_categories
      const reqShort = await api.get("/category/48122c17-5228-46d6-87bc-14ed904d0b78")
      const resShort = await reqShort.data[0].products_categories
      const reqShortF = await api.get("/category/4f9bf968-4ef7-4384-9e16-71050dc22650")
      const resShortF = await reqShortF.data[0].products_categories
      const reqConjunto = await api.get("/category/9555b31a-b622-4fa8-be94-c4a157c912fc")
      const resConjunto = await reqConjunto.data[0].products_categories
      const reqCamiseta = await api.get("/category/78df7ec7-7d12-4123-ba73-6cd335249ef3")
      const resCamiseta = await reqCamiseta.data[0].products_categories
      const reqFone = await api.get("/category/e966ef11-9a73-465f-9838-f33efe71f6e8")
      const resFone = await reqFone.data[0].products_categories
      const reqCalca = await api.get("/category/465ce7a8-5174-4543-a7b8-5e8a6ca885b1")
      const resCalca = await reqCalca.data[0].products_categories

      setCategory(resName)
      setCategoryTenis(resTenis)
      setcategoryShort(resShort)
      setCategoryShortF(resShortF)
      setCategoryConjunto(resConjunto)
      setCategoryVestido(resVestido)
      setCategoryCamisetaF(resCamiseta)
      setCategoryFone(resFone)
      setCategoryCalca(resCalca)
    })()
  },[])

  //const teste = categoroyVestido.map(img => img)

  console.log(categoroy)

  /*const [promo, setPromo] = useState([])

  useEffect((
    async function Promo(){
      const req = await api.get("/promocao")
      const res = await req.data;

      setPromo(res)
    }
  ), [])*/

  //console.log(promo)

  const NameCategory = categoroy.map(res => res.name)

  console.log(NameCategory)

  /*
    var salario = 100;
    var percentual = 0.25;
    var aumento = salario * percentual;
    var novo_price = salario - aumento;
  */

  return (
    <>
    <Header/>
    <SlidsProducts/>
    <SlidsMenu/>
  {categoroy == "" && categoroyTenis == "" && categoryShort == "" && categoroyCamisetaF == "" && categoroyVestido == "" && categoroyShortF == "" && categoryConjunto == "" && categoroyFone ? <Example /> : 
    <div>
        <Slids/>
        <ProductProd>
          <section>
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[7]}</h2>
        
          {categoroyCalca.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          console.log("img", image[0])

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg" alt="img" className="cartImg" />
                <span>
                  <p className='p'>
                    <FaCreditCard className='cartao'/> Em até 12x sem juros
                  </p>
                </span>
                <h4 className='oldPrice'>R${price},00 </h4>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
              </div>
            </Link>
            )
        })
      }
      </section>  
      
    </ProductProd>
    <ProductProd>
          <section>
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[11]}</h2>
        
          {categoroyCamisetaF.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          console.log("img", image[0])

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg" alt="img" className="cartImg" />
                <span>
                  <p className='p'>
                    <FaCreditCard className='cartao'/> Em até 12x sem juros
                  </p>
                </span>
                <h4 className='oldPrice'>R${price},00 </h4>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
              </div>
            </Link>
            )
        })
      }
      </section>  
      
    </ProductProd>
    <ProductProd>
          <section>
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[3]}</h2>
        
          {categoroyFone.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          console.log("img", image[0])

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg" alt="img" className="cartImg" />
                <span>
                  <p className='p'>
                    <FaCreditCard className='cartao'/> Em até 12x sem juros
                  </p>
                </span>
                <h4 className='oldPrice'>R${price},00 </h4>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
              </div>
            </Link>
            )
        })
      }
      </section>  
      
    </ProductProd>

    <ProductProd>
          <section>
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[6]}</h2>
        
          {categoryConjunto.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          console.log("img", image[0])

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg" alt="img" className="cartImg" />
                <span>
                  <p className='p'>
                    <FaCreditCard className='cartao'/> Em até 12x sem juros
                  </p>
                </span>
                <h4 className='oldPrice'>R${price},00 </h4>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
              </div>
            </Link>
            )
        })
      }
      </section>  
      
    </ProductProd>

    <Slids/>
    
    <ProductProd>
          <section>
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[0]}</h2>
        
          {categoroyVestido.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          console.log("img", image[0])

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="https://www.episinos.com.br/fotos/1/180/icone-entrega.jpg" alt="img" className="cartImg" />
                <span>
                  <p className='p'>
                    <FaCreditCard className='cartao'/> Em até 12x sem juros
                  </p>
                </span>
                <h4 className='oldPrice'>R${price},00 </h4>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
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
