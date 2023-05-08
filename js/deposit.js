//  add event listener 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get input deposit 
    const newDeposit = getInputValue('deposit-field');
    // get previous deposit
    const previousDeposit = getTextElement('deposit-total');
    // calculate total deposite 
    const totalDeposite = previousDeposit + newDeposit;
    // set deposit to deposit section
    setTextElement('deposit-total', totalDeposite);
    //  get previous balance 
    const previousBalance = getTextElement('balance-total');
    // add deposit 
    const NewBalance = previousBalance + newDeposit;
    //  set add balance to balance section
    setTextElement('balance-total', NewBalance);
})