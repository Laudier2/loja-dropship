import React, { useEffect, useState } from 'react';
import FormularioCadastro from '../formulario/FormularioCadastro';
//import './cadastro.css';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import { toast } from 'react-toastify';
import api from '../../api/api';
//import { ContainerBG } from "./styled"

export default function Cadastro() {

  //const URL = "https://api-store-v4bm.onrender.com/user"

  const [users, setUser] = useState([])

  useEffect(() => {
    (async() => {
      const req = await api.get("/product")
      const res = await req.data

      setUser(res)
    })()
  },[])

  console.log(users)

  /**
   * Esse hook useState esta recebendo o valor do evento onClick e assim
   * passo como parâmetro para o componente FormularioCadastro para que assim
   * possamos preencher os campos imput e atualizá-lo com identificação via id
   *
   */
  const [idAtual, setIdAtual] = useState('');
  const [pega, setPega] = useState('');

  /**
   * Essa função é responsável por apaga um usuario via id,
   * que esta vindo via evento do onClick
   */
  const Apagausuario = (id) => {

    console.log(id)

    api //Esse process.env.REACT_APP_API_URL é uma variave de ambiente que contem a url da api
      .delete("/product/" + id)
      .then((res) => {
        toast.success('O usuário foi deletado com sucesso');
        
      })
      .catch((erro) => {
        toast.error(
          'Houve um erro ao tenta apaga esse usuário, erro relacionado a ' +
          erro
        );
      });
  };

  return (
    <div className='bg-dark'>
      <br />
      <h1 style={{textAlign: "center", fontWeight: "bold", color: "white"}}>Painel de controle para gerenciamento de produtos</h1>
      <br />
      <hr className='h1 bg-white'/>
      <br />
      <br />
      <br />
      <div className="row">
        
        <div className="col-md-6 ">
          <h2 style={{textAlign: "center", fontWeight: "bold", color: "white"}}>Lista de produtos na database</h2>
          <table class="table">
            <thead>
              <tr className="text-white">
                <th scope="col">
                  <i className="fas fa-coins" />
                </th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>

            {users.map((r) => (
              <tbody key={r.id}>
                <tr className="btn-outline-secondary text-white">
                  <th scope="row">
                    <button
                      type="button"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setPega(r);
                      }}
                    >
                     <img src={r.image[0]} alt="img" className="col-5" />
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title titolo2"
                              id="exampleModalLabel"
                            >
                              Dados do Usuário
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-secondary"
                            ></button>
                          </div>
                          <div class="modal-body text-dark">
                            <Modal dados={pega} />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-block "
                              data-bs-dismiss="modal"
                            >
                              Fecha
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td style={{color: "white", fontSize: "0.7vw"}}>
                    {r.name}
                  </td>
                  <td>R$ {r.price},00</td>
                  <td>
                    <p onClick={() => { setIdAtual(r.id)}} className="mr-2">
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </p>
                    <p onClick={() => Apagausuario(r.id)}>
                      <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="col-md-5" style={{textAlign: "center", fontWeight: "bold", color: "white"}}>
          <FormularioCadastro {...{ idAtual, users }} />
        </div>
      </div>
    </div>
  );
}
