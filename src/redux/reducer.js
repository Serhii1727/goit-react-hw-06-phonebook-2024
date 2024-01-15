import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const initialState = {
  contacts: [],
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
