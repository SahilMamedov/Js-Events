let container = document.getElementById("container")
let marginLeftRigth=0;
let marginTopButtom =0;

document.addEventListener("keydown",function(event){

    if(event.keyCode===37){
        marginLeftRigth-=2;
        container.style.marginLeft=`${marginLeftRigth}px`;
        
     }
    if(event.keyCode===38){
        marginTopButtom-=2;
        container.style.marginTop=`${marginTopButtom}px`;
        
    }
    if(event.keyCode===39){
        marginLeftRigth+=2;
        container.style.marginLeft=`${marginLeftRigth}px`;
        
    }
    if(event.keyCode===40){
        marginTopButtom+=2;
        container.style.marginTop=`${marginTopButtom}px`;
        
    }
    })