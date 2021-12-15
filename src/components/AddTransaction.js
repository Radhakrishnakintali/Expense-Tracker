import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/accounts';
import useTranslation from "react-i18next";
import { popper } from '@popperjs/core';

export const AddTransaction = (props) => {
    // const { t } = useTranslation();
    const { t } = jest ? { t: s => s } : useTranslation.useTranslation();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    const {addTransaction, updateTransaction} = bindActionCreators(actions, dispatch);

    useEffect(() => {
        if (props.transaction.length > 0) {
            console.log("running1: " +props.transaction);
            setId(props.transaction[0].id)
            setText(props.transaction[0].text);
            setAmount(props.transaction[0].amount);
        }
      }, [props]);

    const onSubmit = e => {
        e.preventDefault();
        if (id === 0) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount
            }
            addTransaction(newTransaction);
        } else {
            const oldTransaction = {
                id: id,
                text,
                amount
            }
            updateTransaction(oldTransaction);
        }

        setId(0);
        setText("");
        setAmount(0);
        props.clearData();
    }

    return (
        <div data-testid='addTransaction' style={{width:"40%"}}>
        <h3>{t("add_new_transaction")}</h3>
        <form  id="form" onSubmit={onSubmit}>
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