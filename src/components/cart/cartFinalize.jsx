import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, ButtonClearCart, SubTotal, TableCartFinalize } from "./styles"
import { useHistory, Link } from "react-router-dom"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize} from "react-icons/fa";
import { addCart, decrementCart, removeFromCart, cauculateTotal, clearCart } from '../../redux/cart/cart';
import axios from 'axios';


export default function CartFinalize() {

    const hitory = useHistory()

    const cart = useSelector(state => state.cart.cartItems)
    const items = useSelector(state => state.cart.cartItems.length)
    const cart2 = useSelector(state => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cauculateTotal())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const handleRemoveClick = (id) => {
        dispatch(removeFromCart(id))
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

    const res = cart.map(r => r.cartQuantity)

    //console.log(cart)
    
    let prod = [
        {
            title: res > 0 ? cart[0].name : "",
            price: cart2.cartTotalAmount,
            image: res > 0 ? cart[0].image[0] : "",
            category: "placas",
            description: res > 0 ? cart[0].description : "",
        },
    ]
    console.log(...prod)

    return (
        <>
            {cart == "" ? hitory.push("/") :
                <div>
                    <TableCartFinalize>
                        <table>
                            <thead>
                            <tr className='m-auto h3'>Você tem {items} produtos em seu carrimho</tr>
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
                            {cart2.cartTotalAmount === 0 
                            ? <img style={{ margin: "auto", width: "1000px", height: "50vh" }} src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png" alt="iage" />
                            :  <div>
                                <ButtonClearCart onClick={() => handleClearCart()}>Clear Cart</ButtonClearCart> 
                                <SubTotal>Total: R$ {cart2.cartTotalAmount}</SubTotal>
                                </div> }
                        </table>
                    </TableCartFinalize>
                   {cart2.cartTotalAmount === 0 
                   ? <Button>
                        <Link to="/">Volta para pagina inicial</Link>
                   </Button>
                   : <Button onClick={async () => {
                        await axios.post("http://localhost:3333/payment", ...prod)
                        .then((res) => (window.location.href = res.data.response.body.init_point))
                    }}>Escolher a forma de pagamento</Button>}
                </div>
            }
        </>
    )
}
