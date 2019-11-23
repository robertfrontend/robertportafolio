//funcion anonima 

(function(){

});


//seccion del portafolio oculto

document.getElementById("btn-vermas").addEventListener("click",function(){
  
document.getElementById("seccion-ocultos").classList.toggle("is-active")
});


// seccion de sobre mi

document.getElementById('conoceme').addEventListener("click",function(){

document.getElementById("div-desc-soy").classList.toggle("active-desc")
});


//memnu

document.getElementById('bt-menu').addEventListener("click",function(){

document.getElementById("div-menu").classList.toggle("activador-menu")
});


//modo oscuro
document.getElementById("cambiar-oscuro").addEventListener("click",function(e){
    var isActive = e.target.checked;
    var switchTitle = document.getElementsByClassName("switch-title")[0];

    if (isActive) {
        document.getElementsByTagName("body")[0].classList.add("dark");
        switchTitle.innerHTML = "White";
    }else{
        document.getElementsByTagName("body")[0].classList.remove("dark");
        switchTitle.innerHTML = "Dark";
    }

    // document.getElementsByClassName(body).classList.toggle("is-active")
});


// trabajar con el scroll de la pagina 
window.addEventListener("scroll", function(event){
    if (this.scrollY > 50){
        document.getElementById("switch-container").classList.add("flotar");
    }else{
        document.getElementById("switch-container").classList.remove("flotar");
    }
});