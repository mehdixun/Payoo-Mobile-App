// Add Money
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const bank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('input-account-number').value;
    if(accountNumber.length <11){
        alert('Please provide valid number')
        return;
    }
    
    const amount = parseInt(document.getElementById('input-add-amount').value)
    
    const pin = parseInt(document.getElementById('input-pin-number').value)
    const validPinNumber = 1234
    if(pin!== validPinNumber){
        alert("Wrong pin number")
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const newBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = newBalance;
    availableBalance.innerText = newBalance;

})


// Add Money Form Show
document.getElementById('btn-add').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "block";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";
})

// Cash Out Form Show
document.getElementById('btn-out').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "block";
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";
})

// Transfer Money Button
document.getElementById('btn-transfer').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "block";

    
})

// Cash Out
document.getElementById('btn-withdraw').addEventListener('click', function(event){
    event.preventDefault()
    const agentNumber = document.getElementById('input-agent').value;
    if(agentNumber.length <11){
        alert('Please provide valid number')
        return;
    }
    const amount = parseInt(document.getElementById('withdraw-amount').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const pin = parseInt(document.getElementById('withdraw-pin').value)
    const validPinNumber = 1234
    if(pin!== validPinNumber){
        alert("Wrong pin number")
    }

    const newBalance = availableBalance - amount;
    document.getElementById('available-balance').innerText = newBalance;
    
})


// Logout Button
document.getElementById('btn-logout').addEventListener('click', function(event){
    event.preventDefault()
    window.location.href="./index.html"
})
