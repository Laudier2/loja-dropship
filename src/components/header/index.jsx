import { useState } from "react";
import { useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";


// Components
import Cart from "../cart/index";

// Styles
import { Container, Logo, Buttons } from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const length = useSelector((state) => state.cart.cartItems.length)

  console.log({ r: length })

  const currentUser = ''

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    //dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    //dispatch(logoutUser());
  };

  return (
    <>
      <Container>
        <Logo >
          <a href="/">
            MUNDO MULHER
          </a>
        </Logo>
        <Buttons>
          {currentUser ? (
            <div onClick={handleLogoutClick}>Sair</div>
          ) : (
            <div onClick={handleLoginClick}>Login</div>
          )}

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
    </>
  );
}

export default Header;
