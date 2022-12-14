const fullCardBox = document.getElementById("fulCardBox");
const fullCard = document.getElementById("fulCard");
const body = document.getElementById("page-top");
const btnBack = document.getElementById("btn-back");
const btnSwitch = document.querySelector("#switch");
const btnClose = document.querySelector("#btnClose");

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
    btnBack.src = "img/btn-back-dark.png";
} else {
    btnBack.src = "img/btn-back.png";
}

///////////////////////////////////////////////////////

var pathname = window.location.pathname;
var urls;
const urlIndex = ["https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/0b328a8f-a375-4359-89a8-5ce0edcbe11f", "https://pp1.ath.cx:8443/public/question/d5935bc3-2b4b-4b07-9639-6313ff0afb60", "https://pp1.ath.cx:8443/public/question/cc804e6e-b813-4704-8e12-46a65d6c75e9","https://pp1.ath.cx:8443/public/question/1afe9c60-b66f-4abf-9e92-9841b01bf6af", "https://pp1.ath.cx:8443/public/question/86a51d79-08d6-4d8f-ace2-607961566cbf", "https://pp1.ath.cx:8443/public/question/f4477491-a1ec-4c7e-9c98-6c5913fb2af8", "https://pp1.ath.cx:8443/public/question/16d49253-0d11-4f8a-b06a-16f6b401d762", "https://pp1.ath.cx:8443/public/question/62583e95-8add-463d-897b-b5f78132f232", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/164e7709-d178-4e48-8ad9-9cc802e0809b", "https://pp1.ath.cx:8443/public/question/3d070573-6f44-4255-ae39-af36f915a013", "https://pp1.ath.cx:8443/public/question/7115bdb6-3d8a-4aef-a40d-c3e86705d387", "https://pp1.ath.cx:8443/public/question/dd952ee8-cfdc-44e0-a2d4-176b58309a87", "https://pp1.ath.cx:8443/public/question/6fd8fbca-093b-4016-81df-68173f1ecc89", "https://pp1.ath.cx:8443/public/question/f543ea9d-5ab5-4724-8755-669cece99abc", "https://pp1.ath.cx:8443/public/question/6650bd24-b901-4fe7-b69d-070fc78d8e2b", "https://pp1.ath.cx:8443/public/question/ba6cf25f-2296-4999-b806-a2910b955723", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79","https://pp1.ath.cx:8443/public/question/c10afe09-afcd-463f-9885-40d1ba42ee5e","https://pp1.ath.cx:8443/public/question/156d449e-3c88-41f7-8ae8-1ddff7595179","https://pp1.ath.cx:8443/public/question/f1a46125-227b-4360-a38d-4d9830107083","https://pp1.ath.cx:8443/public/question/fcf6ccbc-96f7-4f17-b626-58899b862471","https://pp1.ath.cx:8443/public/question/f14d7647-ca94-4de9-bcdd-3befbf24dc56"];
const urlAlumnos = ["https://pp1.ath.cx:8443/public/question/3bca1b9f-0526-4e1b-85ba-60a765de27e2", "https://pp1.ath.cx:8443/public/question/b78f6bee-7671-4fc8-8d72-8c1f2624104b", "https://pp1.ath.cx:8443/public/question/ae38a0e4-7d58-4102-bd80-607597c7d9fb", "https://pp1.ath.cx:8443/public/question/a5947831-7b1d-409c-9a1f-848cfb0bfed1", "https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/0078174e-6fec-4ba9-b747-47ec08069ac3"];
const urlRendimiento = ["https://pp1.ath.cx:8443/public/question/d9b0fbe7-6ab3-40d7-b5c4-6823d2fd8db6", "https://pp1.ath.cx:8443/public/question/70de7875-e5d8-4134-b613-6da5c7e6e509", "https://pp1.ath.cx:8443/public/question/214553bb-2e78-4250-ab2a-c8734ef0762d", "https://pp1.ath.cx:8443/public/question/aa8ba0c5-0f5e-40cb-addf-5e15395acc96", "https://pp1.ath.cx:8443/public/question/62fb7df7-8e67-4e9b-ba05-275ca77b1c79"];
const urlAhorro = ["https://pp1.ath.cx:8443/public/question/c10afe09-afcd-463f-9885-40d1ba42ee5e","https://pp1.ath.cx:8443/public/question/156d449e-3c88-41f7-8ae8-1ddff7595179","https://pp1.ath.cx:8443/public/question/f1a46125-227b-4360-a38d-4d9830107083","https://pp1.ath.cx:8443/public/question/fcf6ccbc-96f7-4f17-b626-58899b862471","https://pp1.ath.cx:8443/public/question/af9b7d86-c037-4eea-8e7c-ebf56dc616b4","https://pp1.ath.cx:8443/public/question/f14d7647-ca94-4de9-bcdd-3befbf24dc56","https://pp1.ath.cx:8443/public/question/c13bf2b7-5776-48e8-bc26-64dad7b8200a","https://pp1.ath.cx:8443/public/question/8441643e-b767-4da1-bca4-3f33b83729ac","https://pp1.ath.cx:8443/public/question/86c37c35-c26b-4f2d-b4d4-83bdf50defd4","https://pp1.ath.cx:8443/public/question/288bbdd8-fd87-4308-8769-611c0cf06cb7","https://pp1.ath.cx:8443/public/question/15acdbad-701b-49b9-90f1-c45d7e581b70","https://pp1.ath.cx:8443/public/question/4c1a7c53-3116-438f-83f2-1fcee89fd0ca","https://pp1.ath.cx:8443/public/question/a966d95f-509d-47dc-9889-807a14e138a6"];
const urlCalidadAire = ["https://pp1.ath.cx:8443/public/question/0b328a8f-a375-4359-89a8-5ce0edcbe11f", "https://pp1.ath.cx:8443/public/question/d5935bc3-2b4b-4b07-9639-6313ff0afb60", "https://pp1.ath.cx:8443/public/question/cc804e6e-b813-4704-8e12-46a65d6c75e9", "https://pp1.ath.cx:8443/public/question/62583e95-8add-463d-897b-b5f78132f232"];
const urlHumedad = ["https://pp1.ath.cx:8443/public/question/1afe9c60-b66f-4abf-9e92-9841b01bf6af", "https://pp1.ath.cx:8443/public/question/86a51d79-08d6-4d8f-ace2-607961566cbf", "https://pp1.ath.cx:8443/public/question/f4477491-a1ec-4c7e-9c98-6c5913fb2af8", "https://pp1.ath.cx:8443/public/question/16d49253-0d11-4f8a-b06a-16f6b401d762"];
const urlTemperatura = ["https://pp1.ath.cx:8443/public/question/6fd8fbca-093b-4016-81df-68173f1ecc89", "https://pp1.ath.cx:8443/public/question/f543ea9d-5ab5-4724-8755-669cece99abc", "https://pp1.ath.cx:8443/public/question/6650bd24-b901-4fe7-b69d-070fc78d8e2b", "https://pp1.ath.cx:8443/public/question/ba6cf25f-2296-4999-b806-a2910b955723"];
const urlRuido = ["https://pp1.ath.cx:8443/public/question/164e7709-d178-4e48-8ad9-9cc802e0809b", "https://pp1.ath.cx:8443/public/question/3d070573-6f44-4255-ae39-af36f915a013", "https://pp1.ath.cx:8443/public/question/7115bdb6-3d8a-4aef-a40d-c3e86705d387", "https://pp1.ath.cx:8443/public/question/dd952ee8-cfdc-44e0-a2d4-176b58309a87"];

switch (pathname) {
    case "/directivo/index.html":
        urls = urlIndex;
        break;
    case "/index.html":
        urls = urlIndex;
        break;
    case "/directivo/alumnos.html":
        urls = urlAlumnos;
        break;
    case "/alumnos.html":
        urls = urlAlumnos;
        break;
    case "/directivo/rendimientoAcademico.html":
        urls = urlRendimiento;
        break;
    case "/rendimientoAcademico.html":
        urls = urlRendimiento;
        break;
    case "/directivo/ahorroenergetico.html":
        urls = urlAhorro;
        break;
    case "/ahorroenergetico.html":
        urls = urlAhorro;
        break;
    case "/directivo/calidadaire.html":
        urls = urlCalidadAire;
        break;
    case "/calidadaire.html":
        urls = urlCalidadAire;
        break;
    case "/directivo/humedad.html":
        urls = urlHumedad;
        break;
    case "/humedad.html":
        urls = urlHumedad;
        break;
    case "/directivo/ruido.html":
        urls = urlRuido;
        break;
    case "/ruido.html":
        urls = urlRuido;
        break;
    case "/directivo/temperatura.html":
        urls = urlTemperatura;
        break;
    case "/temperatura.html":
        urls = urlTemperatura;
        break;
    default:
        urls = urlIndex;
        break;
}

cargarIframes();

////////////////evento boton contraste/////////////////////////////////

btnSwitch.addEventListener('click', () => {
    location.reload();
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);

    //cambiar colores
    if (switchToTheme == 'dark') {
        btnBack.src = "img/btn-back-dark.png";
    } else {
        btnBack.src = "img/btn-back.png";

    }

});

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

btnClose.addEventListener('click', () => {
    //escondo full card
    fullCardBox.style.display = "none";
    //saco la url de la full card
    fullCard.src = "";
    //habilito scroll de la pagina
    body.style.position = "relative";
});


function cargarIframes() {

    var counter = 0;

    for (let index = 0; index < urls.length; index++) {
        const card = document.getElementById("row");
        if (localStorage.getItem('theme') == 'dark') {
            src = urls[index] + "#theme=night";
        } else {
            src = urls[index];
        }
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
}