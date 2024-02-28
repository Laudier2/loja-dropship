import React from 'react';
import './modal.css';

const Modal = ({ dados }) => {

  //console.log(dados);

  return (
    <>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li>
            <img src={dados.imagem} alt="img" className="col-md-12" />
          </li>
          <li>
            {' '}
            <strong className="text-primary">ID:</strong> {}
          </li>
          <li>
            <strong className="text-primary">Nome:</strong> {}
          </li>
          <li>
            <strong className="text-primary">E-mail</strong> {}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Phone:</strong> {}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Password:</strong> {}
          </li>

        </ul>
      </div>
    </>
  );
};

export default Modal;
