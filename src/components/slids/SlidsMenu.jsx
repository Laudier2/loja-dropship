import { useEffect, useState, useRef } from "react";
import { Coontainer } from "./styles";
import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

export function SlidsMenu() {

  const [ data, setData ] = useState([])
  const carrousel = useRef(null)
  
  console.log(data)
  useEffect(() => {
    async function RequaryData(){
      const req = await axios.get("https://api-store-v4bm.onrender.com/category")
      const res = await req.data

      setData(res)
    }
    RequaryData()
  },[])

  if(!data || !data.length) return null

  const hendleLeftClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
  }

  const hendleRigthClik = (e) => {
    e.preventDefault()
    carrousel.current.scrollLeft += carrousel.current.offsetWidth
  }

  return (
    <>
    <br />
      <Coontainer>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" style={{width: 50, height: 100}}/>
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
          {data.map(res => {

            const { id, name, image } = res
            
            return (
              <div>
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
              </div>
              <div className="info">
               <span className="name">{name}</span>
             </div>
            </div>
            )
            
          })}
        </div>
        <div className="buttons2">
          <button onClick={(e) => hendleRigthClik(e)}>
            <MdNavigateNext className="buttons2" style={{width: 50, height: 100}}/>
          </button>
        </div>
      </Coontainer>
    </>
  )
}
