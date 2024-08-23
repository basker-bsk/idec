"use client";
import { Provider } from "react-redux";
import { useStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
export function Providers({ children, initialReduxState }) {
  const { store, persistor } = useStore(initialReduxState);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
