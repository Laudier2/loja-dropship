//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { ProductProd } from './stylend';
import { FaCreditCard } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slids from '../slids/slids';


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

  return (
    <>
    {/*<Slids />*/}
      
    <ProductProd>
      <section>
      {products === !products 
        ? <ReactLoading className='container col-sm-2' type='bars' color='#0000FF' /> 
        : products.map(res => (
          <Link to="desc" onClick={() => LocalSto(res)}>
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
      
      
  </>
  );
}

export default Products;
