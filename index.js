// Login button functionality
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }

    else{
        alert("Invalid Credentials")
    }
})