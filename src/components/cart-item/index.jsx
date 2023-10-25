import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decrementCart, addCart } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  const length = useSelector((state) => state.cart.length)

  const handleRemoveClick = (id) => {
    dispatch(removeFromCart(id))
    console.log(id)
  };

  const handleIncreaseClick = (dataProduct) => {
    dispatch(addCart(dataProduct))
  };

  const handleDecreaseClick = (dataProduct) => {
    dispatch(decrementCart(dataProduct))
    console.log(product)
  };


  return (
    <div>
      <CartItemContainer>
        <CartItemImage imageUrl={product.image} />

        <CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price * product.cartQuantity}</p>

          <CartItemQuantity>
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
          </CartItemQuantity>
        </CartItemInfo>

        <RemoveButton
          onClick={() => handleRemoveClick(product)}
          aria-label={`Remove`}
        >
          <AiOutlineClose size={25} />
        </RemoveButton>
      </CartItemContainer>
    </div>
  );
};

export default CartItem;
