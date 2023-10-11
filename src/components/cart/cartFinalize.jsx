import React from 'react'
import { useSelector } from 'react-redux'
import { Button, TableCartFinalize, cartQuantity } from "./styles"
import { useHistory } from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CartFinalize() {

    const hitory = useHistory()

    const cart = useSelector(state => state.cart.cartItems)

    console.log(cart)

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
                                                <b>Quantidade</b>
                                                {res.cartQuantity}
                                            </td>
                                            <td>
                                                <b>Preco</b>
                                                ${res.price * res.cartQuantity}
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
