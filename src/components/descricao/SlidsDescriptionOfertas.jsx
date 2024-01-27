import { useEffect, useState, useRef } from "react";
import { Coontainer } from "./styles";
import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";

export function SlidsDescriptionOfertas() {

  const [ data, setData ] = useState([])
  const carrousel = useRef(null)

  //const localId = localStorage.getItem("categoryId")
  
  console.log(data)
  useEffect(() => {
    async function RequaryData(){
      const req = await axios.get(`https://api-store-v4bm.onrender.com/product`)
      const res = await req.data

      setData(res)
    }
    RequaryData()
  },[])

  function LocalSto(e) {

    localStorage.removeItem("id")
    localStorage.removeItem("img0")
    localStorage.removeItem("img1")
    localStorage.removeItem("img2")
    localStorage.removeItem("img3")
    localStorage.removeItem("img4")

    localStorage.removeItem("color0")
    localStorage.removeItem("color1")
    localStorage.removeItem("color2")
    localStorage.removeItem("color3")
    localStorage.removeItem("color4")
    localStorage.removeItem("color5")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)

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
    localStorage.setItem("img4", img.image[4])

    localStorage.setItem("color0", color.color[0])
    localStorage.setItem("color1", color.color[1])
    localStorage.setItem("color2", color.color[2])
    localStorage.setItem("color3", color.color[3])
    localStorage.setItem("color4", color.color[4])
    localStorage.setItem("color5", color.color[5])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    window.location.reload()
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

  console.log(data.products_categories)

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
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt="img" />
                  </div>
                </div>
                <div className="info">
                <span className="name">{name}</span>
                <h5>R${novo_price},00</h5>
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
