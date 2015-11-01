document.getElementById('newsletter').addEventListener("click", openPopup, false);
document.getElementById('popup-closebutton').addEventListener("click", closePopup, false);

var email = document.getElementById('emailInput');
    
email.addEventListener('keyup', checkPasswordValidity, false);

function openPopup() {
    document.getElementById('emailpopup').style.display = 'block';
}
function closePopup() {
    document.getElementById('emailpopup').style.display = 'none';
}

function checkPasswordValidity() {
    
    //regex-validation
    if (email.value.match(/email/)) {
        email.setCustomValidity('');
    } else {
        email.setCustomValidity('has to be "email"');
    }
    
    //css-manipulation
    if (email.validity.valid) {
        email.style.color = 'green';
    } else {
        email.style.color = 'red';
    }        
}
    