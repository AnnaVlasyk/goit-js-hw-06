const input = document.querySelector('#validation-input');
const DATA_LENGTH = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", changeInput);

function changeInput() {
    const inputLength = input.value.length;
    if (inputLength === DATA_LENGTH) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}
