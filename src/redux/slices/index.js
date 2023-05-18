import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import userInfoSlice from "./userInfo";
import cartSlice from "./cart";
import activePromoSlice from "./activePromo";
import deliveryStatusSlice from "./deliveryStatus";
import categorySlice from './category'
import productIdSlice from './productId'


const reducers = combineReducers({
    counter: counterSlice,
    userInfo: userInfoSlice,
    cart: cartSlice,
    activePromo: activePromoSlice,
    deliveryStatus: deliveryStatusSlice,
    category: categorySlice,
    productId: productIdSlice,
   
});

export default reducers;