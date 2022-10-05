console.log('Hello INFSCI 2560!');

// this is a function for showing trailer
function btn_cyber() {
    let showTrailer = document.getElementById("trailer");
    let showTrailerVal = window.getComputedStyle(showTrailer, null).getPropertyValue("visibility");
    let btnShowTrailer = document.getElementById("cybr-btn");
    if (showTrailerVal == "hidden" && btnShowTrailer.childNodes[0].textContent == "SHOW TRAILER") {
        showTrailer.style.visibility = "visible";
        btnShowTrailer.childNodes[0].textContent = "HIDE TRAILER";
    } else if (showTrailerVal = "visible" && btnShowTrailer.childNodes[0].textContent == "HIDE TRAILER") {
        showTrailer.style.visibility = "hidden";
        btnShowTrailer.childNodes[0].textContent = "SHOW TRAILER";
    }
    console.log(showTrailer);
};

function btn_change() {
    let opState = document.getElementById("op");
    let edState = document.getElementById("ed");
    let op = window.getComputedStyle(opState, null).getPropertyValue("display");

    let ed = window.getComputedStyle(edState, null).getPropertyValue("display");
    console.log(op);
    console.log(ed);

    if (op == "block") {
        opState.style.display = "none";
        edState.style.display = "block";
    };
    if (op == "none") {
        opState.style.display = "block";
        edState.style.display = "none";
    };
};

// this is a function for changing theme to theme1
function theme1() {
    let bg = document.getElementsByTagName("body");
    bg[0].style.background = "url('https://cdn.glitch.global/d17b000a-ffac-4ef8-9eb3-c67973e04af4/background3.jpeg?v=1663722503379') no-repeat center center";
    bg[0].style.backgroundSize = "cover";
}
// this is a function for changing theme to theme2
function theme2() {
    let bg = document.getElementsByTagName("body");
    bg[0].style.background = "url('https://cdn.glitch.global/d17b000a-ffac-4ef8-9eb3-c67973e04af4/bg6.png?v=1663725851198') no-repeat center center";
    bg[0].style.backgroundSize = "cover";

}

function titleBig() {
    let title = document.getElementById("header-title")
    title.style.textShadow = "5px 5px 5px rgb(0, 0, 0)";
    title.style.fontSize = "25px";
}

function titleSmall() {
    let title = document.getElementById("header-title")
    title.style.textShadow = "5px 5px 5px rgb(255, 255, 255)";
    title.style.fontSize = "20px";
}

let page = window.location.pathname;

let title_big = document.getElementById("header-title");
let title_small = document.getElementById("header-title");

let bgchange1 = document.getElementById("theme1");
let bgchange2 = document.getElementById("theme2");

let cybr_btn = document.getElementById("cybr-btn");

let change = document.getElementById("change-btn");


switch (page) {
    case "/":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        cybr_btn.addEventListener('click', btn_cyber);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        break;
    case "/index.html":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        cybr_btn.addEventListener('click', btn_cyber);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        break;
    case "/story.html":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        break;
    case "/characters.html":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        break;
    case "/gallery.html":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        break;
    case "/preview.html":
        title_big.addEventListener('mouseover', titleBig);
        title_small.addEventListener('mouseout', titleSmall);
        bgchange1.addEventListener('click', theme1);
        bgchange2.addEventListener('click', theme2);
        change.addEventListener('click', btn_change);
        break;
}