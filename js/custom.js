//화면 스크롤
const menuWrap = document.querySelector("#menu")
const menuBtn = document.querySelectorAll("#menu > .menu-wrap > li")
const contBox = document.querySelectorAll("#container > div");          //중간영역
const innerBox = document.querySelector(".inner .inner-box");

let movePoint = 0;      //휠 했을 때 이전, 이후구역 시작 위치값 받아줄 변수


//웹브라우저에 스크롤 이벤트
window.addEventListener("scroll",()=>{
    let scTop = window.scrollY //스크롤 할 때마다의 위치값

    // for (let j=0; j<gnbBtn.length; j++){
    //     gnbBtn[j].classList.remove("on");
    // }

    //메뉴 버튼 전부 비활성화
    for (let i=0; i <menuBtn.length; i++){

        menuBtn[i].classList.remove("on");
    }

    if(scTop >= contBox[0].offsetTop && scTop < contBox[1].offsetTop ){
        menuWrap.style.left = -12+"%";
        innerBox.style.paddingTop = 0+'px';
        innerBox.style.paddingBottom = 0+'px';
        innerBox.style.opacity = 0;
    }
    else if(scTop >= contBox[1].offsetTop && scTop < contBox[2].offsetTop){
        menuWrap.style.left = 4+"%";
        menuBtn[1].classList.add("on");
        innerBox.style.paddingTop = 0+'px';
        innerBox.style.paddingBottom = 0+'px';
        innerBox.style.opacity = 0;
    }
    else if(scTop >= contBox[2].offsetTop && scTop < contBox[3].offsetTop){
        menuWrap.style.left = 4+"%";
        menuBtn[2].classList.add("on");
        innerBox.style.paddingTop = 0+'px';
        innerBox.style.paddingBottom = 0+'px';
        innerBox.style.opacity = 0;             
    }
    else if(scTop >= contBox[3].offsetTop && scTop < contBox[4].offsetTop){
        menuWrap.style.left = 4+"%";
        menuBtn[3].classList.add("on");
        innerBox.style.paddingTop = 0+'px';
        innerBox.style.paddingBottom = 0+'px';
        innerBox.style.opacity = 0;
    }
    else if(scTop >= contBox[4].offsetTop ){
        menuWrap.style.left = 4+"%";
        menuBtn[4].classList.add("on"); 
        innerBox.style.paddingTop = 50+'px';
        innerBox.style.paddingBottom = 50+'px';
        innerBox.style.opacity = 1;
    }  

});



//버튼 클릭시 해당 태그 시작 값으로 스크롤바가 움직이도록
for(let k=0; k<menuBtn.length; k++){
    menuBtn[k].addEventListener("click",(e)=>{


        e.preventDefault();   

          //스크롤바 이동
          window.scrollTo({
            top:contBox[k].offsetTop,
            left:0,
            behavior:"smooth"
            });

    });
}

//more 버튼 클릭시 2번째 화면으로 이동
const moreBtn = document.querySelector(".more-wrap");
moreBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:contBox[1].offsetTop,
        left:0,
        behavior:"smooth"
    });

});


//중간구역에서 휠 했을 때 버튼도 바뀌는 이벤트

for (let i=0; i<contBox.length; i++){

    //중간구역 모두 이벤트 달아줌
    contBox[i].addEventListener("wheel",(e)=>{

        e.preventDefault();         //a태그가 아니라 스크롤이벤트랑 휠 중첩 막아주려고

        if(e.wheelDelta > 0){
            movePoint = e.currentTarget.previousElementSibling.offsetTop;
            //휠을 올리면 이전으로 올라감
        }
        
        else if(e.wheelDelta < 0){
            movePoint = e.currentTarget.nextElementSibling.offsetTop;
            //휠을 내리면 다음으로 내려감
        }

        window.scrollTo({
            top:movePoint,
            left:0,
            behavior:"smooth"
        });

    });

}