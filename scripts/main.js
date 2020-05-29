var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/no.jpg') 
    {
      miImage.setAttribute('src','images/jeje.jpg');
    } else {
      miImage.setAttribute('src', 'images/no.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() 
{
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Preparaos que ' + miNombre + ' os romperá el orto.';
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Preparaos que ' + nombreAlmacenado + ' os romperá el orto.';
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}