
        document.getElementById('btn-withdraw').addEventListener('click',function(){
        const inputWithdraw = getInputFieldById('input-withdraw');
        const withdrawShow = getTextElementById('withdraw-show');
        
        if(isNaN(inputWithdraw)){
            alert('please enter a valid number.');
            return;
        }
        const balanceShow = getTextElementById('balance-show');
        document.getElementById('input-withdraw').value = '';
        if(inputWithdraw > balanceShow){
            alert('Taka Nai !!!!!')
            return;
        }
        
        
        const currentWithdraw = inputWithdraw +withdrawShow;
        setTextById('withdraw-show',currentWithdraw);

       
        const balanceShowWithdraw = balanceShow - inputWithdraw;
        setTextById('balance-show',balanceShowWithdraw);
        document.getElementById('input-withdraw').value = '';
        })