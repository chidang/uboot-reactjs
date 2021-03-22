import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import ecommerceReducer from './store/reducers/ecommerce';

const rootReducer = combineReducers({
  ecommerce: ecommerceReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

const app = (
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
)

ReactDOM.render(
  //Fragment - StrictMode
  <React.Fragment>
    {app}
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
