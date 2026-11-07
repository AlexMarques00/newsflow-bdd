const { setWorldConstructor } = require('@cucumber/cucumber')

class MundoDoNewsFlow {
  constructor() {
    this.usuarioAutenticado = null
    this.edicao = null
    this.resultado = null
    this.segmento = null
    this.assinante = null
  }
}

setWorldConstructor(MundoDoNewsFlow)