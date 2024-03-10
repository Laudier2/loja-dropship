import { useEffect, useState, useRef } from "react";
import { CoontainerSlids } from "./slidsListProducts";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";
import api from "../../api/api";
//import { useDispatch } from "react-redux";
//import { addDecription } from "../../redux/cart/cart";

export const SlidsListProducts = () => {

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

  /*const dispatch = useDispatch()

  const addDescriptionProducts = (e) => {
    dispatch(addDecription(e))
  }*/

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

  console.log(data, "l")
  
  return (
    <>
      <CoontainerSlids>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" />
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {data.map(res => {
            
            const { id, image } = res

            return (
              <Link to="/desc" onClick={() => LocalSto(res)}>
                <div key={id} className="item">
                  <div className="image">
                    <img src={image[0]} alt="img" />
                  </div>
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
      </CoontainerSlids>
    </>
  )
}