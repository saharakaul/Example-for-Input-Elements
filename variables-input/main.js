// Variables and Input
'use strict';

//Event Listener
document.getElementById('submit-Btn').addEventListener('click', displayMessage)

function displayMessage() {
    let firstName = document.getElementById('f-name').value;
    let lastName = document.getElementById('last-name').value;
    let fullName = firstName + ' ' + lastName;



    let message = ('Hi ' + fullName + ' . Your surname is ' + lastName + ' and your first name is ' + firstName + ' . ');
    document.getElementById('output').innerHTML = message;

}