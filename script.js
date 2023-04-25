function somar() {
    var tn1 = document.getElementById('txt-som-1')
    var tn2 = document.getElementById('txt-som-2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    var res = document.getElementById('res-soma').innerHTML = `O resultado de ${n1} + ${n2} é: ${soma}`
}
function subtrair() {
    var tn1 = document.getElementById('txt-sub-1')
    var tn2 = document.getElementById('txt-sub-2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var sub = n1 - n2
    var res = document.getElementById('res-sub').innerHTML = `O resultado de ${n1} - ${n2} é: ${sub}`
}
function multiplicar() {
    var tn1 = document.getElementById('txt-mult-1')
    var tn2 = document.getElementById('txt-mult-2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var mult = n1 * n2
    var res = document.getElementById('res-mult').innerHTML = `O resultado de ${n1} X ${n2} é: ${mult}`
}
function dividir() {
    var tn1 = document.getElementById('txt-div-1')
    var tn2 = document.getElementById('txt-div-2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var div = n1 / n2
    var res = document.getElementById('res-div').innerHTML = `O resultado de ${n1} / ${n2} é: ${div}`
}