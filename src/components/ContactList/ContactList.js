import React from 'react';
import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch,useSelector } from 'react-redux'
import { getVisibleContacts } from 'redux/selectors';
import actions from 'redux/actions';

export default function ContactList() {
   const contacts = useSelector(getVisibleContacts);
   const dispatch = useDispatch();
   const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
   return (
   <div className={s.wrapper}>
   <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
         <ContactItem
            key={id}
            contactName={name}
            contactNumber={number}
            deleteContact={() => onDeleteContact(id)}
         />
      ))}
      </ul>
   </div>
);
};
