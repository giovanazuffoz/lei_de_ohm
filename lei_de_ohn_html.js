function calcularLeiDeOhm(resistencia, corrente){
    return resistencia * corrente
}
    let resposta = document.getElementById('resposta')
    let calcular = document.getElementById('calcular')
    
 calcular.addEventListener('click', ()=>{
    let tensao = 0
    let resistencia = Number(document.getElementById('resistencia').value)
    let corrente = Number(document.getElementById('corrente').value)

    tensao = calcularLeiDeOhm(resistencia, corrente)

    // console.log(`A tensão é de ${tensao} volts para uma resistência de ${resistencia} e uma corrente de ${corrente}`)

    resposta.innerHTML = ``
    resposta.innerHTML += ` A tensão é de ${tensao} volts para uma resistência de ${resistencia} ohms e uma corrente de ${corrente} amperes`
    

 })
