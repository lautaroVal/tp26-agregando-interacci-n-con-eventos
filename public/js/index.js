window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let menu = document.querySelector("#menu");
    var logoDH = document.querySelector(".logoDH");
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    switch (nombre) {
        case '':
            subtitulo.innerHTML += ' INVITADO';
            break;
            case null:
                subtitulo.innerHTML += ' INVITADO';
                break;
        default:
            subtitulo.innerHTML += ` <b> ${nombre}</b>`;
            break;
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';

    
logoDH.addEventListener("click", () => {
    menu.classList.toggle('mostrar')
})

logoDH.addEventListener("mouseover", () => {
        fondo.classList.toggle('fondo');
        enlace.style.color = '#E51B3E';
})

/* document.getElementById('link-list').addEventListener('click', (e) => {
    e.preventDefault()

    let respuesta = confirm("Estas seguro?")

    if (respuesta) {
        window.location.href = e.target.href
    }
}) */

menu.addEventListener('mouseout', (e) => {
    console.log(e.target);

    if (e.target.localName === "div") {
        menu.classList.remove('mostrar')
    }
})












    let link = document.createElement(a);
    link.innerHTML = "Nuevo elemento del menu";
    let item = document.createElement('li');
    item.appendChild(link);

    console.log(item);
    menu.appendChild(item);

    menu.innerHTML += `<li><a href="">Otro elemento del menú</a></li>`


}