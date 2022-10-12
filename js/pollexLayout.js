////햄버거클릭시////
const ham = document.getElementById('ham');
const hamChild = ham.childNodes;
const logo = document.getElementsByClassName('logo')[0];
const logoW = document.getElementsByClassName('logoC')[0];
const menuWrap = document.getElementsByClassName('BlueMenu')[0];

ham.addEventListener('click', hamClick);

function hamClick() {
    if (ham.classList.contains('active') === true) {
        ham.classList.remove('active');
        logo.style.opacity = 1;
        logoW.style.opacity = 0;
        menuWrap.style.display = 'none';
    } else {
        ham.classList.add('active');
        logo.style.opacity = 0;
        logoW.style.opacity = 1;
        menuWrap.style.display = 'block';
    }
}
////퍼랭이매뉴 반응형시 ////
const test = document.getElementsByClassName('mTitle');
var i;

for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('click', function () {
        const mToggle = document.querySelectorAll('.mToggle');
        // mToggle[i].classList.toggle('active');
        
        for (j = 0; j < mToggle.length; j++) {
            mToggle[j].style.maxHeight = null;
        }
        if (mToggle[i].style.maxHeight) {
            mToggle[i].style.maxHeight = null;
        } else {
            mToggle[i].style.maxHeight = mToggle[i].scrollHeight + 'px';
        }
    });
}