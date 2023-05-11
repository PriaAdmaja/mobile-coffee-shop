import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
    name: 'delivery',
    initialState: {
        delivery: null
    },
    reducers: {
        inputDelivery: (prevState, action) => {
            return {
                ...prevState,
                delivery: action.payload
            }
        },
        removeDelivery: (prevState) => {
            return {
                ...prevState,
                delivery: ''
            }
        },
    }
});

export const deliveryAction = deliverySlice.actions
export default deliverySlice.reducer