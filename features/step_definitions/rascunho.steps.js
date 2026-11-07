const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('node:assert/strict')

Given('que estou autenticada como redatora', function () {
  this.usuarioAutenticado = 'redatora'
})

Given('que criei uma nova edição de newsletter', function () {
  this.edicao = { titulo: 'Edição Teste', versoes: [] }
})

Given('que estou editando o conteúdo da newsletter', function () {
  this.edicao.conteudo = 'Texto inicial'
})

When('passo {int} segundos sem digitar', function (segundos) {
  if (segundos >= 30) {
    this.edicao.versoes.push({ versao: 1, texto: this.edicao.conteudo })
  }
})

Then('o rascunho deve ser salvo automaticamente', function () {
  assert.ok(this.edicao.versoes.length > 0)
})

Then('cada salvamento deve criar uma versão numerada', function () {
  assert.equal(this.edicao.versoes[0].versao, 1)
})

Given('que a edição possui {int} versões salvas', function (qtd) {
  this.edicao = { versoes: [] }
  for (let i = 1; i <= qtd; i++) {
    this.edicao.versoes.push({ versao: i, texto: `Conteúdo da versão ${i}` })
  }
})

When('seleciono a versão {int} para restauração', function (numVersao) {
  const versaoEncontrada = this.edicao.versoes.find(v => v.versao === numVersao)
  this.edicao.conteudoAtual = versaoEncontrada.texto
})

Then('o conteúdo da versão {int} deve ser carregado na tela', function (numVersao) {
  assert.equal(this.edicao.conteudoAtual, `Conteúdo da versão ${numVersao}`)
})

Then('as versões seguintes não devem ser apagadas', function () {
  assert.ok(this.edicao.versoes.length >= 5)
})