function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora}:00`
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
  } else {
    //BOA NOITE!
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}
