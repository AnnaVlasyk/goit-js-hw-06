const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
 
function onFormSubmit(event) {
    event.preventDeafault();
    const formElements = event.currentTarget.elements;
    const mail = elements.email;
    const password = elements.password;

if (email.value === " " || password.value === " ") {
    return console.log("Please fill in all the fields!");
}
    
    const data = {
        [mail.name]: mail.value,
        [password.name]: password.value,
    };
    
    console.log(data);
    form.reset();
    
}
