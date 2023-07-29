
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const triangleFieldB = getInputFieldById('rectangle-field-w');
    const triangleFieldH = getInputFieldById('rectangle-field-l');

    if(validationCheck(triangleFieldB,triangleFieldH)===true){
        return;
    }
    else{

        const triangleArea = (triangleFieldB * triangleFieldH).toFixed(1);
  
        const previousAreaTotal = getTextElementValueById('rectangle-area');
        const currentTriangleArea =triangleArea+ (previousAreaTotal * 0);
        setTextElementValueById('rectangle-area', currentTriangleArea);
    }
    
})
getElementHoverById('rectangle-hover');