const selection= document.getElementById("Razas");
const imagen= document.querySelector(".perro");
const raza=document.querySelector(".razah2");
const loader=document.querySelector(".loader");
const URL_Global= "https://dog.ceo/api/breeds/list/all";


fetch(URL_Global)
    .then(function (respuesta){
        return respuesta.json();
    })
    .then (function (data){
        const razasObjeto=data.message;
        const razasArreglo=Object.keys(razasObjeto);
        for(let i=0;i<razasArreglo.length;i++){
            const option= document.createElement("option");
            option.value=razasArreglo[i];
            option.innerText=razasArreglo[i];
            selection.appendChild(option);
        }
    })

selection.addEventListener("change", function (event){
    imagen.classList.remove("block")
    imagen.classList.add("hidden")
    loader.classList.remove("hidden")
    loader.classList.add("block")
    raza.classList.add("hidden")
    raza.classList.remove("block")
    const URL_IMG=  `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    raza.innerText=event.target.value;
    

    fetch (URL_IMG)
    .then (function (respuesta_imagen){
    return respuesta_imagen.json();
    })
    .then(function (data){
        imagen.src=data.message;
        imagen.addEventListener("load", function(event){
            imagen.classList.remove("hidden")
            imagen.classList.add("block")
            loader.classList.remove("block")
            loader.classList.add("hidden")
            raza.classList.remove("hidden")
            raza.classList.add("block")
        })
    })
})

