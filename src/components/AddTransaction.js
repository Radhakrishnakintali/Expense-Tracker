import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/accounts';
import { useTranslation } from "react-i18next";

export const AddTransaction = () => {
    const { t } = useTranslation();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const {addTransaction} = bindActionCreators(actions, dispatch);
    // const updateTransaction = localStorage.getItem('updateTransaction');
    // console.log("text");
    // if (updateTransaction) {
    //     console.log("text1");
    //     setText(updateTransaction[0].text);
    //     //setAmount(updateTransaction[0].amount);
    //     localStorage.setItem('updateTransaction',"");
    // }
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount
        }
        addTransaction(newTransaction);
    }
    
   // console.log(updateTransaction);

    return (
        <div data-testid='addTransaction' style={{width:"40%"}}>
        <h3>{t("add_new_transaction")}</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">{t("text")}</label>
            <input type="text" id="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder={`${t("enter_text")}...`} />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >{t("amount")} <br />
                ({t("negative")} - {t("expense")}, {t("positive")} - {t("income")})
            </label>
            <input type="number" id="amount" value = {amount} onChange={(e) => setAmount(e.target.value)} placeholder={`${t("enter_amount")}...`} />
            </div>
            <button data-testid='btnAddTransaction' style={{backgroundColor:"lightblue"}} className="btn">{t("add_transaction")}</button>
        </form>
      </div>
    );
}