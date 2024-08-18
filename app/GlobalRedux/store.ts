"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./Features/counter/counterSlice";
import cartReducer from "./Features/Cart/cartSlice";

const persistConfig = {
  key: "bsk",
  storage,
};
const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
