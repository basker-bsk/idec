"use client";

import { Provider } from "react-redux";
import { useStore, storeN } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children, initialReduxState }) {
  // let persistor = persistStore(storeN);
  const { store, persistor } = useStore(initialReduxState);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}>{children}</PersistGate> */}
      {children}
    </Provider>
  );
}
