import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import App from 'components/App';
import store from './store/index';
import 'dayjs/locale/sv';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/index.scss"

dayjs.locale('sv');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider autoDismiss>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ToastProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
