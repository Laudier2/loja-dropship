/* eslint-disable eqeqeq */
import { useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useQuery } from "react-query";


// Styles
import { Logo, ContainerAMR} from "./styles";
import { SeartResult } from "./SeartResult";
import api from "../../api/api";

export function Meuproduto() {

  const [ dados, setDados ] = useState([])
  const [ products, setProducts ] = useState([])

  // eslint-disable-next-line no-unused-vars
  const { isLoading, data } = useQuery("meuproduto", async () => {
    return await api
    .get("/compra")
    .then((res) => setProducts(res.data))

    // eslint-disable-next-line no-unreachable
    if(isLoading){
      return <div className="load">Carregando...</div>
    }

  });

  console.log(products)

  const handleSearch = (e) => {
    e.preventDefault();

    const value = e.target.value

    setDados(value.toLowerCase()) //Todas as letras minusculas
   
  }

  //Filtro de pesquisa do input
  const filterData = products.filter((e) => e.code_compra == dados )

  console.log(dados)

  return (
    <>
      <ContainerAMR>
          <img src="logosimples.png" alt="img" className="img" />
         <Logo >
          <a href="/">
            StylesTop
          </a>
        </Logo>
        <a href="/"><AiFillAlert className="mb-2 h4"/> ENCONTRE SEU PEDIDO AQUI - StylesTop</a>
      </ContainerAMR>
      <ContainerAMR>
        <p>Cole aqui o cóigo da compra</p>
        <FaLongArrowAltDown className="flecha"/>
       <form onChange={(e) => handleSearch(e)}>
        <input type="search" name="test" id="test" placeholder="Código da compra"/>
        {/*<HiMiniMagnifyingGlass className="lupaMarge" />*/}
       </form>
       {!filterData ? ""
          : 
          <SeartResult data={filterData} />  
        }
      </ContainerAMR>
    </>
  );
}

