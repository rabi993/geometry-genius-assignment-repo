
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
document.getElementById('btn-convert2').addEventListener('click',function(){

    const result1 = getTextElementValueById('rectangle-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('rectangle-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m2', newString1);
    

})
document.getElementById('btn-convert3').addEventListener('click',function(){

    const result1 = getTextElementValueById('parallelogram-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('parallelogram-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m3', newString1);

})
document.getElementById('btn-convert4').addEventListener('click',function(){

    const result1 = getTextElementValueById('rhombus-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('rhombus-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m4', newString1);

})
document.getElementById('btn-convert5').addEventListener('click',function(){

    const result1 = getTextElementValueById('pentagon-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('pentagon-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m5', newString1);

})
document.getElementById('btn-convert6').addEventListener('click',function(){

    const result1 = getTextElementValueById('ellipse-area');
    const result2 = (result1 / 10000).toFixed(2);

    setTextElementValueById('ellipse-area', result2);
    const newString1="m²";
    replaceTextElementValueById('m6', newString1);
})
