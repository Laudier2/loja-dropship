/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, CartVazio, SubTotal, TableCartFinalize } from "./styles"
import { Link } from "react-router-dom"
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize} from "react-icons/fa";
import { addCart, decrementCart, removeFromCart, cauculateTotal} from '../../redux/cart/cart';


export default function CartFinalize() {
    useEffect(() => {
        window.scroll({
          top: 100,
        });
    
      },[])

    //const navigate = useNavigate()

    const cart = useSelector(state => state.cart.cartItems)
    const items = useSelector(state => state.cart.cartItems.length)
    const cart2 = useSelector(state => state.cart)

    //let id = localStorage.getItem("id")

    const productSize = useSelector(cartItems => cartItems.cart.tmMedidas)
    const productCor = useSelector(cartItems => cartItems.cart.tmCores)

		console.log(productCor)

		if(cart == ""){
			localStorage.removeItem("tmMedidas")
			localStorage.removeItem("tmCores")
		}

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cauculateTotal())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const handleRemoveClick = (id) => {
        dispatch(removeFromCart(id))
        window.location.reload()
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

    const carrinhoVazio = () => {
        
        return (
            <CartVazio>
                <Link to="/">Volta para as compras</Link>
                <img src="https://www.roboticaeducacional.art.br/images/cart-vazio.jpg" alt="img" />
								
            </CartVazio>
        )		
    }

    return (
        <>
            {items === 0 ? carrinhoVazio():
                <div>
                    <TableCartFinalize>
                        <table>
                            <thead>
                            <Link to="/" style={
                                {
                                    textDecoration: "none", 
                                    fontSize: "30px", 
                                    fontWeight: "bold",
                                    background: "aqua",
                                    padding: "5px",
                                    borderRadius: "10px",
                                    marginTop: "5px",
                                    margin: "5px"
                                }
                            }>StylesTop</Link> 
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
                                                <a href='/desc' className="divimg">
                                                    <img src={res.image[0]} alt="img" />
                                                </a>
                                            </td>
                                            <td>
                                                <div className="divnome">
                                              
                                                    <div>{
																											productCor.map(cor => (
                                                        productSize.map(resp => (
                                                            <div key={resp.id}>
                                                                {
																																	res.id === resp.id && res.id === cor.id ? res.name + " Tamanho: " + resp.tm + " Cor: " + cor.cor : ""
																																}
                                                            </div>
                                                        ))    
																											))
                                                    }</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='div1'>
                                                    <button onClick={() => handleIncreaseClick(res)}>
                                                        <FaPlus/>
                                                    </button>
                                                        {res.cartQuantity}
                                                    <button onClick={() => handleDecreaseClick(res)}>
                                                        <FaWindowMinimize className='mb-2' />
                                                    </button></div>   
                                            </td>
                                            <td>
                                                <div className="div2">
                                                    <strong>Preco: R${res.price * res.cartQuantity}</strong>
                                                    
                                                    <button className='btn btn-outline-secondary ml-2' onClick={() => handleRemoveClick(res)}> Excluir 
                                                        <RiDeleteBin2Fill className='text-danger h5' />
                                                    </button>
                                                </div>
                                            </td>
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </TableCartFinalize>
                   {cart2.cartTotalAmount == 0
                   ? <Button>
                        <Link to="/">Volta para pagina inicial</Link>
                   </Button>
                   : /*<Button onClick={ async () => {
                    await api.post("/payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point))}}>
                        Proceguir com pagamento
                    </Button>*/
                    <Button>
                        <Link to="/compra">Finaliza comprar</Link>
                    </Button>
                    }
                    <SubTotal>Total: R$ {cart2.cartTotalAmount}</SubTotal>
                </div>
            }
        </>
    )
}
