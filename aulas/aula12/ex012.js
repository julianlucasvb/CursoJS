var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}:00`)
if (hora >= 0 && hora <= 6) {
  console.log('Boa madrugada')
} else if (hora > 7 && hora <= 11) {
  console.log('Bom dia')
} else if (hora > 11 && hora <= 18) {
  console.log('Boa tarde')
} else if (hora > 18 && hora <= 23) {
  console.log('Boa noite')
} else {
  console.log('Erro! hora invalida')
}
