window.addEventListener('load',function(){
    window.addEventListener('customCFVStart',function(){
        var nameF = document.getElementById('contactName');
        var nameReF = document.getElementById('contactNameRe');
        var emailF = document.getElementById('contactEMail');
        var textF = document.getElementById('contactComment');

        document.getElementById('submit').addEventListener('click',function(){
            checkNameValidity();
            checkEmailValidity();
            checkIfEmpty();
        },false);

        //on load set required fields validity false

        //starts after the first input into any Name field
        nameF.addEventListener('keyup', checkNameValidity, false);
        nameReF.addEventListener('keyup', checkNameValidity, false);


        //starts after the first input into the email field
        //nameF.addEventListener('change', function(){
        //}, false);

        //starts after the first input into the email field
        var email = emailF;
        emailF.addEventListener('keyup', checkEmailValidity, false);
    },false);
},false);

function checkNameValidity() {
    
    //regex-validation
    var error = "";
    var nameVal = nameF.value;
    var nameReVal = nameReF.value;
    
    if (nameVal.match(/^[(\w) ]{4,30}$/)) {
    } else {
        error = error + "This name was not accepted. ";
    	if(nameVal.match(/\W/)){
            error = error + "Only names composed of alpha-numeric charachters (and '_') are accepted. ";
        }else{
            if(nameVal.match(/^\w{1,3}$/)){
                error = error + "The Name is too short. ";
            }
            if(nameVal.match(/^\w{31,}$/)){
                error = error + "The Name is too long. ";
            }
        }

    }

    if(nameVal !== nameReVal){
        nameReF.setCustomValidity("Please make sure this Field matches the one above it. ");
    }else{
        nameReF.setCustomValidity("");
    }

    nameF.setCustomValidity(error);
    
    
    //css-manipulation
    if (nameF.validity.valid) {
        nameF.style.color = 'green';
    } else {
        nameF.style.color = 'red';
    }        
    if (nameReF.validity.valid) {
        nameReF.style.color = 'green';
    } else {
        nameReF.style.color = 'red';
    }        
}

function checkIfEmpty(){
     if (nameF.value === ""){//name empty
        nameF.setCustomValidity('The field "Your Name" is required. ');
    }
    if (nameReF.value === ""){//nameRe empty
        nameReF.setCustomValidity('The field " Repeat Your Name" is required. ');
    }
    if(emailF.value === ""){
        emailF.setCustomValidity('The field "Your E-Mail Adress" is required. ');
    }
    if(textF.value === ""){
        textF.setCustomValidity('The field "Your Message" is required. ');
    }
}   