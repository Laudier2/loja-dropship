import { useState } from "react";
import { useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { AiFillAlert } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsJournalText } from "react-icons/bs";



// Components
import Cart from "../cart/index";

// Styles
import { Container, Logo, Buttons, ContainerAMR, ContainerPRT } from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const length = useSelector((state) => state.cart.cartItems.length)

  console.log({ r: length })

  //const currentUser = ''

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  /*const handleLoginClick = () => {
    //dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    //dispatch(logoutUser());
  };*/

  return (
    <>
    <ContainerAMR>
      <a href="/"><AiFillAlert className="mb-2 h4"/> BLACK FRIDAY - Bonés Baratos</a>
    </ContainerAMR>
      <Container>
        <Logo >
          <a href="/">
            Top dos Boné
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
            <li>
            <span>
                <AiOutlineNotification className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/">Pormocão</a>
            </li>
            <li> 
              <span>
                <AiOutlineWhatsApp className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/">Contato</a></li>
            <li>
              <span>
                <BsTruck className="text-white h5 m-1 mb-2 p"/>
              </span>
              <a href="/">Rastreio</a>
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
              <a href="/">Politica</a>
            </li>
          </ul>
        </ContainerPRT>
    </>
  );
}

export default Header;
