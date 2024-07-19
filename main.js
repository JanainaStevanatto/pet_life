var elemento = document.querySelectorAll('.duvida')
elemento.forEach(function (duvida) {
  duvida.addEventListener('click', function (){
    duvida.classList.toggle('ativa')
  })

})