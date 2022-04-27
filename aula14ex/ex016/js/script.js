function contar () {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.querySelector('div#res')
    if (inicio == '' || fim == '' || passo == '') {
        alert('Erro! Insira os valores solicitados.')
    } else {
        if (passo == 0) {
            alert('Passo invalido! Considerando Passo = 1.')
            passo = 1
        }
         inicio = Number(inicio)
         fim = Number(fim)
         passo = Number(passo)
        res.innerHTML = `Contando: <br>&#127744 `
        if (inicio == fim) {
            res.innerHTML += `${inicio} `
        } else if (inicio < fim) {
            while ( inicio <= fim ) {
                res.innerHTML += `${inicio} &#128073 `
                inicio += passo
            }
        } else {
            while (inicio >= fim) {
                res.innerHTML += `${inicio} &#128073 `
                inicio -= passo
            }
        
        }
        res.innerHTML += '&#127988'
    }
}