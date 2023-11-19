//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { ContainerBody, ContainerProduct, ProductImage, ProductItems } from './stylend';
import { CustomButtonDescription } from '../custom-button/styles';
import { Link } from 'react-router-dom';
import Slids from '../slids/slids';
import SlidsProducts from '../slids/SlidsProducts';


const Products = () => {
  
  //const history = useHistory()
  
  const products = useSelector(productSlace => productSlace.products.items)
  console.log(products)

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

  /* <Link to='/desc' onClick={() => LocalSto(res)}>
                <ProductImage imageUrl={res.image[0]}>
                  
                </ProductImage>
                <ContainerProduct>
                    <div key={res.id}>
                      <CustomButtonDescription>
                        {res.name}
                      </CustomButtonDescription>
                    </div>
                  </ContainerProduct>
        </Link>*/

  return (
    <div className="container">
    {/*<Slids />*/}
      {products.map(res => (
        <div className="card-deck" key={res.id}>
          <div className="card col-sm-3">
            <img className="card-img-top" src=".../100px200/" alt="Imagem de capa do card"/>
            <div className="card-body">
              <h5 className="card-title">Título do card</h5>
              <p className="card-text">Este é um card mais longo com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior.</p>
              <p className="card-text"><small className="text-muted">Atualizados 3 minutos atrás</small></p>
            </div>
          </div>
        </div>    
      ))}  
    </div>
  );
}

export default Products;
