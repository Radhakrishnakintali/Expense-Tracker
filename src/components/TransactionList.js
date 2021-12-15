import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  useTranslation  from "react-i18next";
import { Transaction } from './Transaction';
import { MysteriousSankey } from './MysteriousSankey';
import { AddTransaction } from './AddTransaction';


export const TransactionList = (props) => {
    const {accounts} = useSelector((accounts) => accounts);
    const [transactionData, setTransactionData] = useState({});
    //const { t } = useTranslation();
    const { t } = jest ? { t: s => s } : useTranslation.useTranslation();
     
    let count = 0;

    let nodes = accounts.transactions
            .map( transaction => 
                {
                    count ++;
                    return { "name": transaction.text };
                }
            )

    let links = accounts.transactions
            .map ((transaction, index) =>{
                count = count + 1
                if (transaction.amount < 0) 
                    return {
                        "source": 0,
                        "target": index + 1,
                        "value": Math.abs(transaction.amount)
                    }
                    return {
                        "source": index + 1,
                        "target": 0,
                        "value": transaction.amount
                    }
                }
            )
    nodes.splice(0, 0, {"name": "Budget"});

    const data = {
        "nodes": nodes,
        "links": links
    }

    const getData = (updateTransaction) => {
        setTransactionData(updateTransaction);
    }

    const clearData = () => {
        setTransactionData({});
    }

    return (
        <div>
            <div data-testid='transactionListData'>
                <div width="100%" >
                    <div className="font-weight-normal mb-2" style={{paddingTop:"20px"}}>{t("financial_flow_chart")}</div>
                    <svg style={{margin:"auto", display:"block"}} width="600px" height="600px">
                        {data && <MysteriousSankey data={data} width="600" height="600" />}
                    </svg>
                </div>
                <h3>{t("history")}</h3>
                <ul id="list" className="list">
                    {accounts.transactions.map((transaction,index) => (
                        <Transaction id={`transaction${index}`} key={transaction.id} transaction = {transaction} transactions={accounts.transactions}  getData={getData}/>
                    ))}
                </ul>
            </div>
            <AddTransaction transaction={transactionData} clearData={clearData}/>
        </div>
    )
}