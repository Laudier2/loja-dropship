import React, { useState, useEffect, useContext } from 'react';
import Slids from '../slids/slids'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { CardActions, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
//import { commerce } from '../../lib/commerce';
import './chec.css'
import api from '../../api/api';
import { AppContext } from '../../Context/Provaider';

const useStyles = makeStyles(() => ({
  icones: {
    width: 16,
  },
  icones_marg: {
    marginRight: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: '17ch',
    overflow: 'hidden',
    textText: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title_price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
    width: 125,
    height: 150,
    margin: 'auto',
  },
  texto: {
    maxWidth: '15ch',
    overflow: 'hidden',
    textText: 'ellipsis',
    whiteSpace: 'nowrap',
  }
}))

/*const chenger = (e) => {
  localStorage.setItem('name', JSON.stringify(e.name))
  localStorage.setItem('price', JSON.stringify(e.price.formatted_with_symbol))
  localStorage.setItem('imagem', JSON.stringify(e.assets[0].url))
  localStorage.setItem('imagem1', JSON.stringify(e.assets[1].url))
  localStorage.setItem('imagem2', JSON.stringify(e.assets[2].url))
  localStorage.setItem('imagem3', JSON.stringify(e.assets[3].url))
  localStorage.setItem('descricao', JSON.stringify(e.description))
}*/

const Consumo = () => {

  const { data, setData } = useContext(AppContext)

  const [busca, setBusca] = useState('')
  const [chec, setChec] = useState([])
  //const [ts, setTs] = useState([])

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

  const classes = useStyles();


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

    const dados = JSON.stringify(e)
    const img = JSON.parse(dados)
    const name = JSON.parse(dados)
    const desc = JSON.parse(dados)
    const price = JSON.parse(dados)

    localStorage.setItem("img0", img.image[0])
    localStorage.setItem("img1", img.image[1])
    localStorage.setItem("img2", img.image[2])
    localStorage.setItem("img3", img.image[3])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)

    console.log(dados)
  }

  //console.log(data)

  return (
    <div>
      <Slids />
      <form className="form-inline my-2 my-lg-0 container">
        <input
          className="form-control mr-sm-2 col-12"
          onChange={handleChanher}
          type="search"
          placeholder="Pesquisa"
          aria-label="Search"
        />
      </form>
      <div classNameName="mt-5 conatiner">
        <div className="container col-sm-9 mr">
          {chec.map(res => (
            <div className="div-lado">
              <div key={res.id}>
                <div className="box1 mt-4">
                  <div className="box1 card">
                    <CardMedia
                      image={res.image[0]}
                      title="Profile Image"
                      className={classes.img}
                      component='img'
                    />
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" className={classes.icones_marg}>
                        <FavoriteIcon className={classes.icones} onClick={() => handlePost(res.id)} />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon className={classes.icones} />
                      </IconButton>
                    </CardActions>
                    <h5 className={classes.title}>{res.name}</h5>
                    <small className={classes.title_price}>R$ {res.price}</small>

                    {/*<a href="https://checkout.chec.io/UMqoMb"data-chec-product-id="UMqoMb" className="btn btn-primary btn-block">Descrição</a>*/}
                    <Link to="/desc" onClick={() => setData(res) | LocalSto(res)} >{/*target="_blank"*/}
                      <button className="btn btn-primary btn-block">Descrição</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
}

export default Consumo;
