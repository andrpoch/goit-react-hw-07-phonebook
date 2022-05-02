import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterSearch/FilterSearch";

export default function App() {
    return (
    <>
      <h1>Phonebook</h1>
        <ContactForm/>
      <h2>Filter</h2>
        <Filter/>
        <h2>Contacts</h2>
        <ContactList/>
      </> 
  )
};
