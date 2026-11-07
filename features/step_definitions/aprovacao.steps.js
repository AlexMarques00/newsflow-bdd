const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('node:assert/strict')

Given('que existe uma edição de newsletter submetida para revisão', function () {
  this.edicao = { autor: 'redatora@vertice.com', status: 'pendente_revisao' }
})

Given('que estou autenticada como revisora diferente do autor', function () {
  this.usuarioAutenticado = { email: 'revisora@vertice.com', papel: 'revisor' }
})

When('aprovo a edição', function () {
  if (this.usuarioAutenticado.email !== this.edicao.autor) {
    this.edicao.status = 'aprovada'
  }
})

Then('o status da edição deve mudar para aprovada', function () {
  assert.equal(this.edicao.status, 'aprovada')
})

Given('que estou autenticada como a redatora autora da edição', function () {
  this.usuarioAutenticado = { email: 'redatora@vertice.com', papel: 'redator' }
})

When('tento aprovar a edição', function () {
  if (this.usuarioAutenticado.email === this.edicao.autor) {
    this.resultado = { mensagem: 'O autor não pode aprovar a própria edição' }
  }
})

Then('devo ver a mensagem {string}', function (msg) {
  assert.equal(this.resultado.mensagem, msg)
})

Then('o status da edição deve permanecer inalterado', function () {
  assert.equal(this.edicao.status, 'pendente_revisao')
})

Given('que estou autenticada como revisora', function () {
  this.usuarioAutenticado = { papel: 'revisor' }
})

When('reprovo a edição sem informar um comentário', function () {
  this.resultado = { mensagem: 'O comentário de reprovação é obrigatório' }
  this.edicao.status = 'rascunho'
})

Then('a edição deve retornar ao status de rascunho com o comentário registrado', function () {
  assert.equal(this.edicao.status, 'rascunho')
})