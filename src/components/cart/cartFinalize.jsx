import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, CartVazio, SubTotal, TableCartFinalize } from "./styles"
import { Link } from "react-router-dom"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize} from "react-icons/fa";
import { addCart, decrementCart, removeFromCart, cauculateTotal} from '../../redux/cart/cart';
import api from "../../api/api"


export default function CartFinalize() {

    //const navigate = useNavigate()

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
        window.location.reload()
    };

    const handleDecreaseClick = (e) => {
        //console.log({e: e})
        dispatch(decrementCart(e))
        window.location.reload()
    };

    /*const handleClearCart = () => {
        dispatch(clearCart())
    };*/

    const res = cart.map(r => r.cartQuantity)
    
    let prod = [
        {
            title: res > 0 ? cart[0].name : "",
            price: cart2.cartTotalAmount,
            image: res > 0 ? cart[0].image[0] : "",
            category: "placas",
            description: res > 0 ? cart[0].description : "",
        },
    ]

    const carrinhoVazio = () => {
        return (
            <CartVazio>
                <img src="https://www.roboticaeducacional.art.br/images/cart-vazio.jpg" alt="img" />
            </CartVazio>
        )
    }

    /*let prod2 = [
        {
            title: "Fone",
            price: 25,
            image: "https://m.media-amazon.com/images/I/41qM+itS5SL._AC_SY300_SX300_.jpg",
            category: "placas",
            description: "Isso é um teste",
        },
    ]*/
    //console.log(cart[0].price)

    return (
        <>
            {items === 0 ? carrinhoVazio() :
                <div>
                    <TableCartFinalize>
                        <table>
                            <thead>
                            <tr className='m-auto h3'>
                                <h2>Seu carrimho</h2>
                            </tr>
                            </thead>
                            <hr />
                            <tbody>
                                {cart.map((res) => (
                                    <tr>
                                        <div>
                                            <td>
                                                <img src={res.image[0]} alt="img" />
                                            </td>
                                            <td>
                                                {res.name}
                                            </td>
                                            <td>
                                                <button onClick={() => handleIncreaseClick(res)}>
                                                    <FaPlus/>
                                                </button>
                                                    <b><p>Quantidade {res.cartQuantity}</p></b>
                                                <button onClick={() => handleDecreaseClick(res)}>
                                                    <FaWindowMinimize className='mb-2' />
                                                </button>
                                                
                                            </td>
                                            <td>
                                                <strong>Preco R${res.price * res.cartQuantity},00</strong>
                                                
                                                <button className='btn btn-outline-secondary ml-2' onClick={() => handleRemoveClick(res)}> Excluir 
                                                    <RiDeleteBin2Fill className='ml-2 text-danger h5' />
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </TableCartFinalize>
                   {cart2.cartTotalAmount == null
                   ? <Button>
                        <Link to="/">Volta para pagina inicial</Link>
                   </Button>
                   : <Button onClick={async () => {
                       await api.post("payment", ...prod)
                       .then((res) => (window.location.href = res.data.response.body.init_point))
                    }}>Escolher a forma de pagamento</Button>}
                    <SubTotal>Total: R$ {cart2.cartTotalAmount},00 </SubTotal>
                </div>
            }
        </>
    )
}
