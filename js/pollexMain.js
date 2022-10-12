/////////sec3 (스크롤할 경우 박스가 나오는)/////////
const squareWrap = document.getElementById('squareWrap');
const aniBox = document.querySelectorAll('.aniBox');

function squareCont() {
    for (i = 0; i < aniBox.length; i++) {
        if (window.innerHeight > aniBox[i].getBoundingClientRect().top + 100) {
            aniBox[i].classList.add('sec3ANI');
        }
    }
}
window.addEventListener('scroll', squareCont);


/////////sec5 (센터별 사진 변경)/////////
const cenIcon = document.querySelectorAll('.icon');
const cenImg = document.querySelectorAll('.cen_img');
const cenTxt = document.querySelectorAll('.centxt');
const iconTxt = document.querySelectorAll('.icon_txt');

cenIcon.forEach(function (a) {
    a.addEventListener('mouseover', function (e) {
        let num = e.currentTarget.dataset.num;
        imgOn(num);
    });
});

function imgOn(n) {
    cenImg[0].classList.remove('on');
    cenImg[1].classList.remove('on');
    cenImg[2].classList.remove('on');
    cenImg[n].classList.add('on');

    cenTxt[0].classList.remove('on');
    cenTxt[1].classList.remove('on');
    cenTxt[2].classList.remove('on');
    cenTxt[n].classList.add('on');
    
    iconTxt[0].classList.remove('on');
    iconTxt[1].classList.remove('on');
    iconTxt[2].classList.remove('on');
    iconTxt[n].classList.add('on');
}