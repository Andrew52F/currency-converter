import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ratesDataReducer from './ratesDataReducer';
import converterReducer from './converterReducer';

import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'converter',
    storage,
    blacklist: ['inputValue'],
  }
const persisterConverterReducer = persistReducer(persistConfig, converterReducer);

const rootReducer = combineReducers({
    ratesData: ratesDataReducer,
    converter: persisterConverterReducer,
  })

const store = configureStore({
  reducer: rootReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;