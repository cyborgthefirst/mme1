document.getElementById('newsletter').addEventListener("click", openPopup, false);
document.getElementById('popup-closebutton').addEventListener("click", closePopup, false);
//document.getElementById('emailInput').addEventListener('change', checkPasswordValidity, false);

function openPopup() {
    document.getElementById('emailpopup').style.display = 'block';
}
function closePopup() {
    document.getElementById('emailpopup').style.display = 'none';
}
/*
function checkPasswordValidity() {
    var email = document.getElementById('emailInput');
    if (email.validity.valueMissing) {
        email.setCustomValidity('Please enter your email address.');
    } else {
        email.setCustomValidity('');
    }        
};
*/   