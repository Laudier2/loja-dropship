import { useEffect, useState, useRef } from "react";
import { Coontainer } from "./slidsMenu";
import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";

export function SlidsMenu() {

  const [ data, setData ] = useState([])
  const carrousel = useRef(null)

  //const convertName = data[13].name.slice(6)
  //console.log(convertName)

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

  //console.log(data)

  return (
    <>
      <Coontainer>
        <div className="buttons1">
          <button onClick={(e) => hendleLeftClik(e)}>
            <MdNavigateBefore className="buttons1" style={{width: 50, height: 100}}/>
          </button>
        </div>
        <div className="carousel" ref={carrousel}>
            <div>
              <Link to="/vestido">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/vestido.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[0].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/calcados">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/tenis.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[1].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/shortm">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/short-m.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[2].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/shortf">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/shor-f.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[3].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/conjuntof">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/conjunto-f.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[4].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/camisetam">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/camiseta-m.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[5].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/audiovideo">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/audioevideo.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[6].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/calcaf">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/calca-f.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[7].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/bone">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/bone.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[8].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/ferramentas">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/ferramentas.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[9].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/calcam">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/calca-m.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[10].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/estetica">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/estetica.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[11].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/informatica">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/info.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[12].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/eletronica">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/eletronico.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[13].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/smartphone">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/Smartphone.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[14].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/intimo">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/intima.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[15].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/relogio">
                <div className="item">
                  <div className="image">
                    <img src="/imgCategory/relogio.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[16].name}</span>
                </div>
              </Link>
          </div>
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
