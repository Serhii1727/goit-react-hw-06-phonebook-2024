import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});
