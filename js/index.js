/***************** nav ********************/

$(function(){
  var $firstmenu = $('nav > ul > li'),
      $header = $('header');
  
  // 마우스가 들어왔을 때
  $firstmenu.mouseenter(function(){
    $header.stop().animate({height:'300px'}, 200);
    $header.css('background-color', 'white'); // 배경색을 흰색으로 변경
  })
  .mouseleave(function(){
    // 마우스가 나갔을 때
    $header.stop().animate({height:'80px'}, 200);
  });  
});


//라인 따라 줄 생기기

// const elLi =document.querySelectorAll('.mainMune');
// const elMenu =document.querySelectorAll('.mainMune > a');
// const elBar =document.querySelector('.bar');

// elLi.forEach(function(aa){
//     aa.onmouseover = function(){
//         elBar.style = `width:${this.offsetWidth}px;
//                         left:${this.offsetLeft}px;`;                    // nav 라인 따라 빨간줄 생기기!!
//         // if(this.children[1]) this.children[1].style.display = 'block';  //서브메뉴 나타내기!!
//     }
//     aa.onmouseout = function(){
//         elBar.style = `width:0;
//                         left:${this.offsetLeft}px;`                     // nav 라인 따라 빨간줄 생기기!!
//         // if(this.children[1]) this.children[1].style.display = 'none';   //서브메뉴 나타내기!!
//     }
// })


const menuItems = document.querySelectorAll('.menu-item');
const contentItems = document.querySelectorAll('.content-item');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('mouseenter', () => {
        if (!menuItem.classList.contains('hovered')) {
            menuItem.classList.add('hovered');
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        menuItem.classList.remove('hovered');
    });
});

contentItems.forEach(contentItem => {
    contentItem.addEventListener('mouseenter', () => {
        if (!contentItem.classList.contains('hovered')) {
            contentItem.classList.add('hovered');
        }
    });

    contentItem.addEventListener('mouseleave', () => {
        contentItem.classList.remove('hovered');
    });
});









/*네비 메뉴 스크롤 내리면 생기기*/  

const header = document.querySelector('header')

window.addEventListener('scroll', function(){
        header.classList.add('on');
    
        if(window.scrollY === 0){
        header.classList.remove('on');
        }
    })






  /*글씨 등장*/
  let targets = document.querySelectorAll('.ani_txt')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('on');
            //observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('on');
        }
    });
    })

targets.forEach(target=> {
    observer.observe(target);
})





/*메인슬라이드*/

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });