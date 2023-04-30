const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange() {
    let name = input.value.trim();
    if (name === " ") {
        nameLabel.textContent = "Anonymous";
    } else {
         nameLabel.textContent = input.value;
    }
}
