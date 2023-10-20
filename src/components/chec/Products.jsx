import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './chec.css'
import api from '../../api/api';
//import { Context } from '../../Context/Provaider';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomButtonDescription } from '../custom-button';
import { BsCartPlus } from "react-icons/bs";
import { addCart } from '../../redux/cart/cart';
import { ContainerBody, ContainerProduct, ProductImage } from './stylend';
import Slinds from '../slids/slids';
import Slids from '../slids/slids';


const Products = () => {

  const history = useHistory()

  const chec = useSelector(productSlace => productSlace.products.items)

  const [busca, setBusca] = useState('')
  const [chec2, setChec] = useState([])

  useEffect(() => {
    const Proc = async () => {
      try {
        const product = await api.get("/product")

        setBusca((product && product.data))
        setChec((product && product.data))

      } catch (error) {
        console.log({ Erro: error })
      }
    }
    Proc()
  }, [])


  useEffect(() => {
    return
  }, [])

  const handlePost = (r) => {
    console.log(r)
  }


  const handleChanher = ({ target }) => {
    if (!target.value) {
      setChec(busca)
      return
    }

    setTimeout(() => {
      const Reace1 = async () => {
        const checFilter = api.get("/product")
        const r = await checFilter

        setChec(r)

      }
      Reace1()
    }, 4000)
  }

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

    history.push("/desc")
    //console.log(dados)*/
  }

  console.log(chec)

  const dispatch = useDispatch()

  function hendlerCartAdd(e) {
    dispatch(addCart(e))
  }

  function hendleUrl() {
    history.push("/desc")
  }

  return (
    <>
    <Slids />
        <ContainerBody>
          {chec === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> : chec.map(res => (
            <ProductImage imageUrl={res.image}>
              <ContainerProduct>
                <div key={res.id}>
                  <CustomButtonDescription onClick={() => LocalSto(res)} >
                    Descrição
                  </CustomButtonDescription>
                  <CustomButton startIcon={<BsCartPlus />} onClick={() => hendlerCartAdd(res)} >
                    Adicionar ao carrinho
                  </CustomButton>
                </div>
              </ContainerProduct>
            </ProductImage>
          ))
          }
      </ContainerBody >
  </>
  );
}

export default Products;
