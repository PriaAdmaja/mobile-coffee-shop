import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        submitCart: (prevState, action) => {
            return {
                ...prevState,
                cartList: [...prevState.cartList, action.payload]
            }
        },
        deleteCart: (prevState, action) => {
            const id = action.payload
            return {
                ...prevState,
                cartList: prevState.cartList.filter((d, i, arr) => arr[i] !== arr[id])
            }
        },
        clearCart: (prevState) => {
            return {
                ...prevState,
                cartList: []
            }
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;