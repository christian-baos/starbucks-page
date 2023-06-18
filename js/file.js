function imgSlider(anything, newText) {

    var paragraph = document.getElementById("change_text");

    document.querySelector('.starbucks').src = anything;

    paragraph.innerHTML = newText;


   

    //document.getElementById('texto1').innerHTML = "B"
}

//Cambiar color de circulo al seleccionar una de las img pequeñas //

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//Recargar la pagina al oprimir click en la opcion HOME //

function reload() {
    let url = window.location.href;
    window.alert(url);
}

