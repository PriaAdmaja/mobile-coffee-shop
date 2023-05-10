import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: ''
    },
    reducers: {
        inputCategory: (prevState, action) => {
            return {
                ...prevState,
                category: action.payload
            }
        },
        removeCategory: (prevState) => {
            return {
                ...prevState,
                category: ''
            }
        },
    }
});

export const categoryAction = categorySlice.actions
export default categorySlice.reducer