import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/sliceContacts';
import { filterSlice } from './filter/sliceFilter';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});
