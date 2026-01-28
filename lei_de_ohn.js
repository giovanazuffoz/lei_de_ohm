function calcularLeiDeOhm(resistencia, corrente){
    return resistencia * corrente
}

function principal(){

    let tensao = 0
    let resistencia = 10, corrente = 2

    tensao = calcularLeiDeOhm(resistencia, corrente)

    console.log(`A tensão é de ${tensao} volts para uma resistência de ${resistencia} e uma corrente de ${corrente}`)
} 
principal()