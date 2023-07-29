
function getInputAreaById(elementId) {

    const inputField = document.getElementById(elementId);
    
    const inputFieldValueString = inputField.innerText;
    
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function replaceTextElementValueById(elementId, newString) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newString;
}
    
document.getElementById('btn-convert1').addEventListener('click',function(){

    const result1 = getTextElementValueById('triangle-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('triangle-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m1', newString1);

})

