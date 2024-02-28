/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-comment-textnodes */
import ReactLoading from 'react-loading';
import { ProductProd, LoadingPage } from './styles';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Header } from '../header';
import { Slids } from '../slids/slids';
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

export const Intima = () => {

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
    localStorage.setItem("categoryId", e.id)

  }

  // Aqui estamos fazenso as requisição na API REstful com o axio, 
  //e recebendo os dados atraves do useState para poder manipula os estados

  const [categoroy, setCategory] = useState([])
  const [categoroyData, setCategoryData] = useState([])

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const req = await api.get("/category/2b55dd57-4b1a-4b3f-9cee-4fb1fab7b85d")
      const res = await req.data[0].products_categories

      setCategory(resName)
      setCategoryData(res)
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
    <Slids />
    <SlidsMenu/>
    
    {categoroy == "" && categoroyData == "" ? <Example /> : 
      <div>
      <br />
      <ProductProd>
            <section>
            
            <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[15]}</h2>
          
            {categoroyData.map(res => {

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
