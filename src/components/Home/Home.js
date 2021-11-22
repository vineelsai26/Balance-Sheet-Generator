import { useState } from "react";

import "./Home.css"

const Home = () => {
    const [cash, setCash] = useState("")
    const [accRec, setAccRec] = useState("")
    const [accRecLDA, setAccRecLDA] = useState("")
    const [inv, setInv] = useState("")
    const [tempInv, setTempInv] = useState("")
    const [preExp, setPreExp] = useState("")

    const [lti, setLti] = useState("")
    const [land, setLand] = useState("")
    const [build, setBuild] = useState("")
    const [pae, setPae] = useState("")
    const [faf, setFaf] = useState("")

    const [accPay, setAccPay] = useState("")
    const [stNotes, setStNotes] = useState("")
    const [cplNotes, setCplNotes] = useState("")
    const [intPay, setIntPay] = useState("")
    const [taxPay, setTaxPay] = useState("")
    const [accPayroll, setAccPayroll] = useState("")

    const [mort, setMort] = useState("")
    const [oll, setOll] = useState("")

    const [cs, setCs] = useState("")
    return (
        <div>
            <div id="page" className="wrapper" >
                <div className="title">
                    Balance Sheet Generator
                </div>
                <div className="form">
                    <div className="centerDiv">
                        <div className="inputField">
                            <label className="label">Company</label>
                            <input type="text" className="input width100" id="Company" />
                        </div>

                        <div className="inputField">
                            <label className="label">Email Address</label>
                            <input type="text" className="input width100" id="email_id" />
                        </div>

                        <div className="inputField">
                            <label className="label">Year</label>
                            <input type="date" className="input width100" id="date" />
                        </div>
                    </div>
                    <div className="wrapper flex noBorder" >
                        <div className="wrapper">
                            <div className="form" >
                                <div className="title fontRed">
                                    Current Assets
                                </div>
                                <div className="inputField">
                                    <label className="label">Cash</label>
                                    <input type="text" className="input" id="cash" onChange={(e) => setCash(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Accounts receivable</label>
                                    <input type="text" className="input" id="accounts_receivable" onChange={(e) => setAccRec(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">less doubtful accounts</label>
                                    <input type="text" className="input" id="less_doubtful_accounts" onChange={(e) => setAccRecLDA(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Inventory</label>
                                    <input type="text" className="input" id="Inventory" onChange={(e) => setInv(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Temporary investments</label>
                                    <input type="text" className="input" id="temporary_investments" onChange={(e) => setTempInv(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Prepaid expenses</label>
                                    <input type="text" className="input" id="prepaid_expenses" onChange={(e) => setPreExp(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField center">
                                    <label className="label">Total Current Assets</label>
                                    <input type="text" className="input" id="total_current_assets" value={cash + accRec + accRecLDA + inv + tempInv + preExp} />
                                </div>

                                <div className="title fontRed">
                                    Fixed Assets
                                </div>

                                <div className="inputField">
                                    <label className="label">Long-term investments</label>
                                    <input type="text" className="input" id="long_term_investments" onChange={(e) => setLti(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Land</label>
                                    <input type="text" className="input" id="land" onChange={(e) => setLand(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Buildings</label>
                                    <input type="text" className="input" id="buildings" onChange={(e) => setBuild(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Plant and equipments</label>
                                    <input type="text" className="input" id="Inventory" onChange={(e) => setPae(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Furniture and Fixtures</label>
                                    <input type="text" className="input" id="temporary_investments" onChange={(e) => setFaf(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Fixed Assets</label>
                                    <input type="text" className="input" id="total_fixed_assets" value={lti + land + build + pae + faf} />
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="form">
                                <div className="title fontRed">
                                    Current Liabilities
                                </div>
                                <div className="inputField">
                                    <label className="label">Accounts payable</label>
                                    <input type="text" className="input" id="accounts_payable" onChange={(e) => setAccPay(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Short-term notes</label>
                                    <input type="text" className="input" id="Short_term_notes" onChange={(e) => setStNotes(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Current portion of long-term notes</label>
                                    <input type="text" className="input" id="Current_portion_of_long_term_notes" onChange={(e) => setCplNotes(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Interest Payable</label>
                                    <input type="text" className="input" id="interest_payable" onChange={(e) => setIntPay(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Taxes Payable</label>
                                    <input type="text" className="input" id="taxes_payable" onChange={(e) => setTaxPay(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Accrued Payroll</label>
                                    <input type="text" className="input" id="accrued_payroll" onChange={(e) => setAccPayroll(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total current Liabilities</label>
                                    <input type="text" className="input" id="total_current_liabilities" value={accPay + stNotes + cplNotes + intPay + taxPay + accPayroll} />
                                </div>
                                <div className="title fontRed">
                                    Long-term Liabilities
                                </div>
                                <div className="inputField">
                                    <label className="label">Mortgage</label>
                                    <input type="text" className="input" id="mortgage" onChange={(e) => setMort(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Other Long-term liabilities</label>
                                    <input type="text" className="input" id="other_long_term_liabilities" onChange={(e) => setOll(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Long-Term Liabilities</label>
                                    <input type="text" className="input" id="total_long_term_liabilities" value={mort + oll} />
                                </div>

                                <div className="title fontRed">
                                    Shareholder's Equity
                                </div>
                                <div className="inputField">
                                    <label className="label">Capital Stock</label>
                                    <input type="text" className="input" id="capital_stock" onChange={(e) => setCs(parseInt(e.target.value))} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Retained earnings</label>
                                    <input type="text" className="input" id="retained earnings" value={cash + accRec + accRecLDA + inv + tempInv + preExp + lti + land + build + pae + faf - (accPay + stNotes + cplNotes + intPay + taxPay + accPayroll) - (mort + oll) - cs} />
                                </div>
                                <div className="inputField">
                                    <label className="label">Total Shareholder's Equity</label>
                                    <input type="text" className="input" id="total_shareholder_Equity" value={cash + accRec + accRecLDA + inv + tempInv + preExp + lti + land + build + pae + faf - (accPay + stNotes + cplNotes + intPay + taxPay + accPayroll) - (mort + oll)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputField">
                        <label className="label">Total Assets</label>
                        <input type="text" className="input" id="total_fixed_assets" value={cash + accRec + accRecLDA + inv + tempInv + preExp + lti + land + build + pae + faf} />
                    </div>
                    <div className="inputField center">
                        <label className="label">Total Liabilities and Equity</label>
                        <input type="text" className="input" id="total_fixed_assets" value={cash + accRec + accRecLDA + inv + tempInv + preExp + lti + land + build + pae + faf} />
                    </div>

                    <p>Developed by : 1) VAMSI PAVAN KUMAR (CSE/19010/437) 2) VINEEL SAI (CSE/19071/498)</p>
                </div>
            </div>
        </div>
    );
}

export default Home