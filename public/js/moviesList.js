window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    var logoDH = document.querySelector(".logoDH");

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.classList.add('fondoMoviesList');
    }

    logoDH.addEventListener("mouseover", () => {
        body.classList.toggle('fondoMoviesList');
})
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}