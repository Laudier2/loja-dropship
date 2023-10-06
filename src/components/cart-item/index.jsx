import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
//import { removeItem, addItem } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  const length = useSelector((state) => state.cart.length)

  const handleRemoveClick = (id) => {
    //dispatch(removeItem(id))
    console.log(id)
  };

  const handleIncreaseClick = (id) => {
    //dispatch(addItem({ ...product, quantity: product.quantity + 1 }))
  };

  const handleDecreaseClick = () => {
    //dispatch(addItem({ ...product, quantity: product.quantity - 1 }))
  };

  console.log(product.id)

  return (
    <div>
      <Styles.CartItemContainer>
        <Styles.CartItemImage imageUrl={product.image} />

        <Styles.CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>

          <Styles.CartItemQuantity>
            <AiOutlineMinus
              size={20}
              onClick={handleDecreaseClick}
              aria-label={`Decrease quantity of ${product.name}`}
            />
            <b>{length}</b>
            <p>{product.cartQuantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={handleIncreaseClick}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </Styles.CartItemQuantity>
        </Styles.CartItemInfo>

        <Styles.RemoveButton
          onClick={() => handleRemoveClick(product.product.id)}
          aria-label={`Remove`}
        >
          <AiOutlineClose size={25} />
        </Styles.RemoveButton>
      </Styles.CartItemContainer>
    </div>
  );
};

export default CartItem;
