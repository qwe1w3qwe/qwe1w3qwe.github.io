// 스크롤 애니메이션

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// 서버 주소 복사

function copyIP(){

    navigator.clipboard.writeText(
        "newworld23.feathermc.gg"
    );

    alert("서버 주소가 복사되었습니다!");

}


// 관리자 번개 효과

const admin = document.querySelector(".admin");

if(admin){

    setInterval(() => {

        const flash = document.createElement("div");

        flash.style.position = "absolute";
        flash.style.top = "0";
        flash.style.left = "0";
        flash.style.width = "100%";
        flash.style.height = "100%";
        flash.style.background = "white";
        flash.style.opacity = "0.15";
        flash.style.pointerEvents = "none";

        admin.appendChild(flash);

        setTimeout(() => {
            flash.remove();
        }, 100);

    }, 5000);

}