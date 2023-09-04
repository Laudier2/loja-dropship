import React from 'react'
import './nav.css'

const Nav = () => {

  return ( 
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark text-light navbar-red efeito col-sm-12">
        <a className="navbar-brand col-sm-6 ml-5" href="/">
          <h1 className="hlogo ml-5">GL-INFO</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
          
          <ul className="navbar-nav ml-5">
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
      </nav>
    </div>
   );
}
 
export default Nav;
