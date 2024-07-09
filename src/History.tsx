import React from "react";
export const History = ({transactions, onRemoveTxn}) => {
    const removeTransaction = (id: string, txnType: string, txnAmt: number) => {
        onRemoveTxn(id, txnType, txnAmt);
    }

    return (
        <React.Fragment>
            <h3>History</h3>

            <div className="txn-history">
                <ul id="list" className="list">
                    {transactions.map((transaction) => (
                        <li className={transaction.type === 'plus' ? 'plus' : 'minus'} key={transaction.id}>
                            {transaction.text}
                            <span>{transaction.type === 'plus' ? '+' : '-'}{transaction.amount}</span>
                            <button className="delete-btn" onClick={() => removeTransaction(transaction.id, transaction.type, transaction.amount)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};