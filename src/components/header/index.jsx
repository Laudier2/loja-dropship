/* eslint-disable eqeqeq */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { AiFillAlert } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
//import { AiOutlineNotification } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";
import { LuPackageSearch } from "react-icons/lu";


import Cart from "../cart/index";

// Styles
import { Container, Logo, Buttons, ContainerAMR, ContainerPRT, DropDow } from "./styles";
import api from "../../api/api";

export function Header() {

  const [category, setCategory] = useState([])

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const length = useSelector((state) => state.cart.cartItems.length)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  useEffect(() => {
    (async() => {
      const req = await api.get("/category")
      const res = await req.data

      setCategory(res)
    })()
  },[])

  console.log(category)

  return (
    <>
    <ContainerAMR>
      <a href="/"><AiFillAlert className="mb-2 h4"/> BLACK FRIDAY - Bonés Baratos</a>
    </ContainerAMR>
      <Container>
        <Logo >
          <a href="/">
            StylesTop
          </a>
        </Logo>
        <Buttons>
          <div onClick={handleCartClick}>
            <b>{length}</b>
            {length > 0 ?
              <SlBasketLoaded style={{ fontSize: 30 }} />
              : <SlBasket style={{ fontSize: 30 }} />
            }
          </div>
        </Buttons>
        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </Container>
        <ContainerPRT>
          <ul>
            <DropDow>
              
                <li className="li">
                  <button>Categorias</button>
                  <ul>
                   {category.map(cate => (
                    <div key={cate.id}>
                      <li>
                        <a href="/">{cate.name}</a>
                      </li>
                    </div>
                   ))}
                  </ul>
                </li>
          
              </DropDow>
            <li> 
              <span>
                <AiOutlineWhatsApp className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="https://wa.me/5575998172448?text=Ol%C3%A1%20tudo%20bem%2C%20gostaria%20de%20saber%20mais%20sobre%20alguns%20produtos%20da%20Loja%3F" target="blank">
                Contato
              </a>
            </li>
            <li>
              <span>
                <BsTruck className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="https://rastreamento.correios.com.br/app/index.php" target="blank">Rastreio</a>
            </li>
            <li>
              <span>
                <AiFillAlert className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/">Novidade</a>
            </li>
            <li>
              <span>
                <BsJournalText className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/politica" target="blank">Politica</a>
            </li>
            <li>
              <span>
                <LuPackageSearch className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/politica" target="blank">Meus pedido</a>
            </li>
          </ul>
        </ContainerPRT>
    </>
  );
}

