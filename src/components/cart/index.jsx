// Styles
import { useSelector } from "react-redux";
import { CartContainer, CartEscapeArea, CartContent, CartTitle } from "./styles";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart.cartItems)

  console.log(cart)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>
          <SlBasket className="col-sm-2" /> Seu Carrinho
        </CartTitle>
        {cart.map((product) =>
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        )}
        <a href="/cartFinali">
          {cart == "" ? <img style={{ marginLeft: "-105px", width: "700px" }} src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png" alt="" srcset="" /> :
            <button className="btn btn-primary btn-lg btn-block mt-5">Ver meu carrinho</button>
          }
        </a>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
