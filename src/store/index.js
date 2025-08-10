import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// import { counterActions } from "../store/counter";
// import { authActions } from "../store/auth";

//store of all reducer
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
