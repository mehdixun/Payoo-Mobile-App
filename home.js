const transactionData = [];

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

    const data = {
        name: "Add Money",
        date:new Date()
    }
    transactionData.push(data)
    console.log(transactionData)

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

    const data = {
        name: "Cash Out",
        date:new Date()
    }
    transactionData.push(data)
    console.log(transactionData)
    
})

// Logout Button
document.getElementById('btn-logout').addEventListener('click', function(event){
    event.preventDefault()
    window.location.href="./index.html"
})

// Add Money Form Show
document.getElementById('btn-add').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "block";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";
    document.getElementById('transaction-parent').style.display = "none";

})

// Cash Out Form Show
document.getElementById('btn-out').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "block";
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";
    document.getElementById('transaction-parent').style.display = "none";
})

// Transfer Money Button
document.getElementById('btn-transfer').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "block";
    document.getElementById('transaction-parent').style.display = "none";

    
})

// Transaction
document.getElementById('btn-transaction').addEventListener('click', function(event){
    event.preventDefault()
    console.log(transactionData)

    const transactionContainer = document.getElementById('transaction-container');
    for(data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center bg-white p-3 rounded-2xl">
                <div class="flex items-center">
                <div class="rounded-full p-3 bg-[#F4F5F7]">
                    <img class="mx-auto" src="Assets/wallet1.png" alt="">
                </div>
                <div class="ml-2">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i id="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }

    document.getElementById('transaction-parent').style.display = "block";
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";

})

