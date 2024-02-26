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

  function LocalSto(e) {

    localStorage.removeItem("id")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)

  }

  if(!data || !data.length) return null

  const hendleLeftClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
  }

  const hendleRigthClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft += carrousel.current.offsetWidth
  }

  //console.log(data.products_categories)

  return (
    <>
      <Coontainer>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {data.map(res => {

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
                <h4 className='oldPrice'>R${price},00 </h4>
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
