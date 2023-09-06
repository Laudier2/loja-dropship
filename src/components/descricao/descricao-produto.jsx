import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import './desc.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img_desc: {
    width: 270,
    height: 450,
    marginLeft: 50,
    '@media screen and (max-width: 780px)': {
      width: 120,
      height: 230,
      marginLeft: 45,
    }
  },
  img_desc_mini: {
    width: '20%',
    '@media screen and (max-width: 780px)': {
      width: 120,

    }
  },

}))

const Descricao = () => {

  const [receb1, setReceb1] = useState('')
  const [receb2, setReceb2] = useState('')
  const [receb3, setReceb3] = useState('')
  const [receb4, setReceb4] = useState('')
  const [receb01, setReceb01] = useState('')
  const [receb02, setReceb02] = useState('')
  const [receb03, setReceb03] = useState('')

  const classes = useStyles();

  useEffect(() => {
    const req = localStorage.getItem("img0")
    //const req = JSON.parse(req)
    setReceb1(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img1")
    //const req = JSON.parse(req)
    setReceb01(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img2")
    //const req = JSON.parse(req)
    setReceb02(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img3")
    //const req = JSON.parse(req)
    setReceb03(req)
  }, [])

  useEffect(() => {
    const req1 = localStorage.getItem("price")
    //const req1 = JSON.parse(req1)
    setReceb2(req1)
  }, [])

  useEffect(() => {
    const req2 = localStorage.getItem("name")
    //const req2 = JSON.parse(req2)
    setReceb3(req2)
  }, [])

  useEffect(() => {
    const req3 = localStorage.getItem("description")
    //const req3 = JSON.parse(req3)
    setReceb4(req3)
  }, [])

  function over0() {
    document.getElementById("logo").src = `${receb1}`;
  }
  function over1() {
    document.getElementById("logo").src = `${receb01}`;
  }
  function over2() {
    document.getElementById("logo").src = `${receb02}`;
  }

  function over3() {
    document.getElementById("logo").src = `${receb03}`;
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="card-group card">
          <div className="container col-sm-5">
            <div className="card-group">
              <div className="mt-5 card1">
                <img className="card-img-top card img-d" src={receb1} alt="Elemento vindo da função ove0" onMouseOver={() => over0(over0)} />
                <img className="card-img-top card img-d" src={receb01} alt="Elemento vindo da função ove0" onMouseOver={() => over1(over1)} />
                <img className="card-img-top card img-d" src={receb02} alt="Elemento vindo da função ove1" onMouseOver={() => over2(over2)} />
                <img className="card-img-top card img-d" src={receb03} alt="Elemento vindo da função ove2" onMouseOver={() => over3(over3)} />
              </div>
              <div className="r2">
                <h5 className="card-title m">{receb3}</h5>
                <p className="card-text m">{receb2}</p>
                <hr />
              </div>
              <div className="card-body card2">
                <img className={classes.img_desc} id="logo" src={receb1} alt="Elemento vindo da função da pasta public" />
                <div className="card3 col-sm-12">
                  <img className="img-d" src={receb1} alt="Elemento vindo da função ove0" onMouseOver={() => over0(over0)} />
                  <img className="img-d" src={receb01} alt="Elemento vindo da função ove0" onMouseOver={() => over1(over1)} />
                  <img className="img-d" src={receb02} alt="Elemento vindo da função ove1" onMouseOver={() => over2(over2)} />
                  <img className="img-d" src={receb03} alt="Elemento vindo da função ove2" onMouseOver={() => over3(over3)} />
                </div>
              </div>

            </div>
            <div className="card-body">
              <br /><br /><br /><br />
              <br /><br /><br /><br />
              <h5 className="card-title">Descrição</h5>
              <Typography className="card-text" dangerouslySetInnerHTML={{ __html: receb4 }} />
            </div>
          </div>
          <div className="card col-sm-4 card">
            <div className="card-body">
              <h5 className="card-title h2 r">{receb3}</h5>
              <p className="card-text h2 r">{receb2}</p>
              <div className="btn-block btn-text show">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                  <br /><br />
                  <div className="carousel-inner ">
                    <div className="carousel-item active">
                      <img className="d-block w-100 slid" src={receb01} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 slid" src={receb02} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 slid" src={receb03} alt="Third slide" />
                    </div>
                  </div>
                  <br /><br />
                  <br /><br />
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-danger btn-block">voltar</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default Descricao;

