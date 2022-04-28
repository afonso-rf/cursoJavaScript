let num = document.getElementById('num')
let res = document.querySelector('div#res')
let listaNum = []

function adicionar(){
    res.innerHTML = ''
    if (num.length == 0 || num > 100) {
        alert('Erro! Insira um número entre 1 e 100.')
    } else if (listaNum.indexOf(Number(num.value)) != -1) {
            alert('Esse número já está lista. Escolha outro número')
        } else {
            let item = document.createElement('option')
            let lista = document.getElementById('lista')
            listaNum.push(Number(num.value))
            item.value = `list${num.value}`
            item.text = `Número ${num.value} adicionado.`
            lista.appendChild(item)

        }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (listaNum.length == 0){
        res.innerHTML = 'Não possui números na lista.'
    } else {
        let menor = listaNum[0]
        let maior = listaNum[0]
        let soma = 0
        for (let pos in listaNum) {
            soma += listaNum[pos]
            if (menor > listaNum[pos]){
                menor = listaNum[pos]
            } else if (maior < listaNum[pos]){
                    maior = listaNum[pos]
            }            
        }
        res.innerHTML = ''
        res.innerHTML += `Foram adicionados ${listaNum.length} números na lista.<br>`
        res.innerHTML += `O menor número da lista é ${menor}.<br>`
        res.innerHTML += `O maior número da lista é ${maior}.<br>`
        res.innerHTML += `A soma dos números da lista é ${soma}.<br>`
        res.innerHTML += `A media dos números da lista é ${soma / listaNum.length}`
        } 
}
