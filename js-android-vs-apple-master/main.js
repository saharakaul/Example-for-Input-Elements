//Android vs Apple
//When click androidBtn
document.getElementById('androidBtn').addEventListener('click', setAndroid)
document.getElementById('appleBtn').addEventListener('click', setApple)

function setAndroid(){
    console.log('set android');
    document.getElementById('main-img').src = 'images/Android-Logo.jpg';
    document.getElementById('explore').href = 'https://www.android.com';
    document.getElementById('explore').classList.add('androidactive');
    document.getElementById('website').innerHTML = 'Android Home';
    document.getElementById('body').style.backgroundColor = '#a4c93b';
}

function setApple(){
    console.log('set apple');
    document.getElementById('main-img').src = 'images/Apple-Logo.jpg';
    document.getElementById('explore').href = 'https://www.apple.com';
    document.getElementById('explore').classList.add('appleactive');
    document.getElementById('website').innerHTML = 'Apple Home';
    document.getElementById('body').style.backgroundColor = '#b6bcca';
}