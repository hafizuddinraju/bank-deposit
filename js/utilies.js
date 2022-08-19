// console.log('u1');
function getInputFieldById(input){
    const getInputField = document.getElementById(input);
    const getInputFieldString = getInputField.value;
    const getInputFieldInt = parseFloat(getInputFieldString);
    return getInputFieldInt;

}

function getTextElementById(element){
    const getElement = document.getElementById(element);
    const getElementString = getElement.innerText;
    const getElementInt = parseFloat(getElementString);
    return getElementInt;
}

function setTextById(elementId, newValue){
    const textelement = document.getElementById(elementId);
    textelement.innerText = newValue;

}