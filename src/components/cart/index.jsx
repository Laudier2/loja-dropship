// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
//import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart.cartItems)

  console.log(cart)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          <SlBasket /> Seu Carrinho
        </Styles.CartTitle>
        {cart.map((product) =>
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        )}
        <Link to="/cartFinali">
          {cart == "" ? <img style={{ marginLeft: "-105px", width: "700px" }} src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png" alt="" srcset="" /> :
            <button className="btn btn-primary btn-lg btn-block mt-5">Ver meu carrinho</button>
          }
        </Link>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
