
const inputNumbers = 4;
const EmailField=document.getElementById("input3");

//Plus option, 
for (let i = 1; i <= inputNumbers; i++) {
    const InputField = document.getElementById('input' + i);
    const ErrorMessage = document.getElementById('error' + i);
    const ErrorIcon=document.getElementById('errorIcon'+i);

    InputField.addEventListener('input', function () {
        if (InputField.value === "") {
            if(ErrorMessage.textContent=="Looks like this is not an email"){
                ErrorMessage.textContent="Email address cannot be empty";
                ErrorIcon.style.display='inline';
                InputField.classList.add('hiddenPlaceholder');
            }
            ErrorMessage.style.display = 'block';
            ErrorIcon.style.display='inline';
            InputField.classList.add('hiddenPlaceholder');
            
            
        } else {
            ErrorMessage.style.display = 'none';
            ErrorIcon.style.display='none';
            InputField.classList.remove('.hiddenPlaceholder')
        }
    });
}



const Submit = document.getElementById('submit');

Submit.addEventListener('click', function (event) {
    let isValid = true;

    // Is there any empty field?
    for (let i = 1; i <= inputNumbers; i++) {
        const InputField = document.getElementById('input' + i);
        const ErrorMessage = document.getElementById('error' + i);
        const ErrorIcon=document.getElementById('errorIcon'+i);


        if (InputField.value === "") {
            ErrorMessage.style.display = 'block';
            ErrorIcon.style.display='inline';
            InputField.classList.add('hiddenPlaceholder');
            isValid = false;
        } else {
            ErrorMessage.style.display = 'none';
            ErrorIcon.style.display='none';
            InputField.classList.remove('hiddenPlaceholder');
        }
    }
    //Is there a valid email address?
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isValidEmail = emailPattern.test(EmailField.value);
    const EmailError=document.getElementById("error3");
    const EmailIcon=document.getElementById("errorIcon3");
    if (!isValidEmail && EmailField.value!=""){
       
    EmailError.textContent="Looks like this is not an email";
    EmailField.value="";
    EmailField.classList.remove('hiddenPlaceholder');
    EmailField.placeholder="email@example/com";
    
    EmailField.classList.add('emailPlaceholderChange');
    EmailIcon.style.display='inline';
    EmailError.style.display='block';
    isValid=false;
    } else {EmailError.textContent="Email address cannot be empty";
    EmailField.classList.remove('emailPlaceholderChange');

    }

    // Send the form, if...
    if (isValid) {
        document.getElementById('myForm').submit();
    }

    // Megakadályozza az űrlap alapértelmezett küldését
    event.preventDefault();
});


