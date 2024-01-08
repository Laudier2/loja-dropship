import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { toast } from 'react-toastify';
import { FormularioCreateUpdate, FormularioCreateUpdate2 } from './styled';
import { Promocao } from '../Cadastro/styled';

export default function FormularioCadastro(props) {
  //console.log(props.idAtual)

  /**
   * Essa variável é quem determina os valores iniciais dos input citado no values do useState
   */
 const camposIniciasDeValores = {
    id: "",
    name: "",
    image: "",
    size: "",
    color:"",
    price: "",
    quantity: "",
    slug: "",
    bar_code: "",
    description: "",
  };

  const camposIniciasDeValoresPromo = {
    name: "",
    image: "",
    size: "",
    color:"",
    price: "",
    quantity: "",
    slug: "",
    description: "",
  };
 
 const [values, setValues] = useState(camposIniciasDeValores);
 const [pro, setPro] = useState(camposIniciasDeValoresPromo);
 //const history = useNavigate();
 
 console.log(props.product)

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

  const onChange2 = (ev) => {
    const { name, value } = ev.target;

    setPro({ ...values, [name]: value });
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
      ? `${URL}${props.idAtua0}`
      : `${URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    api[method](url, values)
      .then(() => {
        if (props.idAtual === '') {
          ///toast.success('O produto foi Criado com sucesso');
          alert('O produto foi Criado com sucesso');
        } else {
          //toast.success('O produto foi Atualizado com sucesso');
          alert('O produto foi Atualizado com sucesso');

        }
        //Correção de eero
        /*history('/cadastro');*/
        setTimeout(() => {
          //window.location.reload()
        }, 1000)
      })
      .catch((err) => {
        alert('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        /*history('/cadastro');*/
        setTimeout(() => {
          ///window.location.reload()
        }, 1000)

      });
  }

  function onSubmitPromo(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão faça a,
     * ação natural dele que é da refresh, e ai podemos determinar para
     * onde a pagina seja redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    console.log(ev)

    /**
     * Agora estamos criando uma variável method com uma condição.
     * Se a requisição for put, vai ser executada put, se não execute post
     */
    const method = props.idAtual ? 'put' : 'post';
    const url = props.idAtual
      ? `${URL}${props.idAtua0}`
      : `${URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    api[method](url, props.product)
      .then(() => {
        if (props.idAtual === '') {
          toast.success('O produto foi Criado com sucesso');
        } else {
          toast.success('O produto foi Atualizado com sucesso');

        }
       
      })
      .catch((err) => {
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        
      });
  }

  //const imagem = [values.image]
  console.log(values.image)

  return (
    <>
    <FormularioCreateUpdate>
      <form onSubmit={onSubmit}>
        <h3>Crie ou Atualize user</h3>
        
            <div>
              {values.image ?
                <img src={values.image[0]} alt="img"/>  
            : ""
              },
              {values.image ?
                <img src={values.image[1]} alt="img"/>  
            : ""
              },
              {values.image ?
                <img src={values.image[2]} alt="img"/>  
            : ""
              },
              {values.image ?
                <img src={values.image[3]} alt="img"/>  
            : ""
              },
              {values.image ?
                <img src={values.image[4]} alt="img"/>  
            : ""
              }
            </div>
            
            <input
              type="text"
              className="input"            
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[0] ? values.image[0] : ""}
              onChange={onChange}
            />
            
            <input
              type="text"
              className="input"            
              placeholder="URL da Imagem do produto"
              value={values.image[1]}
              onChange={onChange}
            />
            
            <input
              type="text"
              className="input"           
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[2]}
              onChange={onChange}
            />
            <input
              type="text"
              className="input"
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[3]}
              onChange={onChange}
            />
            
            <input
              type="text"
              className="input"
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[4]}
              onChange={onChange}
          />   
          <input
              type="text"
              className="input"
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[5]}
              onChange={onChange}
          />    
            
        
          <input
            type="text"            
            placeholder="Nome do produto"
            name="name"
            value={values.name}
            onChange={onChange}
            />
         
          <input
            type="text"
            placeholder="Valor do produto"
            name="price"
            value={values.price}
            onChange={onChange}
          />
         
          <input
            type="text"              
            placeholder="Slug do produto"
            name="slug"
            value={values.slug}
            onChange={onChange}
          />
            <input
            type="text"              
            placeholder="bar_code do produto"
            name="bar_code"
            value={values.bar_code}
            onChange={onChange}
          />
          <input
            type="text"            
            placeholder="Quantidade disponivel"
            name="quntity"
            value={values.quantity}
            onChange={onChange}
          />
          
          <input
            type="text"            
            placeholder="Tamnho ou medidas do produto"
            name="desc"
            value={values.size}
            onChange={onChange}
          />

          <input
            type="text"            
            placeholder="Cores do produto"
            name="desc"
            value={values.color}
            onChange={onChange}
          />
         
          <textarea
            type="text"            
            placeholder="Nome do produto"
            name="desc"
            value={values.description}
            onChange={onChange}
          />
        
        <input
          type="submit"
          value={props.idAtual === '' ? 'Salvar' : 'Atualizar'}
        />
      </form>
    </FormularioCreateUpdate>
     <FormularioCreateUpdate2>
     <form onSubmit={onSubmitPromo}>
       <h3>Crie ou Atualize Promoçoes</h3>
       
           <div>
           {Promocao.image ?
                <img src={values.image[0]} alt="img"/>  
            : ""
              },
              {pro.image ?
                <img src={values.image[1]} alt="img"/>  
            : ""
              },
              {pro.image ?
                <img src={values.image[2]} alt="img"/>  
            : ""
              },
              {pro.image ?
                <img src={values.image[3]} alt="img"/>  
            : ""
              },
              {pro.image ?
                <img src={values.image[4]} alt="img"/>  
            : ""
              }
           </div>
           <input
              type="text"
              className="input"            
              placeholder="URL da Imagem do produto"
              name="image"
              value={pro.image[0]}
              onChange={onChange2}
            />
            
            <input
              type="text"
              className="input"            
              placeholder="URL da Imagem do produto"
              name="image"
              value={pro.image[1]}
              onChange={onChange2}
            />
            
            <input
              type="text"
              className="input"           
              placeholder="URL da Imagem do produto"
              name="image"
              value={pro.image[2]}
              onChange={onChange2}
            />
            <input
              type="text"
              className="input"
              placeholder="URL da Imagem do produto"
              name="image"
              value={values.image[3]}
              onChange={onChange2}
            />
            
            <input
              type="text"
              className="input"
              placeholder="URL da Imagem do produto"
              name="image"
              value={pro.image[4]}
              onChange={onChange2}
          />   
       <input
       className='btninput'
         type="submit"
         value={props.idAtual === '' ? 'Salvar' : 'Atualizar'}
       />
     </form>
   </FormularioCreateUpdate2>
   </>
  );
}
