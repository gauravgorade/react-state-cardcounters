import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider,  extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  fonts: {
    body: "Jost, sans-serif",
    heading: "Jost, sans-serif",
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

