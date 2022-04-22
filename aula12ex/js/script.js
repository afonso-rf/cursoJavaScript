function carregar () {
    var dia = new Date()
    var hora = dia.getHours()
    var min = dia.getMinutes()
    var horaDia  = document.getElementById('horaDia')
    var img = document.getElementById('imagem')
    if ( 0 < hora && hora < 12) {
        document.body.style.background = '#faddb9'
        horaDia.innerHTML = `São ${hora} horas e ${min} minutos`
    
        img.src = 'imagens/fotoManha.png'
    } else if (12 < hora && hora < 18) {
        document.body.style.background = '#f08f4a'
        horaDia.innerHTML = `São ${hora} horas e ${min} minutos`
        img.src = 'imagens/fotoTarde.png'
    } else {
        document.body.style.background = '#a19f9f'
        horaDia.innerHTML = `São ${hora} horas e ${min} minutos`
        img.src = 'imagens/fotoNoite.png'
    }
}