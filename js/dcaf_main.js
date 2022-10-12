//SEC1 탭매뉴
document.getElementById("defaultOpen").click();
function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
      tabLinks[i].className = tabLinks[i].className.replace(" GsectionO", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.className += " GsectionO";

}
//SEC1 스위퍼
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  },
);
///////////////////////
//SEC3 문화예술공간
const cultuerImg = document.querySelectorAll('.cultuer_ani');
function scrollPlay() {
    for (i = 0; i < cultuerImg.length; i++) {
        if (window.innerHeight > cultuerImg[i].getBoundingClientRect().top + 100) {
            cultuerImg[i].classList.add('ani');
        }
    }
}
window.addEventListener('load', scrollPlay);
window.addEventListener('scroll', scrollPlay);