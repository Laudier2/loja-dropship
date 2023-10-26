//import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../custom-button';
import { BsCartPlus } from "react-icons/bs";
import { addCart } from '../../redux/cart/cart';
import { ContainerBody, ContainerProduct, ProductImage } from './stylend';
//import Slids from '../slids/slids';
import { CustomButtonDescription } from '../custom-button/styles';


const Products = () => {

  //const history = useHistory()

  const chec = useSelector(productSlace => productSlace.products.items)

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

  console.log(chec)

  const dispatch = useDispatch()

  function hendlerCartAdd(e) {
    dispatch(addCart(e))
  }

  return (
    <>
    {/*<Slids />*/}
        <ContainerBody>
          {chec == "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> : chec.map(res => (
            <a href='/desc' onClick={() => LocalSto(res)}>
              <ProductImage imageUrl={res.image}>
                <ContainerProduct>
                  <div key={res.id}>
                    <CustomButtonDescription>
                      {res.name}
                    </CustomButtonDescription>
                  </div>
                </ContainerProduct>
              </ProductImage>
            </a>
          ))
        }
      </ContainerBody >
  </>
  );
}

export default Products;
