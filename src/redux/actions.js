import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');
export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
