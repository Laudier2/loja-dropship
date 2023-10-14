import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantyti: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {

            const itemsIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemsIndex >= 0) {
                state.cartItems[itemsIndex].cartQuantity += 1
                toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.cartItems[itemsIndex].cartQuantity}`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} adicionado ao carrimho`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            toast.error(`${action.payload.name} Removido do carrimho`, {
                position: "bottom-left"
            })
        },
        decrementCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const { addCart, removeFromCart, decrementCart } = cartSlice.actions;

export default cartSlice.reducer;

