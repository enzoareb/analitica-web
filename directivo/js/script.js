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