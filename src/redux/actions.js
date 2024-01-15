import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact', id => {
  return { payload: id };
});

export const filterContacts = createAction('filter/filterContacts', text => {
  return { payload: text };
});
