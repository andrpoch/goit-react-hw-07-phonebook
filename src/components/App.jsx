import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterSearch/FilterSearch";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/apiOperation';
import Loader from './Loader/Loader';

export default function App() {
  const isLoading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <>
      <h1>Phonebook</h1>
        <ContactForm/>
      <h2>Filter</h2>
        <Filter/>
        <h2>Contacts</h2>
        {isLoading && <Loader/>}
        <ContactList/>
      </> 
  )
};
