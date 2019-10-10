//JavaScript File

//Run greeting function when document is clicked
document.addEventListener('click', clickhandler);
document.addEventListener('dblclick', dblclickhandler)
document.addEventListener('mousedown', mousedownhandler)
document.addEventListener('mouseup', mouseuphandler)
//Define a greeting function
//Event functions

function clickhandler(){

    console.log('Click Event');
}

function dblclickhandler(){
    console.log("Double Click Handler")
}
function mousedownhandler(){
    console.log("Mouse Down Event")
}
function mouseuphandler(){
    console.log("Mouse Up Event")
}