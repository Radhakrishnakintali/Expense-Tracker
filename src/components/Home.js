import React from 'react';
//import { AddTransaction } from './AddTransaction';
import { TransactionList } from './TransactionList';

const Home = () => {
    return (
        <div style={{
            width: "100%"
        }}>
            <TransactionList />
            {/* <AddTransaction transaction={transaction}/> */}
        </div>
    )
};

export default Home;