document.getElementById('newsletter').addEventListener("click", openPopup, false);
document.getElementById('popup-closebutton').addEventListener("click", closePopup, false);

var email = document.getElementById('emailInput');
    
document.getElementById('emailInput').addEventListener('keyup', checkPasswordValidity, false);

function openPopup() {
    document.getElementById('emailpopup').style.display = 'block';
}
function closePopup() {
    document.getElementById('emailpopup').style.display = 'none';
}

function checkPasswordValidity() {
    email.setCustomValidity('Please enter your email address.');
    if (email.value=='') {
        email.setCustomValidity('Please enter your email address.');
    } else {
        email.setCustomValidity('a');
    }        
};


    