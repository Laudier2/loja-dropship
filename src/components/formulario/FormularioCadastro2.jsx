import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { toast } from 'react-toastify';

export default function FormularioCadastro(props) {
  //console.log(props.idAtual)

  /**
   * Essa variável é quem determina os valores iniciais dos input citado no values do useState
   */
 const camposIniciasDeValores = {
    name: "",
    image: "",
    size: "",
    cor:"",
    price: "",
    quantity: "",
    slug: "",
    description: "",
  };
 
 const [values, setValues] = useState(camposIniciasDeValores);
 const history = useNavigate();
 
 console.log(values)

  const URL = "https://api-store-v4bm.onrender.com/product"


  /**
   * Aqui estamos utilizando o onChange para verifica tudo que esta sendo digitado
   * nos inputes via name, e passando todo esses valores para a variável do nosso useState
   * O values e assim podemos criar na nossa base de dados via axios como vamos ver abaixo.
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };
  /**
   * Aqui estamos fazendo uma espesse de filtragem do produto via id via props,
   * lembra da variável que eivamos para o formulário via props a idAtual, então é ela que
   * estamos usando, porque ela traz o id de um produto
   */
 useEffect(() => {
    if (props.idAtual) {
      api
        .get(`/productcategoryid/${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);

  //console.log(values)
  /**
   * E aqui que fazemos a criação e editação do produto o onSubmit.
   */
  function onSubmit(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão faça a,
     * ação natural dele que é da refresh, e ai podemos determinar para
     * onde a pagina seja redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    console.log(values)

    /**
     * Agora estamos criando uma variável method com uma condição.
     * Se a requisição for put, vai ser executada put, se não execute post
     */
    const method = props.idAtual ? 'put' : 'post';
    const url = props.idAtual
      ? `${URL}${props.idAtual}`
      : `${URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    api[method](url, values)
      .then(() => {
        if (props.idAtual === '') {
          toast.success('O produto foi Criado com sucesso');
        } else {
          toast.success('O produto foi Atualizado com sucesso');

        }
        //Correção de eero
        /*history('/cadastro');
        setTimeout(() => {
          window.location.reload()
        }, 2000)*/
      })
      .catch((err) => {
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        /*history('/cadastro');
        setTimeout(() => {
          window.location.reload()
        }, 6250)*/

      });
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{position: "fixed", width: "45%", marginTop: "-80px"}}>
      <h3 className="titolo mx-auto">Crie ou Atualize user</h3>
        <div className="form-group input-group">
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[0]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="image"
            value={values.image[0]}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[1]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image[1]}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[2]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image[2]}
            onChange={onChange}
          />
          
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[3]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image[3]}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[4]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image[4]}
            onChange={onChange}
        />   
         <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image[5]} alt="img" style={{width: "100", height: "10vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image[5]}
            onChange={onChange}
        />    
        </div>
        </div>
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text  col-5">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Nome</span>
          </div>
          </div>
          <input
            type="text"
            className="form-control col-5"
            placeholder="Nome do produto"
            name="name"
            value={values.name}
            onChange={onChange}
            />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text  col-5">
              <span style={{fontSize: "20px", textAlign: "center", fontWeight: "bold"}}>Preçe</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control  col-5"
            placeholder="Valor do produto"
            name="price"
            value={values.price}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Slug</span>
          </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Slug do produto"
              name="slug"
              value={values.slug}
              onChange={onChange}
            /><div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Quantidade</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Quantidade disponivel"
            name="quntity"
            value={values.quantity}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Medidas</span>
          </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Tamnho ou medidas do produto"
            name="desc"
            value={values.size}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Descrição</span>
          </div>
          </div>
          <textarea
            type="text"
            className="form-control"
            placeholder="Nome do produto"
            name="desc"
            value={values.description}
            onChange={onChange}
          />
        
        <input
          type="submit"
          value={props.idAtual === '' ? 'Salvar' : 'Atualizar'}
          className="btn btn-primary btn-block mb-5"
        />
      </form>
    </>
  );
}
