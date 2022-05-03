import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://626f9a5bc508beec4886283f.mockapi.io/api/v1';
export const fetchContacts = createAsyncThunk(
   'contacts/fetchContacts',
   async () => {
      const { data } = await axios.get('/contacts');
      return data;
   }
);
export const addContact = createAsyncThunk(
   'contacts/addContact',
   async (contact) => {
      const { data } = await axios.post('/contacts', contact);
      return data;
   }
);
export const deleteContact = createAsyncThunk(
   'contacts/deleteContact',
   async (contactId) => {
      const {
         data: { id }, } = await axios.delete(`/contacts/${contactId}`);
      return id;
   }
);
