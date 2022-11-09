console.log("moviesAdd sucess");
window.addEventListener("load", function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    let inputTtitulo = document.getElementById('titulo');
    let estadoSecreto = 0;

    const checkKey = (key) => {
        switch (true) {
            case key === 's' && estadoSecreto === 0:
                ++estadoSecreto
                console.log(estadoSecreto);
                break;
                case key === 'e' && estadoSecreto === 1:
                ++estadoSecreto
                break;
                case key === 'c' && estadoSecreto === 2:
                ++estadoSecreto
                break;
                case key === 'r' && estadoSecreto === 3:
                ++estadoSecreto
                break;
                case key === 'e' && estadoSecreto === 4:
                ++estadoSecreto
                break;
                case key === 't' && estadoSecreto === 5:
                ++estadoSecreto
                break;
                case key === 'o' && estadoSecreto === 6:
                    estadoSecreto = 0;
                    alert("SECRETO MÁGICO")
                break;
            default:
                estadoSecreto = 0;
                break;
        }

    }
    
    if (inputTtitulo) {
        inputTtitulo.addEventListener('keyup', function(e) {
            checkKey(e.key)
         });
    }
    
    let agregar = document.querySelector(".botonAgregar");
    agregar.addEventListener("mouseover", () => {
        agregar.style.backgroundColor = "black"
    })

    agregar.addEventListener("mouseout", () => {
        agregar.style.backgroundColor = "green"
    })


}) 
