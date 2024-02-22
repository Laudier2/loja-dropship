/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage } from './products';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Header } from '../header';
import SlidsProducts from '../slids/SlidsProducts';
import { SlidsMenu } from '../slids/SlidsMenu';
import Footer from '../footer/footer';
import { Slids } from '../slids/slids';
//import { useDispatch } from 'react-redux';
//import { addDecription } from '../../redux/cart/cart';

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

export const Products = () => {

  useEffect(() => {
    window.scroll({
      top: 100,
    });

  },[])

  /*const dispatch = useDispatch()

  const addDescriptionProducts = (e) => {
    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    //dispatch(addDecription(e))
  }*/
  
  //const history = useHistory()
  
  //const products = useSelector(productSlace => productSlace.products.items)

  function LocalSto(e) {

    localStorage.removeItem("id")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)

  }

  // Aqui estamos fazenso as requisição na API REstful com o axio, 
  //e recebendo os dados atraves do useState para poder manipula os estados//

  const [categoroy, setCategory] = useState([])
  const [categoroyTenis, setCategoryTenis] = useState([])
  const [categoryShort, setcategoryShort] = useState([])
  const [categoroyShortF, setCategoryShortF] = useState([])
  const [categoryConjunto, setCategoryConjunto] = useState([])
  const [categoroyVestido, setCategoryVestido] = useState([])
  const [categoroyCamisetaF, setCategoryCamisetaF] = useState([])
  const [categoroyFone, setCategoryFone] = useState([])
  const [categoroyCalca, setCategoryCalca] = useState([])
  const [categoroyBone, setCategoryBone] = useState([])
  const [categoroyIstetica, setCategoryIstetica] = useState([])
  const [categoroyShortM, setCategoryShortM] = useState([])

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const reqVestido = await api.get("/category/ac78a824-5412-43f8-b977-8c855f0dc79b")
      const resVestido = await reqVestido.data[0].products_categories
      const reqTenis = await api.get("/category/0f89e28e-0b05-4f2a-9ebe-abe4ad95127e")
      const resTenis = await reqTenis.data[0].products_categories
      const reqShort = await api.get("/category/41a0d39a-d5d8-4a70-a2a5-050b68591ab5")
      const resShort = await reqShort.data[0].products_categories
      const reqShortF = await api.get("/category/ab556f0a-b7b9-4079-9cc8-ce6d8f4f5117")
      const resShortF = await reqShortF.data[0].products_categories
      const reqConjunto = await api.get("/category/891670a9-81a3-4451-b0e7-b9649b21743b")
      const resConjunto = await reqConjunto.data[0].products_categories
      const reqCamiseta = await api.get("/category/5a011800-5e65-455c-b62d-f095f6ff8402")
      const resCamiseta = await reqCamiseta.data[0].products_categories
      const reqFone = await api.get("/category/23a34a5e-aa57-4753-b213-1a6f6537423a")
      const resFone = await reqFone.data[0].products_categories
      const reqCalca = await api.get("/category/7080009b-d0f3-4bc7-860e-45972d576933")
      const resCalca = await reqCalca.data[0].products_categories
      const reqBone = await api.get("/category/f93ec5bb-f056-47dd-aa75-9c95f6c4e120")
      const resBone = await reqBone.data[0].products_categories
      const reqIstetica = await api.get("/category/f4e05ac6-fb7e-4d2a-adf6-70d0c9558678")
      const resIstetica = await reqIstetica.data[0].products_categories
      const reqShortM = await api.get("/category/41a0d39a-d5d8-4a70-a2a5-050b68591ab5")
      const resShortM = await reqShortM.data[0].products_categories

      setCategory(resName)
      setCategoryTenis(resTenis)
      setcategoryShort(resShort)
      setCategoryShortF(resShortF)
      setCategoryConjunto(resConjunto)
      setCategoryVestido(resVestido)
      setCategoryCamisetaF(resCamiseta)
      setCategoryFone(resFone)
      setCategoryCalca(resCalca)
      setCategoryBone(resBone)
      setCategoryIstetica(resIstetica)
      setCategoryShortM(resShortM)
    })()
  },[])

  const NameCategory = categoroy.map(res => res.name)

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

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
      
        {categoroyIstetica.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
      
        {categoroyShortF.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
      
        {categoroyFone.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
        
        <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[8]}</h2>
      
        {categoroyBone.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
          
          <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[1]}</h2>
        
          {categoroyTenis.map(res => {

          const { id, name, image, price } = res.products;

          let percentual = 0.25;
          let aumento = price * percentual;
          let novo_price = price - aumento;

          return (
            <Link to="/desc" onClick={() => LocalSto(res.products)}>
              <div key={id}>
                <img src={image[0]} alt="img" />
                <h5>{name}</h5>
                <b className="frete">Frete Gratis</b>
                <img src="card.jpg" alt="img" className="cartImg" />
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
        
        <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[4]}</h2>
      
        {categoryConjunto.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
        
        <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[2]}</h2>
      
        {categoroyShortM.map(res => {

        const { id, name, image, price } = res.products;

        let percentual = 0.25;
        let aumento = price * percentual;
        let novo_price = price - aumento;

        return (
          <Link to="/desc" onClick={() => LocalSto(res.products)}>
            <div key={id}>
              <img src={image[0]} alt="img" />
              <h5>{name}</h5>
              <b className="frete">Frete Gratis</b>
              <img src="card.jpg" alt="img" className="cartImg" />
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
