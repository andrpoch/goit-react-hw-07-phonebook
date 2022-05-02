import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST, PURGE,REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import contacts from './reducer';

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
   }),
];
const phonebookPersistConfig = {
   key: 'contacts',
   storage,
   backlist: ['filter']
};
export const store = configureStore({
   reducer: {
      contacts: persistReducer(phonebookPersistConfig, contacts),
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);