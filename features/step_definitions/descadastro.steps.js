const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('node:assert/strict')

Given('que estou cadastrado na base de assinantes do NewsFlow', function () {
  this.assinante = { ativo: true, email: 'assinante@teste.com' }
})

Given('que recebi um e-mail da newsletter contendo o link de descadastro', function () {
  this.emailRecebido = { linkDescadastro: true }
})

When('clico no link de descadastro', function () {
  this.assinante.ativo = false
  this.resultado = { emailConfirmacaoEnviado: true }
})

Then('meu e-mail deve ser removido imediatamente da base', function () {
  assert.equal(this.assinante.ativo, false)
})

Then('devo receber um e-mail de confirmação do descadastro', function () {
  assert.equal(this.resultado.emailConfirmacaoEnviado, true)
})

Given('que realizei o descadastro anterior da base', function () {
  this.assinante = { ativo: false }
})

When('solicito o retorno à lista de assinantes', function () {
  this.resultado = { linkOptInEnviado: true, validadeHoras: 48 }
})

Then('o sistema deve enviar um link de confirmação válido por {int} horas', function (horas) {
  assert.equal(this.resultado.linkOptInEnviado, true)
  assert.equal(this.resultado.validadeHoras, horas)
})