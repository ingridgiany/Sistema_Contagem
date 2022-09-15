function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let saida = document.querySelector('div#saida')


    if ((inicio.value.lenght == 0) || (fim.value.length == 0) || (passo.value.length == 0)) {
        saida.innerHTML = 'Impossível contar!'
    } else {
        saida.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 || p > f){
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            // CRESCENTE
            for (let c = i; c <= f; c += p) {
                saida.innerHTML += `${c} \u{27A1}`
            }
        } else {
            // DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                saida.innerHTML += `${c} \u{27A1}`
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }}