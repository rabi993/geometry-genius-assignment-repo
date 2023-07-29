
document.getElementById('btn-triangle-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('triangle-field-b');
    const triangleFieldH = getInputFieldById('triangle-field-h');

    
    if(validationCheck(triangleFieldB,triangleFieldH) === true ){
        return;
    }
    else{
    const triangleArea = (0.5 * triangleFieldB * triangleFieldH).toFixed(1);
    const previousAreaTotal = getTextElementValueById('triangle-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('triangle-area', currentTriangleArea);
    }
})
 getElementHoverById('triangle-hover');
  
