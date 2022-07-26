var percent = "%";
var message = "Try again later";

// JAVASCRIPT PROGRESS AND FUNCTION
var jsProgress = document.getElementById('jsProgress');
var JsError = document.getElementById("javaScript");
jsProgress.textContent = 55 + percent;

function javaScript(){
JsError.textContent = message;
}

//HTML PROGRESS
var htmlProgress = document.getElementById("htmlProgress");
var htmlError = document.getElementById("html")
htmlProgress.textContent = 90 + percent;

function html(){
    htmlError.textContent = message;
}

//CSS PROGRESS
var cssProgress = document.getElementById("cssProgress");
var cssError = document.getElementById("css")
cssProgress.textContent = 80 + percent;

function css(){
    cssError.textContent = message;
}

// Nav Toggle

const primaryNav = document.querySelector('.nav-link');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility ==="true"){
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
});
navToggle();