function mostrarWakeup() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('wakeup').style.display = 'block';
     document.getElementById('nyan').style.display = 'block';
    window.scrollTo(0, 0);
}

function mostrarBienvenida() {
    document.getElementById('wakeup').style.display = 'none';
    document.getElementById('bienvenida').style.display = 'block';
    window.scrollTo(0, 0);
}

function mostrarAlready() {
    document.getElementById('wakeup').style.display = 'none';
    document.getElementById('already').style.display = 'block';
    document.getElementById('christmasa').style.display = 'block';
    window.scrollTo(0, 0);
}

/**
 * @param {string} paginaAMostrar 
 * @param {string} paginaAOcultar
 */
function navegarA(paginaAMostrar, paginaAOcultar) {
    document.getElementById(paginaAOcultar).style.display = 'none';
    document.getElementById(paginaAMostrar).style.display = 'block';
    window.scrollTo(0, 0);
}

function inicializar() {
    console.log('VALS CHRISTMAS ADVENTURE inicializado');
}

document.addEventListener('DOMContentLoaded', inicializar);


window.mostrarWakeup = mostrarWakeup;
window.mostrarBienvenida = mostrarBienvenida;
window.navegarA = navegarA;

  document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('navidadmp3');

    audio.volume = 0.13;
    

    document.getElementById('volumenBtn').addEventListener('click', function() {
      audio.volume = 0.2; 
    });
  });