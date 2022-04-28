function tabuada () {
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tabuada')
    if (num == '') {
        alert('Isira um numero')
    } else {
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
        }
    }
}
