$(function(){
    setTimeout(function() {
        $("#load").fadeOut();
    },6000);

    //스크롤 이벤트 시작
    $(window).scroll(function(){

        //스크롤 위치값 알아내기
        let scTop = $(this).scrollTop();    //스크롤바 위치값 알아내는 제이쿼리 함수
    
        //스크롤바가 cont2일때는 load페이지 안 보이게
        let sec02 = $("#aboutMe").offset().top      //위치값은 정수형
    
        //조건문으로 클래스 조절
        if( scTop >= sec02){
    
            $("#load").hide();
    
        }
        else{
    
            setTimeout(function() {
                $("#load").fadeOut();
            },6000);
    
        }
    
        });


});