import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decrementCart } from "../../redux/cart/cart";
//import { removeItem, addItem } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  const length = useSelector((state) => state.cart.length)

  const handleRemoveClick = (id) => {
    dispatch(removeFromCart(id))
    console.log(id)
  };

  const handleIncreaseClick = (dataProduct) => {
    dispatch(decrementCart(dataProduct))
  };

  const handleDecreaseClick = (dataProduct) => {
    dispatch(decrementCart(dataProduct))
    console.log(product)
  };


  return (
    <div>
      <Styles.CartItemContainer>
        <Styles.CartItemImage imageUrl={product.image} />

        <Styles.CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price * product.cartQuantity}</p>

          <Styles.CartItemQuantity>
            <AiOutlineMinus
              size={20}
              onClick={() => handleDecreaseClick(product)}
              aria-label={`Decrease quantity of ${product.name}`}
            />
            <b>{length}</b>
            <p>{product.cartQuantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={() => handleIncreaseClick(product)}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </Styles.CartItemQuantity>
        </Styles.CartItemInfo>

        <Styles.RemoveButton
          onClick={() => handleRemoveClick(product)}
          aria-label={`Remove`}
        >
          <AiOutlineClose size={25} />
        </Styles.RemoveButton>
      </Styles.CartItemContainer>
    </div>
  );
};

export default CartItem;
