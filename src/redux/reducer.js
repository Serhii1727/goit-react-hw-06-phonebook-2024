import { createReducer } from '@reduxjs/toolkit';
import { addContact } from './actions';

const initialState = {
  contacts: [],
};

export const contactsReducer = createReducer(initialState.contacts, builder => {
  builder.addCase(addContact, (state, action) => {
    state.push(action.payload);
  });
});
