import React, { useState, useEffect } from 'react';
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
//import { Context } from '../../Context/Provaider';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../custom-button';
import { BsCartPlus } from "react-icons/bs";
import { addCart } from '../../redux/cart/cart';

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

const Consumo = () => {

  //const { setData } = useContext(Context)

  const chec = useSelector(productSlace => productSlace.products.items)

  const [busca, setBusca] = useState('')
  const [chec2, setChec] = useState([])

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

    localStorage.removeItem("id")
    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)

    const amount = JSON.parse(dados)
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

    localStorage.setItem("color0", color.color[0])
    localStorage.setItem("color1", color.color[1])
    localStorage.setItem("color2", color.color[2])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("amount", amount.amount)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    //console.log(dados)*/
  }

  console.log(chec)

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }

  return (
    <div>
      {/*<Slids />
      <form className="form-inline my-2 my-lg-0 container">
        <input
          className="form-control mr-sm-2 col-12"
          onChange={handleChanher}
          type="search"
          placeholder="Pesquisa"
          aria-label="Search"
        />
        <br />
  </form>*/}
      <div className="mt-5 conatiner">
        <div className="container col-sm-9 mr">
          {chec === "" ? <ReactLoading className='container col-sma-2' type='bars' color='#0000FF' /> : chec.map(res => (
            <div className="div-lado">
              <div key={res.id}>
                <div className="box1 mt-5">
                  <div className="box1 card">
                    {console.log(res.name)}
                    <CardMedia
                      image={res.image}
                      title="Profile Image"
                      className={classes.img}
                      component='img'
                    />
                    <CardActions disableSpacing>
                      {/*<IconButton aria-label="add to favorites" className={classes.icones_marg}>
                        {<FavoriteIcon className={classes.icones} />}
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon className={classes.icones} />
                      </IconButton>*/}
                    </CardActions>
                    <h5 className={classes.title}>{res.name}</h5>
                    <small className={classes.title_price}>R$ {res.price}</small>

                    {/*<a href="https://checkout.chec.io/UMqoMb"data-chec-product-id="UMqoMb" className="btn btn-primary btn-block">Descrição</a>*/}
                    <Link to="/desc" onClick={() => handlePost(res) | LocalSto(res)} >{/*target="_blank"*/}
                      <button className="btn btn-primary btn-block">Descrição</button>
                    </Link>
                    <CustomButton startIcon={<BsCartPlus />} onClick={() => handlerCartAdd(res)} >
                      Add Cart
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/*<Footer />*/}
    </div >
  );
}

export default Consumo;
