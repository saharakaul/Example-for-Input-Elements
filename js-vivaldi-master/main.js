//Vivaldi Js Example

//When Summer Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer)
document.getElementById('autumnBtn').addEventListener('click', setAutumn)
document.getElementById('winterBtn').addEventListener('click', setWinter)
document.getElementById('springBtn').addEventListener('click', setSpring)

function setSummer(){
    console.log('set summer');
    //-change the text to sumemr concerto
    document.getElementById('season-text').innerHTML = 'Summer';
    //-change main image
    document.getElementById('main-img').src = 'images/summer.jpg';
    //-change background color
    document.body.style.backgroundColor = '#1BA848'
    //-change audio source
    document.getElementById('song').src = 'songs/vivaldi-summer.mp3';
    //-update active border on buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    document.getElementById('summerBtn').classList.add('activeBtn');
}

function setAutumn() {
    console.log('set autumn');
    document.getElementById('season-text').innerHTML = 'Autumn';
    document.getElementById('main-img').src = 'images/autumn.jpg';
    document.body.style.backgroundColor = '#FE6732';
    document.getElementById('song').src = 'songs/vivaldi-autumn.mp3';

    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.add('activeBtn')

}

function setWinter() {
    console.log ('set winter');
    document.getElementById('season-text').innerHTML = 'Winter';
    document.getElementById('main-img').src = 'images/winter.jpg';
    document.body.style.backgroundColor = '#1C64B9';
    document.getElementById('song').src = 'songs/vivaldi-winter.mp3';

    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.add('activeBtn')

}
function setSpring() {
    console.log('set spring')
    document.getElementById('season-text').innerHTML = 'Spring';
    document.getElementById('main-img').src = 'images/spring.jpg';
    document.body.style.backgroundColor = '#0E94D1';
    document.getElementById('song').src = 'songs/vivaldi-spring.mp3';

    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('autumn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('springBtn').classList.add('activeBtn')

}