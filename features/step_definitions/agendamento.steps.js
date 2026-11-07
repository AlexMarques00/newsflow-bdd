const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('node:assert/strict')

Given('que estou autenticada como gestora', function () {
  this.usuarioAutenticado = 'gestora'
})

Given('que existe uma edição aprovada', function () {
  this.edicao = { status: 'aprovada' }
})

Given('que o segmento {string} tem {int} assinantes', function (segmento, qtd) {
  this.segmento = { nome: segmento, assinantes: qtd }
})

When('agendo o envio para daqui a {int} minutos', function (minutos) {
  if (minutos < 15) {
    this.resultado = { mensagem: 'O envio precisa de ao menos 15 minutos' }
  } else {
    this.resultado = { mensagem: 'Envio agendado' }
    this.edicao.agendado = true
  }
})

Then('o disparo deve estar agendado', function () {
  assert.equal(this.edicao.agendado, true)
})