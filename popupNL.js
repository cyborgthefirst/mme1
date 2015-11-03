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

    var error = "Die eingegebene Adresse ";

    if (email.value.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/)) {
        email.setCustomValidity('');
    }else{
    	email.setCustomValidity("has to be");
    
    } else {
        if(email.value.match(/.*@.*/)){

        }else{
        	error = error + "muss ein @ enthalten"
        }
        if(email.value.match(/.*\..*/)){
        	
        }
    }
    
    //css-manipulation
    if (email.validity.valid) {
        email.style.color = 'green';
    } else {
        email.style.color = 'red';
    }        
}
    