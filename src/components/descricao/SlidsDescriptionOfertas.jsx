/* eslint-disable eqeqeq */
import { useEffect, useState, useRef } from "react";
import { Coontainer } from "./styles";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";
import api from "../../api/api";
import { FaCreditCard } from "react-icons/fa";

export function SlidsDescriptionOfertas() {

  const [ data, setData ] = useState([])
  const carrousel = useRef(null)

  
  //const localId = localStorage.getItem("categoryId")

  useEffect(() => {
    async function RequaryData(){
      const req = await api.get(`/product`)
      const res = await req.data

      setData(res)
    }
    RequaryData()
  },[])

  const localId = localStorage.getItem("id")
  //const BNT = localStorage.getItem("name")

  //const productFilter = product.filter(product => product)
  //const prodFilter = [...productFilter]
  //const dataProductFilter2 = prodFilter.filter(productData => (productData.id === localId))


  const filterProduct = data.map(pro => pro)
  const dataProductFilter = filterProduct.filter(productData => (productData.id === localId))
  const filterProductBarcode = dataProductFilter.map(pro => pro.bar_code)
  const dataProductFilterBarcodeList = filterProduct.filter(productData => (productData.bar_code == filterProductBarcode[0][0]))

  console.log(dataProductFilterBarcodeList)

  function LocalSto(e) {

    localStorage.removeItem("id")
    localStorage.removeItem("bar_code")
    localStorage.removeItem("categoryId")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)
    localStorage.setItem("bar_code", e.bar_code)

    window.location.reload()

  }

  if(!data || !data.length) return null

  const hendleLeftClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    console.log(e, "teste")
  }

  const hendleRigthClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft += carrousel.current.offsetWidth
    console.log(e, "teste")
  }

  return (
    <>
      <Coontainer>
        <h4>Produtos relacionados</h4>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {dataProductFilterBarcodeList.map(res => {

            const { id, name, image, price } = res;

            let percentual = 0.25;
            let aumento = price * percentual;
            let novo_price = price - aumento;
            
            return (
              <Link to="/desc" onClick={() => LocalSto(res)}>
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
                <h3 className='oldPrice'>R${price},00 </h3>
                <h4 className='oldPricereal'> R$ {novo_price},00</h4>
              </div>
            </Link>
            )
            
          })}
        </div>
        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext className="buttons2"/>
          </button>
        </div>
      </Coontainer>
    </>
  )
}
