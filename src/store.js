import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./features/search";


export const store = configureStore({
reducer:{
   person:personReducer 
}

})