alert("¡Bienvenido a mi Sitio Web!");

console.log("Hola soy un mensaje que solo se ve en la consola");

document.getElementById("miBoton").addEventListener("click", function(){
    var imagen = document.getElementById("miImagen");
    if (imagen.src.match("img/fc.jpg")) {
    imagen.src = "img/fc.png";
    } else {
    imagen.src = "img/fc.jpg";
    }
});

