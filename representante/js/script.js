const fullCardBox = document.getElementById("fulCardBox");
fullCard = document.getElementById("fulCard");
var body = document.getElementById("page-top");
const btnBack = document.getElementById("btn-back");

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

///////////evento full card///////////////////////////

var buttons = document.getElementsByClassName("icon");

for (let index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', () => {
        var iframes = document.getElementsByClassName("iframe");
        var srcIframe = iframes[index].getAttribute("src");
        fullCard.src = srcIframe;
        fullCardBox.style.display = "flex";
        
    });
    
}

///////////////////////////////////////////////////////

var pathname = window.location.pathname;
var urls;
const urlIndex = ["https://pp1.ath.cx:8443/public/question/d1be80e4-67bb-471b-b073-8cfb6e1d6896", "https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/67b05ad7-6a37-4743-8afc-825763b13c3c", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79", "https://pp1.ath.cx:8443/public/question/d206d74e-11f3-490d-a069-e7df88deba8d", "https://pp1.ath.cx:8443/public/question/1a24b1d7-0d2b-4007-9945-ad44940cee0c", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/e9490684-d668-4d00-915f-7d4859a3555e", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96"];
const urlAlumnos = ["https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79"];
const urlRendimiento = ["https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79"];
const urlCalidadAire = ["https://pp1.ath.cx:8443/public/question/d1be80e4-67bb-471b-b073-8cfb6e1d6896"];
const urlHumedad = ["https://pp1.ath.cx:8443/public/question/45d0a206-cdfc-4a00-832c-4b71534bbc22", "https://pp1.ath.cx:8443/public/question/1a24b1d7-0d2b-4007-9945-ad44940cee0c"];
const urlRuido = ["https://pp1.ath.cx:8443/public/question/67b05ad7-6a37-4743-8afc-825763b13c3c"];
const urlTemperatura = ["https://pp1.ath.cx:8443/public/question/d206d74e-11f3-490d-a069-e7df88deba8d", "https://pp1.ath.cx:8443/public/question/1a24b1d7-0d2b-4007-9945-ad44940cee0c", "https://pp1.ath.cx:8443/public/question/e9490684-d668-4d00-915f-7d4859a3555e"];

switch (pathname) {
    case "/representante/index.html":
        urls = urlIndex;
        break;
    case "/representante/alumnos.html":
        urls = urlAlumnos;
        break;
    case "/representante/rendimientoAcademico.html":
        urls = urlRendimiento;
        break;
    case "/representante/calidadaire.html":
        urls = urlCalidadAire;
        break;
    case "/representante/humedad.html":
        urls = urlHumedad;
        break;
    case "/representante/ruido.html":
        urls = urlRuido;
        break;
    case "/representante/temperatura.html":
        urls = urlTemperatura;
        break;
    default:
        urls = [];
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