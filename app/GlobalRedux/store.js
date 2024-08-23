"use client";
import { useMemo } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
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

export const storeN = configureStore({
  reducer: persistedReducer,
});

export function initializeStore(preloadedState) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Needed to ignore non-serializable values like `persistStore`
      }),
  });
}
export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = persistStore(store); // Persist the store
  return { store, persistor };
}

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
