import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './store'
import axios from 'axios';
import { setLoader } from './features/loader/loaderSlice';

const { dispatch } = store

axios.interceptors.request.use(
  (request) => {
    dispatch(setLoader(true))
    console.log('in')
    return request
  }
)

axios.interceptors.response.use(
  (response) => {
    dispatch(setLoader(false))
    console.log('out')
    return response
  }
)

window.renderReactTesting = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  //serviceWorker.unregister();
};

window.unmountCats = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('ReactTesting-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  //serviceWorker.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();