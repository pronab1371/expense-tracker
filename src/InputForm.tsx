import React, {useState} from "react";

export const InputForm = ({incomeAmount, expenseAmount, onAddTxn}:
                              {
                                  incomeAmount: number, expenseAmount: number,
                                  onAddTxn: (txnType: string, txnText: string, txnAmount: number) => void
                              }) => {
    const [txnType, setTxnType] = useState('plus');
    const [txnText, setTxnText] = useState('');
    const [txnAmount, setTxnAmount] = useState(0);

    const balanceAmount = incomeAmount - expenseAmount;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!txnType || !txnText || !txnAmount) return;

        if (txnType === 'minus' && balanceAmount < txnAmount) {
            alert("🚫 Oops, Insufficient balance!");
            return;
        }

        onAddTxn(txnType, txnText, txnAmount);

        resetTxnForm();
    }

    function resetTxnForm() {
        setTxnType('plus');
        setTxnText('');
        setTxnAmount(0);
    }

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="type">Type</label>
                    <select id="type" name="type" className="selection-type" value={txnType}
                            onChange={e => setTxnType(e.target.value)}>
                        <option value="plus">Income</option>
                        <option value="minus">Expense</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="text">Name</label>
                    <input type="text" id="text" placeholder="Enter name of transaction..." value={txnText}
                           onChange={e => setTxnText(e.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={txnAmount}
                           onChange={e => setTxnAmount(+e.target.value)}/>
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment>
    );
};