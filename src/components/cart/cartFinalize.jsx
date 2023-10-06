import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

export default function CartFinalize() {

    const cart = useSelector(state => [state.cart.cartItems])

    console.log({ m: cart })

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
        <div>
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
                                <img className="card-img-top col-5" src={carProduct[0].image} alt="Card" />

                            </div>
                            <td>
                                <div style={{ width: '30rem' }}>

                                    <div class="">
                                        <h5 class="card-title">
                                            {carProduct[0].name}
                                        </h5>
                                        <p class="card-text">
                                            {carProduct[0].description}
                                        </p>

                                    </div>
                                </div>
                            </td>
                            <td >Quantidade de items:
                                <AiOutlineMinus
                                    size={20}
                                    onClick={handleDecreaseClick}
                                    aria-label={`Decrease quantity of ${carProduct[0].name}`}
                                />


                                <AiOutlinePlus
                                    size={20}
                                    onClick={handleIncreaseClick}
                                    aria-label={`Increase quantity of ${carProduct[0].name}`}
                                />
                                {carProduct[0].cartQuantity}</td>

                            <td>Preco de cada unidade: {carProduct[0].price}</td>

                        </tr>
                    ))},
                    {cart.map(carProduct => (
                        <tr key={carProduct.id}>
                            <div className="" style={{ width: '18rem' }}>
                                <img className="card-img-top col-5" src={carProduct[1].image} alt="Card" />

                            </div>
                            <td>
                                <div style={{ width: '30rem' }}>

                                    <div class="">
                                        <h5 class="card-title">
                                            {carProduct[1].name}
                                        </h5>
                                        <p class="card-text">
                                            {carProduct[1].description}
                                        </p>

                                    </div>
                                </div>
                            </td>
                            <td >Quantidade de items:
                                <AiOutlineMinus
                                    size={20}
                                    onClick={handleDecreaseClick}
                                    aria-label={`Decrease quantity of ${carProduct[1].name}`}
                                />


                                <AiOutlinePlus
                                    size={20}
                                    onClick={handleIncreaseClick}
                                    aria-label={`Increase quantity of ${carProduct[1].name}`}
                                />
                                {carProduct[1].cartQuantity}</td>

                            <td>Preco de cada unidade: {carProduct[1].price}</td>

                        </tr>
                    ))},
                    {cart.map(carProduct => (
                        <tr key={carProduct.id}>
                            <div className="" style={{ width: '18rem' }}>
                                <img className="card-img-top col-5" src={carProduct[2].image} alt="Card" />

                            </div>
                            <td>
                                <div style={{ width: '30rem' }}>

                                    <div class="">
                                        <h5 class="card-title">
                                            {carProduct[2].name}
                                        </h5>
                                        <p class="card-text">
                                            {carProduct[2].description}
                                        </p>

                                    </div>
                                </div>
                            </td>
                            <td >Quantidade de items:
                                <AiOutlineMinus
                                    size={20}
                                    onClick={handleDecreaseClick}
                                    aria-label={`Decrease quantity of ${carProduct[2].name}`}
                                />


                                <AiOutlinePlus
                                    size={20}
                                    onClick={handleIncreaseClick}
                                    aria-label={`Increase quantity of ${carProduct[2].name}`}
                                />
                                {carProduct[2].cartQuantity}</td>

                            <td>Preco de cada unidade: {carProduct[2].price}</td>

                        </tr>
                    ))},
                    {cart.map(carProduct => (
                        <tr key={carProduct.id}>
                            <div className="" style={{ width: '18rem' }}>
                                <img className="card-img-top col-5" src={carProduct[3].image} alt="Card" />

                            </div>
                            <td>
                                <div style={{ width: '30rem' }}>

                                    <div class="">
                                        <h5 class="card-title">
                                            {carProduct[3].name}
                                        </h5>
                                        <p class="card-text">
                                            {carProduct[3].description}
                                        </p>

                                    </div>
                                </div>
                            </td>
                            <td >Quantidade de items:
                                <AiOutlineMinus
                                    size={20}
                                    onClick={handleDecreaseClick}
                                    aria-label={`Decrease quantity of ${carProduct[3].name}`}
                                />


                                <AiOutlinePlus
                                    size={20}
                                    onClick={handleIncreaseClick}
                                    aria-label={`Increase quantity of ${carProduct[3].name}`}
                                />
                                {carProduct[3].cartQuantity}</td>

                            <td>Preco de cada unidade: {carProduct[3].price}</td>

                        </tr>
                    ))},

                </tbody>
            </table>
        </div>
    )
}
