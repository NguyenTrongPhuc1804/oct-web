import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./Sagas/rootSaga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import notifyReducer from "./Ducks/notyfyDux";
import { userReducer } from "./Ducks/UserDux";
import cartReducer from "./Ducks/cart";
import { NewsReducer } from "./reducer/NewReducer";
import uiDux from "./Ducks/uiDux";

const reducer = combineReducers({
  notify: notifyReducer,
  user: userReducer,
  cart: cartReducer,
  NewsReducer,
  ui: uiDux,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(watcherSaga);

export default store;
