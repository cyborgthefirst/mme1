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

    var error = "";

    if (email.value.match(/^[\w%+-.']+@[\w-]+(\.[a-zA-Z]+)+$/)) {
    } else {
    	error = error + "That is not an accepted email address. ";
        if(email.value.match(/@/)){
            if(email.value.match(/^[+-\w]+?@/)){
            } else {
               error = error + "The string before the @ -symbol may only contain &,+ ,- ,. ,' and alphanumeric charachters. ";
            }
            if(email.value.match(/^[^@]*@[^@]*$/)){
            } else {
               error = error + "Your email address may only contain one @. ";
            }
            if(email.value.match(/@[\w-]+(\.[a-zA-Z]+)+$/)){
            } else {
               error = error + "The domain of the email was not accepted. ";
            }            
        } else {
        	error = error + "It has to contain one @ -symbol. "
        }
    }
    
        
    email.setCustomValidity(error);
               
    //css-manipulation
    if (email.validity.valid) {
        email.style.color = 'green';
    } else {
        email.style.color = 'red';
    }        
}
    