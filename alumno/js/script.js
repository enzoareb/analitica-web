const fullCardBox = document.getElementById("fulCardBox");
fullCard = document.getElementById("fulCard");
var body = document.getElementById("page-top");
const btnBack = document.getElementById("btn-back");



////////////////evento boton contraste/////////////////////////////////

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);

    //cambiar color btn flotante
    if (switchToTheme == 'dark') {
        btnBack.src = "img/btn-back-dark.png"
    } else {
        btnBack.src = "img/btn-back.png"
    }
});

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//guardar tema en localstorage
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
//seteo tema elegido o del sistema
setTheme(localStorage.getItem('theme') || preferedColorScheme);

//seteo color boton flotante
if (localStorage.getItem('theme') == 'dark') {
    btnBack.src = "img/btn-back-dark.png"
} else {
    btnBack.src = "img/btn-back.png"
}



////////////////////////////////////////////////////////////////////////7

var pathname = window.location.pathname;
var urls;
const urlIndex = ["https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96"];
const urlAlumnos = ["https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79"];
const urlRendimiento = ["https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79"];
const urlAhorro = [];

switch (pathname) {
    case "/alumno/index.html" || "/index.html" :
        urls = urlIndex;
        break;
    case "/alumno/alumnos.html" || "/alumnos.html":
        urls = urlAlumnos;
        break;
    case "/alumno/rendimientoAcademico.html" || "/rendimientoAcademico.html":
        urls = urlRendimiento;
        break;
    case "/alumno/ahorroenergetico.html" || "/ahorroenergetico.html":
        urls = urlAhorro;
    default:
        urls = urlIndex;
        break;
}

const card = document.getElementById("row");
var counter = 0;
for (let index = 0; index < urls.length; index++) {
    src = urls[index];
    if (counter == 0 || counter == 3) {
        card.innerHTML += "<div class='col-xl-7 col-lg-6'><div class='card shadow mb-4'><i class='fas fa-expand icon' id='boton'></i><iframe class='iframe' src=" + src + " frameborder='0' height='450' allowtransparency></iframe></div></div>";
        counter++;
        continue;
    }
    if (counter == 1 || counter == 2) {
        card.innerHTML += "<div class='col-xl-5 col-lg-4'><div class='card shadow mb-4'><i class='fas fa-expand icon' id='boton'></i><iframe class='iframe' src=" + src + " frameborder='0' height='450' allowtransparency></iframe></div></div>";
        counter++;
        continue;
    }
    if (counter == 4) {
        card.innerHTML += "<div class='col-xl-7 col-lg-6'><div class='card shadow mb-4'><i class='fas fa-expand icon' id='boton'></i><iframe class='iframe' src=" + src + " frameborder='0' height='450' allowtransparency></iframe></div></div>";
        counter = 1;
        continue;
    }
}

///////////evento full card///////////////////////////

var buttons = document.getElementsByClassName("icon");

for (let index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', () => {
        var iframes = document.getElementsByClassName("iframe");
        var srcIframe = iframes[index].getAttribute("src");
        fullCard.src = srcIframe;
        fullCardBox.style.display = "flex";
        body.style.position = "fixed";
    });

}

////////////////evento close full card//////////////////////////////////

const btnClose = document.querySelector("#btnClose");

btnClose.addEventListener('click', () => {
    //escondo full card
    fullCardBox.style.display = "none";
    //saco la url de la full card
    fullCard.src = "";
    //habilito scroll de la pagina
    body.style.position = "relative";
});