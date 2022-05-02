import React, { useState } from "react";
import s from './ContactForm.module.css';
import { useDispatch,useSelector } from 'react-redux'
import { getContacts } from "redux/selectors";
import actions from 'redux/actions';

export default function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const contacts = useSelector(getContacts);
   const dispatch = useDispatch();
   
   const handleChange = (e) => {
      const { name, value } = e.currentTarget;
      switch (name) {
         case 'name':
            setName(value);
            break;
         case 'number':
            setNumber(value);
            break;
         default:
            return;
      }
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (name === '') {
         alert(`Please enter a contact name.`)
         return;
      }
      if (number === '') {
         alert(`Please enter the contact's phone number.`)
         return;
      }
      if (contacts.find((contact)=>contact.name === name)) {
         alert(`It's already there "${name}", Are you blind?`)
         reset();
         return;
      }
      dispatch(actions.addContact(name, number));
      reset();
   }
  const reset = () => {
      setName('');
      setNumber('');
   };
      return (
         <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
               Name
            </label>
            <input
               className={s.input}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               value={name}
               onChange={handleChange}
            />
            <label className={s.label}>
               Number
            </label>
            <input
               className={s.input}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
               value={number}
               onChange={handleChange}
            /> 
            <button type="submit" className={s.button}>
               Add contact
            </button>
         </form>
         
      );
};
