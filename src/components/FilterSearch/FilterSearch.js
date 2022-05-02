import React from "react";
import s from './FilterSearch.module.css';
import { useDispatch,useSelector } from 'react-redux'
import { getFilter } from 'redux/selectors';
import {changeFilter} from 'redux/actions';

export default function Filter() {
   const value = useSelector(getFilter);
   const dispatch = useDispatch();

   return (
      <div className={s.wrapper}>
         <label className={s.label}>
      Find contacts by name
      </label>
      <input
         className={s.input}
         type='text'
         value={value}
         onChange={(e)=> dispatch(changeFilter(e.target.value))}
      />
      </div>  
   )
};


