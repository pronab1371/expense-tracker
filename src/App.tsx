import React, {useState} from 'react'
import './App.css'
import {Stat} from "./Stat.tsx";
import {History} from "./History.tsx";
import {InputForm} from "./InputForm.tsx";
import {v4 as uuidv4} from 'uuid';

function App() {
    const initData = [
        {
            id: uuidv4(),
            type: 'plus',
            text: 'Salary',
            amount: 5000
        }, {
            id: uuidv4(),
            type: 'minus',
            text: 'Rent',
            amount: 1500
        }, {
            id: uuidv4(),
            type: 'plus',
            text: 'Groceries',
            amount: 750
        }, {
            id: uuidv4(),
            type: 'minus',
            text: 'Phone bill',
            amount: 500
        }, {
            id: uuidv4(),
            type: 'plus',
            text: 'Petrol',
            amount: 250
        }, {
            id: uuidv4(),
            type: 'minus',
            text: 'Medicines',
            amount: 1000
        },
        {
            id: uuidv4(),
            type: 'plus',
            text: 'Earnings from side gigs',
            amount: 3000
        }, {
            id: uuidv4(),
            type: 'minus',
            text: 'Debt repayment',
            amount: 1200
        }, {
            id: uuidv4(),
            type: 'plus',
            text: 'Interest',
            amount: 100
        }, {
            id: uuidv4(),
            type: 'minus',
            text: 'Insurance premiums',
            amount: 200
        }
    ];

    const [transactions, setTransactions] = useState(initData);

    const [incomeAmount, setIncomeAmount] = useState(calculateIncomeAmount());
    const [expenseAmount, setExpenseAmount] = useState(calculateExpenseAmount());

    function calculateIncomeAmount() {
        return transactions.reduce((acc, curr) => curr.type === 'plus'? acc + curr.amount : acc, 0);
        //return transactions.filter(transaction => transaction.type === 'plus').reduce((acc, curr) => acc + curr.amount, 0);
    }

    function calculateExpenseAmount() {
        return transactions.reduce((acc, curr) => curr.type === 'minus'? acc + curr.amount : acc, 0);
        //return transactions.filter(transaction => transaction.type === 'minus').reduce((acc, curr) => acc + curr.amount, 0);
    }

    const removeTransaction = (id: string, txnType: string, txnAmount: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
        txnType === 'plus'? setIncomeAmount((amount) => amount - txnAmount) : setExpenseAmount((amount) => amount - txnAmount);
    };

    function addTransaction(txnType: string, txnName: string, txnAmount: number) {
        //console.log(txnType, txnName, txnAmount);

        const txnItem = {
            id: uuidv4(),
            type: txnType,
            text: txnName,
            amount: txnAmount
        };

        setTransactions([...transactions, txnItem]);

        txnType === 'plus' ? setIncomeAmount((amount) => amount + txnAmount) : setExpenseAmount((amount) => amount + txnAmount);
    }

    return (
        <React.Fragment>
            <header>
                <h2>Expense Tracker</h2>
            </header>

            <div className="container">
                <Stat incomeAmount={incomeAmount} expenseAmount={expenseAmount}/>
                <History transactions={transactions} onRemoveTxn={removeTransaction}/>
                <InputForm incomeAmount={incomeAmount} expenseAmount={expenseAmount} onAddTxn={addTransaction}/>
            </div>
        </React.Fragment>
    )
}

export default App
