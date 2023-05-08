//  add event handeler 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get input amount
    const newWithdrawAmount = getInputValue
    ('withdraw-field');
    // get previous withdraw amount
    const previousWithdrawAmount = getTextElement('withdraw-total');
    //  add withdraw amount
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    // set withdraw amount into withdraw section
    setTextElement('withdraw-total', totalWithdraw);
    // get previous balance 
    const previousBalance = getTextElement('balance-total');
    // calculate balance 
    const NewBalance = previousBalance - newWithdrawAmount;
    // set update balance value
    setTextElement('balance-total', NewBalance);
})