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
      const reqVestido = await api.get("/category/3b56f30d-0422-428d-a020-b608b3254d08")
      const resVestido = await reqVestido.data[0].products_categories
      const reqTenis = await api.get("/category/f5379b77-d56e-470c-950b-662221ed54cf")
      const resTenis = await reqTenis.data[0].products_categories
      const reqShort = await api.get("/category/25d32c83-91ba-43a9-8e89-76066a4168bf")
      const resShort = await reqShort.data[0].products_categories
      const reqShortF = await api.get("/category/cc3ca18b-836f-447d-a2cf-56046e3e8fb0")
      const resShortF = await reqShortF.data[0].products_categories
      const reqShortM = await api.get("/category/25d32c83-91ba-43a9-8e89-76066a4168bf")
      const resShortM = await reqShortM.data[0].products_categories
      const reqConjunto = await api.get("/category/aeaa62f5-bac8-45d3-86fc-4ed7a8307c7f")
      const resConjunto = await reqConjunto.data[0].products_categories
      const reqCamiseta = await api.get("/category/59733ffe-2c96-4acb-aba0-e58045688789")
      const resCamiseta = await reqCamiseta.data[0].products_categories
      const reqFone = await api.get("/category/519c1c14-0508-4231-b77b-de73a469c342")
      const resFone = await reqFone.data[0].products_categories
      const reqCalca = await api.get("/category/eb40635e-ebe4-4e82-9b25-2811aed37c91")
      const resCalca = await reqCalca.data[0].products_categories
      const reqBone = await api.get("/category/5941bdc7-89c7-4d8e-b09a-39311774e29d")
      const resBone = await reqBone.data[0].products_categories
      const reqIstetica = await api.get("/category/f3d348ca-1cb5-41e9-a9e3-81c719508cad")
      const resIstetica = await reqIstetica.data[0].products_categories
      const reqCalcaM = await api.get("/category/df640fd0-67ce-4856-bd70-bc5121323b24")
      const resCalcaM = await reqCalcaM.data[0].products_categories
      const reqInfo = await api.get("/category/1e40a692-3864-4d6d-bb97-3c9819297d57")
      const resInfo = await reqInfo.data[0].products_categories
      const reqEletronico = await api.get("/category/a733bfb1-4f80-427e-9e18-eedd3a8cd22e")
      const resEletronico = await reqEletronico.data[0].products_categories
      const reqSmatphone = await api.get("/category/25d32c83-91ba-43a9-8e89-76066a4168bf")
      const resSmatphone = await reqSmatphone.data[0].products_categories
      const reqIntimo = await api.get("/category/2b55dd57-4b1a-4b3f-9cee-4fb1fab7b85d")
      const resIntimo = await reqIntimo.data[0].products_categories
      const reqRelogio = await api.get("/category/a0eb37e8-ff8c-43ec-8759-a6e3800f2948")
      const resRelogio = await reqRelogio.data[0].products_categories
      const reqFerramenta = await api.get("/category/3d7a8996-1091-4c30-96bb-a64a17505474")
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
            
            <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[11]}</h2>
          
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
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[15]}</h2>
              
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
            <ProductProd>
                <section>
                
                <h2 className='ml-3'>{categoroy == "" ? "" : NameCategory[11]}</h2>
              
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
