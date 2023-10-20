import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, TableCartFinalize, cartQuantity } from "./styles"
import { useHistory } from "react-router-dom"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize} from "react-icons/fa";
import { addCart, decrementCart, removeFromCart } from '../../redux/cart/cart';


export default function CartFinalize() {

    const hitory = useHistory()

    const cart = useSelector(state => state.cart.cartItems)

    const dispatch = useDispatch()

    console.log(cart)

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
                        </table>
                    </TableCartFinalize>
                    <Button>Escolher a forma de pagamento</Button>
                </div>
            }
        </>
    )
}

/*<div>
    <table class="table container">
        <thead>
            <tr>
                <th scope="">Aque esta todos os items selecionados</th>
            </tr>

        </thead>
        <tbody>

            {cart.map(carProduct => (
                <tr key={carProduct.id}>
                    <div className="" style={{ width: '18rem' }}>
                        <img className="card-img-top col-5 mt-3" src={carProduct.image} alt="Card" />

                    </div>
                    <td>
                        <div style={{ width: '30rem' }}>

                            <div class="">
                                <h5 class="card-title">
                                    {carProduct.name}
                                </h5>
                                <p class="card-text">
                                    {carProduct.description}
                                </p>

                            </div>
                        </div>
                    </td>
                    <td >Quantidade
                        <AiOutlineMinus
                            size={20}
                            onClick={handleDecreaseClick}
                            aria-label={`Decrease quantity of ${carProduct.name}`}
                        />


                        {carProduct.cartQuantity}


                        <AiOutlinePlus
                            size={20}
                            onClick={handleIncreaseClick}
                            aria-label={`Increase quantity of ${carProduct.name}`}
                        />
                    </td>

                    <td>Preco {carProduct.price}</td>

                </tr>
            ))}
        </tbody>
    </table>
            </div>*/
