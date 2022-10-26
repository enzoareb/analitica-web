const fulCardBox = document.getElementById("fulCardBox");
fulCard= document.getElementById("fulCard");
//tomo todos los iconos
icons = document.getElementsByClassName("icon");

function openFulCard(refId){
    //tomo todos los iframe
    var iframes = document.getElementsByClassName("iframe");
    //tomo la url del iframe que necesito
    var elem = iframes[refId].getAttribute("src");

    //cargo la url
    fulCard.src = elem;
    //actualizo css
    fulCardBox.style.display = "flex";
    //oculto iconos
    for (let index = 0; index < icons.length; index++) {
        icons[index].style.display="none";
        
    }

}

function closeCard(){
    //actualizo css
    fulCardBox.style.display = "none";
    fulCard.src = "";
    //muestro iconos
    for (let index = 0; index < icons.length; index++) {
        icons[index].style.display="flex";
        
    }
}