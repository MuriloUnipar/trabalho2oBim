const triangulo = document.querySelector('.triangulo button')

triangulo.addEventListener("click", () => {
  const X = Number(document.querySelector('.triX').value)
  const Y = Number(document.querySelector('.triY').value)
  const Z = Number(document.querySelector('.triZ').value)
  let result = ''
  if (X+Y>Z){
    result += 'Pode ser um triângulo, '
  }else {
    result += 'Não pode ser um triângulo, '
  }

  result += (X===Y)&&(Y===Z) 
    ? 'e é equilatero'
    : (X===Z||Y===Z||X===Y)
      ? 'é isoceles'
      : 'é escaleno'

  const res = document.querySelector('.triangulo span')

  res.textContent = result
})


const imc = document.querySelector('.imc button')

imc.addEventListener("click", () => {
  const altura = Number(document.querySelector('.altura').value)
  const peso = Number(document.querySelector('.peso').value)

  const imcValue = peso/(altura*altura)

  const classificacao = imcValue < 18.5 
    ? "Abaixo do peso"
    : imcValue < 24.9
    ? "Peso normal"
    : imcValue < 29.9
    ? "Sobrepeso"
    : imcValue < 34.9
    ? "Obesidade grau 1"
    : imcValue < 39.9
    ? "Obesidade grau 2"
    : "Obesidade grau 3"

  // ○ Abaixo de 18.5 → Abaixo do peso
  // ○ 18.5 a 24.9 → Peso normal
  // ○ 25 a 29.9 → Sobrepeso
  // ○ 30 a 34.9 → Obesidade grau 1
  // ○ 35 a 39.9 → Obesidade grau 2
  // ○ 40+ → Obesidade grau 3.

  const res = document.querySelector('.imc span')

  res.textContent = `${classificacao}, seu imc é ${imcValue.toFixed(2)}`
})

const impostos = document.querySelector('.imposto button')

impostos.addEventListener("click", () => {
  const valor = Number(document.querySelector('.valor').value)
  const ano = Number(document.querySelector('.ano').value)

  const reajustado = ano <= 1990
    ? valor * 1.1
    : valor * 1.15

  const res = document.querySelector('.imposto span')

  res.textContent = `Valor reajustado: ${reajustado.toFixed(2)}R$`
})

const salario = document.querySelector('.salario button')

salario.addEventListener("click", () => {
  const cargo = Number(document.querySelector('.cargo').value)
  const salario = Number(document.querySelector('.valorSalario').value)

  const reajustado = cargo === 101
    ? salario * 1.1
    : cargo === 102
    ? salario * 1.2
    : cargo === 103
    ? salario * 1.3
    : salario * 1.4

  const res = document.querySelector('.salario span')

  res.textContent = `Valor reajustado: ${salario}R$
      Valor Reajustado: ${reajustado.toFixed(2)}R$
      Aumento de: ${(reajustado - salario).toFixed(2)}
    `
})

const credito = document.querySelector('.credito button')

credito.addEventListener("click", () => {
  const saldo = Number(document.querySelector('.saldoM').value)

  const creditoGanho = saldo < 200
    ? 0 * saldo
    : saldo < 400
    ? 1.2 * saldo
    : saldo < 600 
    ? 1.3 * saldo
    : 1.4 * saldo

  const res = document.querySelector('.credito span')

  res.textContent = `Valor do crédito: ${creditoGanho}R$`
})

const lanche = document.querySelector('.lanche button')

lanche.addEventListener("click", () => {
  const codItem = Number(document.querySelector('.item').value)
  const qtd = Number(document.querySelector('.qtd').value)

  const valorLanche = (codItem === 1
    ? 11
    : codItem === 2
    ? 8.5
    : codItem === 3
    ? 8
    : codItem === 4
    ? 9
    : codItem === 5
    ? 10
    : 4.5) * qtd

  const res = document.querySelector('.salario span')

  res.textContent = `Valor reajustado: ${salario}R$
      Valor Reajustado: ${reajustado.toFixed(2)}R$
      Aumento de: ${(reajustado - salario).toFixed(2)}
    `
})

const vendas = document.querySelector('.vendas button')

vendas.addEventListener("click", () => {
  const valorP = Number(document.querySelector('.valorProd').value)
  const pgto = Number(document.querySelector('.pgto').value)

  const valorFinal = 
    pgto === 1
    ? valorP * 0.9
    : pgto === 2
    ? valorP * 0.85
    : pgto === 3
    ? valorP
    : valorP * 1.1

  const res = document.querySelector('.vendas span')

  res.textContent = `Valor a ser pago: ${valorFinal.toFixed(2)}R$`
})

const pagamentos = document.querySelector('.pagamentos button')

pagamentos.addEventListener("click", () => {
  const nivel = Number(document.querySelector('.nivel').value)
  const horas = Number(document.querySelector('.horas').value)

  const salario = 0
  const res = document.querySelector('.vendas span')

  res.textContent = `Valor a ser pago: ${valorFinal.toFixed(2)}R$`
})
