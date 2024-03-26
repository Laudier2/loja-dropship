/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
//import { useSelector } from 'react-redux';
import { ProductProd, LoadingPage, ContainerVerMais } from './products';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { Header } from '../header';
import SlidsProducts from '../slids/SlidsProducts';
import { SlidsMenu } from '../slids/SlidsMenu';
import Footer from '../footer/footer';
import { SlidsListProducts } from '../slids/SlidsListProducts';
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
    localStorage.removeItem("bar_code")
    localStorage.removeItem("categoryId")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)
    localStorage.setItem("bar_code", e.bar_code)

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
  const [categoroyCalcaM, setCategoryCalcaM] = useState([])
  const [categoroyInfo, setCategoryInfo] = useState([])
  const [categoroyEletro, setCategoryEletro] = useState([])
  const [categoroySmart, setCategorySmart] = useState([])
  const [categoroyShortM, setCategoryShortM] = useState([])
  const [categoroyIntimo, setCategoryIntimo] = useState([])
  const [categoroyRelogio, setCategoryRelogio] = useState([])
  const [categoroyFerramenta, setCategoryFerramenta] = useState([])

  const [vernais, setVermais] = useState(0)
  const [vernais2, setVermais2] = useState(0)

  //Aqui estamos usado o useEffect para deixa os estados sempre atualizados ao carrega o compodnent
  useEffect(() =>{    
    (async() => {
      const reqName = await api.get("/category")
      const resName = await reqName.data
      const reqVestido = await api.get("/category/1e3f101c-4ee7-4bd8-a523-815604b0871b")
      const resVestido = await reqVestido.data[0].products_categories
      const reqTenis = await api.get("/category/dafc819d-5cd0-438c-b1cf-c73e48f583f7")
      const resTenis = await reqTenis.data[0].products_categories
      const reqShort = await api.get("/category/53f5596d-9ad3-4c0e-979d-03e8a831c615")
      const resShort = await reqShort.data[0].products_categories
      const reqShortF = await api.get("/category/c3de65d9-a407-4fae-bd69-769641206f55")
      const resShortF = await reqShortF.data[0].products_categories
      const reqShortM = await api.get("/category/53f5596d-9ad3-4c0e-979d-03e8a831c615")
      const resShortM = await reqShortM.data[0].products_categories
      const reqConjunto = await api.get("/category/a6589306-ab8d-4000-b36c-f1d85392af2a")
      const resConjunto = await reqConjunto.data[0].products_categories
      const reqCamiseta = await api.get("/category/0caf9a82-9e0b-4e69-b5e7-28f279da3574")
      const resCamiseta = await reqCamiseta.data[0].products_categories
      const reqFone = await api.get("/category/4e9c668a-a246-48cf-ad34-111f8c24c3d6")
      const resFone = await reqFone.data[0].products_categories
      const reqCalca = await api.get("/category/8eeaacad-0415-408c-bab9-e927592fad13")
      const resCalca = await reqCalca.data[0].products_categories
      const reqBone = await api.get("/category/d44def2c-c485-4560-86aa-f8de20d3ed6d")
      const resBone = await reqBone.data[0].products_categories
      const reqIstetica = await api.get("/category/7d4665f9-356d-441a-b08b-d29e2dcf3381")
      const resIstetica = await reqIstetica.data[0].products_categories
      const reqCalcaM = await api.get("/category/27a94c99-9035-480a-9a9f-351efdfb65e3")
      const resCalcaM = await reqCalcaM.data[0].products_categories
      const reqInfo = await api.get("/category/a5f0a537-0d61-414e-ad89-eb4e9048f9ad")
      const resInfo = await reqInfo.data[0].products_categories
      const reqEletronico = await api.get("/category/9e2ab53e-57ec-489a-ab7c-5e4cc6a611a7")
      const resEletronico = await reqEletronico.data[0].products_categories
      const reqSmatphone = await api.get("/category/840f2aa4-349b-4e92-9ce0-68898969ccd5")
      const resSmatphone = await reqSmatphone.data[0].products_categories
      const reqIntimo = await api.get("/category/e990a69b-f39c-49ce-aa66-c583a363bd92")
      const resIntimo = await reqIntimo.data[0].products_categories
      const reqRelogio = await api.get("/category/1a7e65e0-2ffa-4641-aecf-5f6a7996afdc")
      const resRelogio = await reqRelogio.data[0].products_categories
      const reqFerramenta = await api.get("/category/0f2013ad-3e14-4822-a10f-5bbac7aa7e06")
      const resFerramenta = await reqFerramenta.data[0].products_categories

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
      setCategoryCalcaM(resCalcaM)
      setCategoryInfo(resInfo)
      setCategoryEletro(resEletronico)
      setCategorySmart(resSmatphone)
      setCategoryIntimo(resIntimo)
      setCategoryRelogio(resRelogio)
      setCategoryFerramenta(resFerramenta)
    })()
  },[])

  const NameCategory = categoroy.map(res => res.name)

  //console.log(categoroy)

 /*const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
 }*/

  return (
    <>
    <Header/>
    <SlidsProducts/>
    <SlidsMenu/>
    {categoroy == "" && categoroyTenis == "" && categoryShort == "" && categoroyCamisetaF == "" && categoroyVestido == "" && categoroyShortF == "" && categoryConjunto == "" && categoroyFone ? <Example /> : 
    <div>
      <SlidsListProducts/>
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
              <h4 className='oldPricereal'> R$ {novo_price},00</h4>
            </div>
          </Link>
          )
        })
      }
      </section>  
      
    </ProductProd>

    <SlidsListProducts/>
    
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
                <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
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
              <h3 className='oldPrice'>R${price},00 </h3>
              <h4 className='oldPricereal'> R$ {novo_price},00</h4>
            </div>
          </Link>
          )
        })
      }
      </section>  
    
      </ProductProd>
    <ContainerVerMais>
      {vernais === 0 ? <button className='vermais' onClick={() => setVermais(1)}>Ver mais</button> :
        <>
          <ProductProd>
              <section>
              
              <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[10]}</h2>
            
              {categoroyCalcaM.map(res => {

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
                    <h3 className='oldPrice'>R${price},00 </h3>
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
            
            <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[15]}</h2>
          
            {categoroyIntimo.map(res => {

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
                  <h3 className='oldPrice'>R${price},00 </h3>
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
            
            <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[12]}</h2>
          
            {categoroyInfo.map(res => {

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
                  <h3 className='oldPrice'>R${price},00 </h3>
                  <h4 className='oldPricereal'> R$ {novo_price},00</h4>
                </div>
              </Link>
              )
            })
          }
          </section>  
          
        </ProductProd>
        
        {vernais2 === 0 ? <button className='vermais' onClick={() => setVermais2(1)}>Ver mais</button> :
            <>
            <ProductProd>
                <section>
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[13]}</h2>
              
                {categoroyEletro.map(res => {
    
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
                      <h3 className='oldPrice'>R${price},00 </h3>
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
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[14]}</h2>
              
                {categoroySmart.map(res => {
    
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
                      <h3 className='oldPrice'>R${price},00 </h3>
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
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[9]}</h2>
              
                {categoroyFerramenta.map(res => {
    
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
                      <h3 className='oldPrice'>R${price},00 </h3>
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
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[16]}</h2>
              
                {categoroyRelogio.map(res => {
    
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
                      <h3 className='oldPrice'>R${price},00 </h3>
                      <h4 className='oldPricereal'> R$ {novo_price},00</h4>
                    </div>
                    
                  </Link>
                  )
                })
              }
              </section>  
              
            </ProductProd>
          </>
        }
      </>
    }
    </ContainerVerMais>

    </div>
  }
  <Footer/>
  </>
  );
}
