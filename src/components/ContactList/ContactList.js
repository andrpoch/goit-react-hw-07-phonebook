import React from 'react';
import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch,useSelector } from 'react-redux'
import { getVisibleContacts } from 'redux/selectors';
import {deleteContact} from 'redux/apiOperation';

export default function ContactList() {
   const visibleContacts = useSelector(getVisibleContacts);
   const dispatch = useDispatch();
   const onDeleteContact = (id) => dispatch(deleteContact(id));
   return (
   <div className={s.wrapper}>
   <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
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
