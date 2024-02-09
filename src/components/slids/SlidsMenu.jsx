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
                    <img src={data[0].image} alt="img" />
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
                    <img src={data[1].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[1].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/relogio">
                <div className="item">
                  <div className="image">
                    <img src={data[2].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[2].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/audiovideo">
                <div className="item">
                  <div className="image">
                    <img src={data[3].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[3].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/rintima">
                <div className="item">
                  <div className="image">
                    <img src={data[4].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[4].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/maquiagem">
                <div className="item">
                  <div className="image">
                    <img src={data[5].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[5].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/conjuntof">
                <div className="item">
                  <div className="image">
                    <img src={data[6].image} alt="img" />
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
                    <img src={data[7].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[7].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/shortm">
                <div className="item">
                  <div className="image">
                    <img src={data[8].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[8].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/shortf">
                <div className="item">
                  <div className="image">
                    <img src={data[9].image} alt="img" />
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
                    <img src={data[10].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[10].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/camisetaf">
                <div className="item">
                  <div className="image">
                    <img src={data[11].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[11].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/camisetam">
                <div className="item">
                  <div className="image">
                    <img src={data[12].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[12].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/informatica">
                <div className="item">
                  <div className="image">
                    <img src={data[13].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[13].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/ferramentas">
                <div className="item">
                  <div className="image">
                    <img src={data[14].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[14].name}</span>
                </div>
              </Link>
          </div>
          <div>
              <Link to="/estetica">
                <div className="item">
                  <div className="image">
                    <img src={data[15].image} alt="img" />
                  </div>
                </div>
                <div className="info">
                  <span className="name">{data[15].name}</span>
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
