var email = document.getElementById('contactEMail');

//starts after the first iput into the email field
email.addEventListener('keyup', checkEmailValidity, false);

function checkEmailValidity() {
    
    //regex-validation
    var error = "";
    var emVal = email.value;
    
    if(emVal === ""){
        //set back state to neither wrong nor right
        return;
    }
    
    if (emVal.match(/^[\w%+-.']+@[\w-]+(\.[a-zA-Z]+)+$/)) {
    } else {
    	error = error + "That is not an accepted email address. ";
        if(emVal.match(/@/)){
            if(emVal.match(/^[+-\w]+?@/)){
            } else {
               error = error + "The string before the @ -symbol may only contain &,+ ,- ,. ,' and alphanumeric charachters. ";
            }
            if(emVal.value.match(/^[^@]*@[^@]*$/)){
            } else {
               error = error + "Your email address may only contain one @. ";
            }
            if(emVal.value.match(/@[\w-]+(\.[a-zA-Z]+)+$/)){
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
    