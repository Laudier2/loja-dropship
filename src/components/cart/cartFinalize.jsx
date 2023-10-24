import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, ButtonClearCart, SubTotal, TableCartFinalize, cartQuantity } from "./styles"
import { useHistory } from "react-router-dom"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize} from "react-icons/fa";
import { addCart, decrementCart, removeFromCart, cauculateTotal, clearCart } from '../../redux/cart/cart';
import axios from 'axios';


export default function CartFinalize() {

    const hitory = useHistory()

    const cart = useSelector(state => state.cart.cartItems)
    const cart2 = useSelector(state => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cauculateTotal())
    },[cart])
    
    const handleRemoveClick = (id) => {
        dispatch(removeFromCart(id))
        console.log(id)
    };

    const handleIncreaseClick = (e) => {
        dispatch(addCart(e))
    };

    const handleDecreaseClick = (e) => {
        dispatch(decrementCart(e))
    };

    const handleClearCart = () => {
        dispatch(clearCart())
    };

    console.log(cart2.cartTotalAmount)

    return (
        <>
            {cart == "" ? hitory.push("/") :
                <div>
                    <TableCartFinalize>
                        <table>
                            <thead>
                                <tr>Carrinho de compra finalize</tr>
                            </thead>
                            <hr />
                            <tbody>
                                {cart.map((res) => (
                                    <tr>
                                        <div>
                                            <td>
                                                <img src={res.image} alt="img" />
                                            </td>
                                            <td>
                                                {res.name}
                                            </td>
                                            <td>
                                                <button onClick={() => handleIncreaseClick(res)}>
                                                    <FaPlus/>
                                                </button>
                                                    (<b>Unidade</b>
                                                    {res.cartQuantity})
                                                <button onClick={() => handleDecreaseClick(res)}>
                                                    <FaWindowMinimize className='mb-2' />
                                                </button>
                                                
                                            </td>
                                            <td>
                                                <b>Preco</b>
                                                ${res.price * res.cartQuantity}
                                                <button className='btn btn-outline-secondary ml-2' onClick={() => handleRemoveClick(res)}> Excluir 
                                                    <RiDeleteBin2Fill className='ml-2 text-danger h5' />
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                            <ButtonClearCart onClick={() => handleClearCart()}>Clear Cart</ButtonClearCart>
                            <SubTotal>Total: R$ {cart2.cartTotalAmount}</SubTotal>
                        </table>
                    </TableCartFinalize>
                    <Button onClick={() => {
                        axios.post("http://localhost:3333/payment", cart)
                        .then((res) => 
                            (window.location.href = res.data.response.body.init_point))
                    }}>Escolher a forma de pagamento</Button>
                </div>
            }
        </>
    )
}
