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

