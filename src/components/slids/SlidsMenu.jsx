import { useEffect, useState, useRef } from "react";
import { Coontainer } from "./styles";
import axios from "axios";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";

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
                    <img src="/img/vestido.webp" alt="img" />
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
                    <img src="/img/sapatos.webp" alt="img" />
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
                    <img src="/img/shortM.webp" alt="img" />
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
                    <img src="/img/shortF.jpg" alt="img" />
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
                    <img src="/img/conjunto.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[4].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/camisetaf">
                <div className="item">
                  <div className="image">
                    <img src="/img/camisaM.webp" alt="img" />
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
                    <img src="/img/fone3.webp" alt="img" />
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
                    <img src="/img/calcaF.webp" alt="img" />
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
                    <img src="/img/bone.webp" alt="img" />
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
                    <img src="/img/ferramentas.webp" alt="img" />
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
                    <img src="/img/calcaM.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[10].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/istetica">
                <div className="item">
                  <div className="image">
                    <img src="/img/instetica.jpg" alt="img" />
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
                    <img src="/img/info.webp" alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[12].name}</span>
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
