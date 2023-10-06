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
          <button className="btn btn-primary btn-lg btn-block mt-5">Finaliza Compra</button>
        </Link>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
