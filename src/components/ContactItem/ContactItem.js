import React from "react";
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contactName, contactNumber, deleteContact }) => {
   return (
         <li className={s.item}>
            <span className={s.text}>{contactName}:</span>
            <span className={s.text}>{contactNumber}</span>
            <button className={s.button} type="button" onClick={deleteContact}>Delete</button>
         </li>
   );
};

ContactItem.propTypes = {
   contactName: PropTypes.string.isRequired,
   contactNumber: PropTypes.string.isRequired,
};

export default ContactItem;