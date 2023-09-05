const nameError = document.getElementById("name-Error");
const numberError = document.getElementById("number-Error");
const emailError = document.getElementById("email-Error");
const msgError = document.getElementById("msg-Error");
const submitError = document.getElementById("submit-Error");

function nameValidation(){
    let name = document.getElementById('contact-Name').value;
    if(name.length==0){
        nameError.innerHTML= "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-solid fa-circle-check" style="color: #15ce12"></i>' ;
    return true;
}

function numberValidation(){
    let number = document.getElementById('contact-Number').value;
    if(number.length==0){
        numberError.innerHTML= "Number is required";
        return false;
    }
    if(!number.match(/^[0-9]{10}/)){
        numberError.innerHTML = "Enter 10 digit no.";
        return false;
    }
    numberError.innerHTML = '<i class="fa fa-solid fa-circle-check" style="color: #15ce12"></i>' ;
    return true;
}

function emailValidation(){
    let email = document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML= "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z_\.\-0-9]*@[a-z]*\.[a-z]{2,3}$/)){
        emailError.innerHTML = "email is not valid";
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-solid fa-circle-check" style="color: #15ce12"></i>' ;
    return true;
}


function msgValidation(){
    let msg = document.getElementById('contact-msg').value;
    let left = 30 - msg.length;
    if(msg.length==0){
        msgError.innerHTML= "Minimum 30 letters required";
        return false;
    }
    if(!(msg.length>= 30) ){
        msgError.innerHTML = `${left} more ${left===1 ? "character" : "characters"} remaining`;
        return false;
    }
    msgError.innerHTML = '<i class="fa fa-solid fa-circle-check" style="color: #15ce12"></i>' ;
    return true;
}

function validateForm(){
    if(!nameValidation()||!numberValidation() || !emailValidation() || !msgValidation()){
        submitError.style.display="block";
        submitError.innerHTML = "Please Fix the error to submit";
        setTimeout(function(){
            submitError.style.display="none";
        },3000);
        return false;
    }
    submitError.innerHTML = "";
    return true;
}