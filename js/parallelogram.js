document.getElementById('btn-parallelogram-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('parallelogram-field-b');
    const triangleFieldH = getInputFieldById('parallelogram-field-h');

    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    
    else{
    const triangleArea = ( triangleFieldB * triangleFieldH).toFixed(1);
    const previousAreaTotal = getTextElementValueById('parallelogram-area');
    const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
    setTextElementValueById('parallelogram-area', currentTriangleArea);
    }
})
getElementHoverById('parallelogram-hover');