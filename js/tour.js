document.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById("slide");
    
    const toDown = () => {
        slide.style.top = 0;//내려왔다
        slide.style.transition = "top 0.5s";

        setTimeout( zz , 500);
    }
    const zz = () => {
        slide.style.top = "-300px";//올라갔다
        slide.style.transition = "none";//시간개념없음. 즉시실행
        slide.prepend( slide.children[2]);
    }

    setInterval( toDown , 2500 );

    /***********************************/
    const notice_li = document.querySelectorAll("#notice li:not(:first-child)");
    const black    =  document.getElementById("black");
    const pop_btn  =  document.querySelector("#popup button");

    const popup = i => {
        if(i == "닫기") black.style.display = "none";
        else           black.style.display = "block";
    }

    notice_li.forEach(   i => {
        i.children[0].addEventListener("click", popup );
    });

    pop_btn.addEventListener("click", ()=> { popup("닫기"); });


});//전체 끝부분....................................