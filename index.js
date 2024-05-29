const setas = document.querySelectorAll('.duvida');
setas.forEach((duvida) => {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})
