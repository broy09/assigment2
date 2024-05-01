import { configureStore } from "@reduxjs/toolkit";
import rootred from "./reducers/reduxMain";


const store = configureStore({
  reducer: rootred,
    

 
  
  
});

export default store;




