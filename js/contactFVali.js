var nameF = document.getElementById('contactName');
var emailF = document.getElementById('contactEMail');

//on load set required fields validity false

//starts after the first input into the email field
nameF.addEventListener('keyup', checkNameValidity, false);

//starts after the first input into the email field
nameF.addEventListener('change', function(){
    alert("d");
}, false);


//starts after the first input into the email field
emailF.addEventListener('keyup', checkEmailValidity, false);


function checkNameValidity() {
    
    alert("c");

    //regex-validation
    var error = "";
    var nameVal = nameF.value;
    
    if (nameVal === ""){//name empty
        nameF.setCustomValidity('The field "Your Name" is required. ');
    }
    
    if (nameVal.match(/^(\w){4,30}$/)) {
    } else {
        error = error + "This name was not accepted. ";
    	if(nameVal.match(/\W/)){
            error = error + "Only names composed of alpha-numeric charachters (and '_') are accepted. ";
        }else{
            if(nameVal.match(/^\w{1,3}$/)){
                error = error + "The Name is too short";
            }
            if(nameVal.match(/^\w{31,}$/)){
                error = error + "The Name is too short";
            }
        }
    }
        
    nameF.setCustomValidity(error);
    
    
    
    //css-manipulation
    if (nameF.validity.valid) {
        nameF.style.color = 'green';
    } else {
        nameF.style.color = 'red';
    }        
}


function checkEmailValidity() {
    
    //regex-validation
    var error = "";
    var emVal = emailF.value;
    
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
            if(emVal.match(/^[^@]*@[^@]*$/)){
            } else {
               error = error + "Your email address may only contain one @. ";
            }
            if(emVal.match(/@[\w-]+(\.[a-zA-Z]+)+$/)){
            } else {
               error = error + "The domain of the email was not accepted. ";
            }            
        } else {
        	error = error + "It has to contain one @ -symbol. "
        }
    }
        
    emailF.setCustomValidity(error);
    
    
    
    //css-manipulation
    if (emailF.validity.valid) {
        emailF.style.color = 'green';
    } else {
        emailF.style.color = 'red';
    }        
}
    