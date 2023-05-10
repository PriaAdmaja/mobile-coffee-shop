import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import userInfoSlice from "./userInfo";
import cartSlice from "./cart";
import activePromoSlice from "./activePromo";
import deliveryStatusSlice from "./deliveryStatus";

const reducers = combineReducers({
    counter: counterSlice,
    userInfo: userInfoSlice,
    cart: cartSlice,
    activePromo: activePromoSlice,
    deliveryStatus: deliveryStatusSlice
   
});

export default reducers;