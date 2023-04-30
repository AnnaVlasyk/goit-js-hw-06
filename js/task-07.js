const inputFontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('span');

inputFontSizeControl.addEventListener('input', inputFontSizeChange);
text.style.fontSize = `${inputFontSizeControl.value}` + 'px';

function inputFontSizeChange() {
text.style.fontSize = (`${inputFontSizeControl.value}px`);
    console.log(`${inputFontSizeControl.value}px`);
}
