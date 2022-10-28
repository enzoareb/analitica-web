const fullCardBox = document.getElementById("fulCardBox");
fullCard= document.getElementById("fulCard");
//lista de elementos de la clase icon
icons = document.getElementsByClassName("icon");
//elemento body
var body = document.getElementById("page-top");

function openFulCard(refId){
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
    //oculto iconos
    for (let index = 0; index < icons.length; index++) {
        icons[index].style.display="none";
        
    }

}

function closeCard(){
    //escondo full card
    fullCardBox.style.display = "none";
    //saco la url de la full card
    fullCard.src = "";
    //habilito scroll de la pagina
    body.style.position = "relative";
    //muestro iconos
    for (let index = 0; index < icons.length; index++) {
        icons[index].style.display="flex";
        
    }
}

const btnSwitch = document.querySelector("#switch");
const sw = document.getElementById("switch");
btnSwitch.addEventListener('click',()=>{
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
    //document.body.classList.toggle('dark');
    //btnSwitch.classList.toggle('active');
    /*
    alert(switchToTheme);
    if (switchToTheme == 'light') {
        sw.style.left = "0";
        sw.style.right= "unset";
    }else{
        sw.style.left = "unset";
        sw.style.right= "0";
    }
*/


    //cambiar color btn flotante
    var btnBack = document.getElementById("btn-back");
    if ((btnBack.src).indexOf("img/btn-back.png") !== -1) {
        btnBack.src = "img/btn-back-dark.png"
    }else{
        btnBack.src = "img/btn-back.png"
    } 

   
});

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
}
setTheme(localStorage.getItem('theme') || preferedColorScheme);
