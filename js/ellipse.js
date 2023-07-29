document.getElementById('btn-ellipse-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('ellipse-field-a');
    const triangleFieldH = getInputFieldById('ellipse-field-b');

    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    else{
    const pi = 3.1416; 
    const triangleArea = (pi * triangleFieldB * triangleFieldH).toFixed(1);
    const previousAreaTotal = getTextElementValueById('ellipse-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('ellipse-area', currentTriangleArea);
    }
    
})

getElementHoverById('ellipse-hover');