// get input from input field 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}
// get elementid from deposit/withdraw/balance section

function getTextElement(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// set the value 
function setTextElement(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
