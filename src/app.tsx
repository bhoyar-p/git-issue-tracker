import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './reducers';
import { Provider } from 'react-redux';
import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.body,
);
