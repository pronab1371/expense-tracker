import React from "react";

export const Stat = ({incomeAmount, expenseAmount}:
                         { incomeAmount: number, expenseAmount: number }) => {
    // const incomeAmount = transactions.reduce((acc, curr) => curr.type === 'plus'? acc + curr.amount : acc, 0);
    // const expenseAmount = transactions.reduce((acc, curr) => curr.type === 'minus'? acc + curr.amount : acc, 0);
    //
    const balanceAmount = incomeAmount - expenseAmount;

    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance">$ {balanceAmount}</h1>

            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+$ {incomeAmount}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-$ {expenseAmount}</p>
                </div>
            </div>
        </React.Fragment>
    );
};