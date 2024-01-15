import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(filterContacts, (state, action) => {
    return (state = action.payload);
  });
});
