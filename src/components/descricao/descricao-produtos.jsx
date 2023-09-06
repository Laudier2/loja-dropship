import React from 'react';
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

//const img = JSON.parse(localStorage.getItem("imagem"))



const Descricao = () => {

  const img = localStorage.getItem("img0")

  console.log(img)

  return (
    <div>
      <div className="container mt-5">
        <div className="card-group card">
          <img src={img} alt="img" className="" />
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default Descricao;

