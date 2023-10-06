import React from 'react'
import './nav.css'
import { FaOpencart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
  const length = useSelector(cartSlice => cartSlice.cart.cartItems.length)

  return (
    <div>
      <nav className="navbar opcy navbar-expand-lg navbar-dark text-light navbar-red col-sm-12">
        <a className="navbar-brand col-sm-6" href="/">
          <h1 className="hlogo ml-5">MUNDO MULHER</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contato
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Computador</a>
                <a className="dropdown-item" href="/">Celular</a>
                <a className="dropdown-item" href="/">Video e Áudio</a>
                <a className="dropdown-item" href="/">Acessorios</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Peças</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Minha conta
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Compras</a>
                <a className="dropdown-item" href="/">Quero Ajuda com uma compra</a>
                <a className="dropdown-item" href="/">Politica de uso</a>
                <a className="dropdown-item" href="/">Sujestão</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Dados Pessoais</a>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Computador</a>
                <a className="dropdown-item" href="/">Celular</a>
                <a className="dropdown-item" href="/">Video e Áudio</a>
                <a className="dropdown-item" href="/">Acessorios</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Peças</a>
              </div>
            </li>
            <div className="col-sm-12 navbar-red">

            </div>
          </ul>
        </div>
        <div>
          <Link to="/cart">
            <p className='possi'>{length}</p>
            <FaOpencart className="h2" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
