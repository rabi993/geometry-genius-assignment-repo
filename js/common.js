function getInputFieldById(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    
    const inputFieldValueString = inputField.value;
    
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    return inputFieldValue;
}


function getTextElementValueById(elementId) {

    const textElement = document.getElementById(elementId);
    
    const textElementValueString =textElement.innerText; 
    
    const textElementValue = parseFloat(textElementValueString); 
    return textElementValue;
}


function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// hover color

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.random() * 256);
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  function getElementHoverById(elementId){

    document.getElementById(elementId).addEventListener("mouseover", function(){
    document.getElementById(elementId).style.backgroundColor = randomColor();
    });

}

function validationCheck(field1,field2){
    if(isNaN(field1) || isNaN(field2) || field1 <= 0 || field2 <= 0 ){
    
        alert('please enter a valid number');
        return true; 
    }
    return false;
}
