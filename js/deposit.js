document.getElementById('btn-deposit').addEventListener('click', function(){
      
    const inputDeposit = getInputFieldById('input-deposit');
    const depositShow = getTextElementById('deposit-show');
    if(isNaN(inputDeposit)){
        alert('please enter a valid number.');
        return;
    }
    const totalDeposit = inputDeposit + depositShow;
    setTextById('deposit-show',totalDeposit);
    
    const balanceShow = getTextElementById('balance-show');
    const currentBalance = balanceShow + inputDeposit;
    setTextById('balance-show',currentBalance);

    document.getElementById('input-deposit').value = '';
    

    
})