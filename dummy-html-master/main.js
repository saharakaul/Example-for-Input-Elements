//HTML interaction
'use strict';

//Event listener
document.getElementById('img1').addEventListener('click', clickhandler);
document.addEventListener('keydown', keydownHandler);

//Event Funcitons
function clickhandler() {
    //Update content
    document.getElementById('main-heading').innerHTML = 'AWESOME HEADING!';
    //Update source attribute of image
    document.getElementById('img1').src= 'images/lorem-ipsum2.jpg';
    //Update href of link
    document.getElementById('link1').href = 'https://www.w3schools.com/html/default.asp';

    //Update style-remember if there is a hyphen then you have to remove it and capalize the second word
    document.getElementById('para2').style.fontFamily = 'Papyrus';
    //Add a class to an element
    document.getElementById('li2').classList.add('center');
}
function keydownHandler() {
    //Remove class from li2
    document.getElementById('li2').classList.toggle('center');
}