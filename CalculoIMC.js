let peso = parseFloat(prompt("Insira seu peso em quilos: "))
let altura = parseFloat(prompt("Insira sua altura em metros: "))

let imc = peso / (altura * altura)

alert("Seu IMC: " + imc)