function verificar () {
    var ano = new Date().getFullYear()
    var formAno = document.getElementById('textAno')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || ano < formAno.value) {
        alert('ERRO! Dados invalidos!')
    } else {
        var idade = ano - Number(formAno.value)
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 3) {
                img.src = 'imagens/bebeHomem.png'
            } else if (idade < 14) {
                img.src = 'imagens/criancaHomem.png'
            } else if (idade < 21) {
                img.src = 'imagens/jovemHomem.png'
            } else if (idade < 45) {
                img.src = 'imagens/adultoHomem.png'
            } else {
                img.src = 'imagens/oldHomem.png'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 3) {
                img.src = 'imagens/bebeMulher.png'
            } else if (idade < 14) {
                img.src = 'imagens/criancaMulher.png'
            } else if (idade < 21) {
                img.src = 'imagens/jovemMulher.png'
            } else if (idade < 45) {
                img.src = 'imagens/adultoMulher.png'
            } else {
                img.src = 'imagens/oldMulher.png'
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}