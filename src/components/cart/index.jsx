/* eslint-disable eqeqeq */
// Styles
import { useSelector } from "react-redux";
import { CartContainer, CartEscapeArea, CartContent, CartTitle, CartIcon, ButtonCard } from "./styles";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";
//import { Link } from "react-router-dom";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart.cartItems)

  if(cart == ""){
    localStorage.removeItem("tmMedidas")
    localStorage.removeItem("tmCores")
  }

  //console.log(cart)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>
          <a href="/cartFinali">
            <CartIcon>
              <SlBasket style={{color: 'aqua', marginBottom: 7}} /> Seu Carrinho
            </CartIcon>
          </a>
          <hr />
        </CartTitle>
        {cart.map((product) =>
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        )}
        <a href="/">
          {cart == "" ? <img style={{ marginLeft: "-5px", width: "300px" }} src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png" alt="img"/> :
            <ButtonCard>
              Ver meu carrinho
            </ButtonCard>
          }
        </a>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
