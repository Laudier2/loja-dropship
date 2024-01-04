import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { toast } from 'react-toastify';

export default function FormularioCadastro(props) {

  const [img1] = useState('')
  /*const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')

  const [size1, setSize1] = useState('')
  const [size2, setSize2] = useState('')
  const [size3, setSize3] = useState('')
  const [size4, setSize4] = useState('')
  const [size5, setSize5] = useState('')

  const [cor1, setCor1] = useState('')
  const [cor2, setCor2] = useState('')
  const [cor3, setCor3] = useState('')
  const [cor4, setCor4] = useState('')
  const [cor5, setCor5] = useState('')

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [desc, setDesc] = useState('')
  const [slug, setSlug] = useState('')



  /**
   * Essa variável é quem determina os valores iniciais dos input citado no values do useState
   */
 /*const camposIniciasDeValores = {
    name: name,
    image: [`${img1}`,`${img2}`,`${img3}`,`${img4}`,`${img5}`],
    size: [`${size1}`,`${size2}`,`${size3}`,`${size4}`,`${size5}`],
    cor: [`${cor1}`,`${cor2}`,`${cor3}`,`${cor4}`,`${cor5}`],
    price: price,
    quantity: quantity,
    slug: slug,
    description: desc
  };*/

  const camposIniciasDeValores = {
    name: "",
    image: [],
    size: [],
    cor: [],
    price: "",
    quantity: "",
    slug: "",
    description: ""
  };

  console.log(img1)

  //const camposIniciasDeValores = {}

  const [values, setValues] = useState(camposIniciasDeValores);
  const history = useNavigate();

  const URL = "https://api-store-v4bm.onrender.com//user/"


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
        .get(`/user/${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);
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
        history('/cadastro');
        setTimeout(() => {
          window.location.reload()
        }, 6250)
      })
      .catch((err) => {
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        history('/cadastro');
        setTimeout(() => {
          window.location.reload()
        }, 6250)

      });
  }

  return (
    <>
      <h2 className="titolo mx-auto">Crie ou Atualize user</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group input-group">
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.image} alt="img" style={{width: "100", height: "2.5vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.ima2} alt="img" style={{width: "100", height: "2.5vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.imagem} alt="img" style={{width: "100", height: "2.5vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />
          
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.imagem} alt="img" style={{width: "100", height: "2.5vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <img src={values.imagem} alt="img" style={{width: "100", height: "2.5vh"}} />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="URL da Imagem do produto"
            name="imagem"
            value={values.image}
            onChange={onChange}
          />          
        </div>
        </div>
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Nome</span>
          </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Nome do produto"
            name="name"
            value={values.name}
            onChange={onChange}
            />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <span style={{fontSize: "20px", textAlign: "center", fontWeight: "bold"}}>Preçe</span>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Valor do produto"
            name="name"
            value={values.size}
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
              name="name"
              value={values.cor}
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
            name="name"
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
            name="name"
            value={values.description}
            onChange={onChange}
          />
          <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <span style={{fontSize: "20px", textAling: "center",  fontWeight: "bold"}}>Nome</span>
          </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Nome do produto"
            name="name"
            value={values.slug}
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
