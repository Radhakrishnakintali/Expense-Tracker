import React, {useEffect} from "react";

import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/accounts';
import { bindActionCreators } from 'redux';

export const Transaction = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const dispatch = useDispatch();
    const { deleteTransaction } = bindActionCreators(actions, dispatch);
    var updateTransaction = "";
    const getTransaction =(id) => {
        updateTransaction = props.transactions.filter(transaction => transaction.id === id)
        //localStorage.setItem('updateTransaction', transaction);
        //console.log(transaction);
        props.getData(updateTransaction);
    }
    useEffect(() => {
        localStorage.setItem('updateTransaction', JSON.stringify(updateTransaction))
      }, [updateTransaction])
    return (
        <li data-testid= {props.id} className= {props.transaction.amount < 0 ? "minus" : "plus"}>
            {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span><button data-testid={`btn${props.id}`} onClick={() => deleteTransaction(props.transaction.id)} className="delete-btn">x</button><button onClick={() => getTransaction(props.transaction.id)} type="button">
          Edit</button>
        </li> 
    )
}