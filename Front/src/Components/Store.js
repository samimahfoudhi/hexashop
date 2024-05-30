import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Features/dataslice";
import userReducer from "./Features/useSlice";
import prodSelectedReducer from "./Features/productSelectedSlice";
import cardReducer from "./Features/cardSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, prodSelectedReducer);
const persisteUser = persistReducer(persistConfig, userReducer);
const persistCard = persistReducer(persistConfig, cardReducer);
export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: persistedReducer,
    user: persisteUser,
    card: persistCard,
  },
});

export const persistor = persistStore(store);
