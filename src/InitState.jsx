import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import App from './App';



const initState = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  )
}

export default initState;