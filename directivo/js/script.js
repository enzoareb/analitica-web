const fullCardBox = document.getElementById("fulCardBox");
fullCard = document.getElementById("fulCard");
var body = document.getElementById("page-top");
const btnBack = document.getElementById("btn-back");

function openFulCard(refId) {
    //lista de elementos de la clase iframe
    var iframes = document.getElementsByClassName("iframe");
    //elemento de la lista pasado por parametro
    var srcIframe = iframes[refId].getAttribute("src");
    //cargo la url en la card a mostrar
    fullCard.src = srcIframe;
    //muestro full card 
    fullCardBox.style.display = "flex";
    //quito scroll a la pagina
    body.style.position = "fixed";
}

function closeCard() {
    //escondo full card
    fullCardBox.style.display = "none";
    //saco la url de la full card
    fullCard.src = "";
    //habilito scroll de la pagina
    body.style.position = "relative";
}

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