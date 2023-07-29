
document.getElementById('btn-rhombus-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('rhombus-field-d1');
    const triangleFieldH = getInputFieldById('rhombus-field-d2');
    
    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    
    else{
    const triangleArea = (0.5 * triangleFieldB * triangleFieldH).toFixed(1);
    const previousAreaTotal = getTextElementValueById('rhombus-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('rhombus-area', currentTriangleArea);
    }
    
})
getElementHoverById('rhombus-hover');