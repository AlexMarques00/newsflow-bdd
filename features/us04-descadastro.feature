# language: pt
Funcionalidade: Descadastro imediato de assinantes
  Como assinante
  Quero me descadastrar da newsletter facilmente pelo e-mail
  Para parar de receber conteúdos que não me interessam mais

  Contexto:
    Dado que estou cadastrado na base de assinantes do NewsFlow

  @feliz
  Cenário: Descadastro realizado com sucesso através do link no e-mail
    Dado que recebi um e-mail da newsletter contendo o link de descadastro
    Quando clico no link de descadastro
    Então meu e-mail deve ser removido imediatamente da base
    E devo receber um e-mail de confirmação do descadastro

  @excecao
  Cenário: Tentativa de reativação da lista exige duplo opt-in válido
    Dado que realizei o descadastro anterior da base
    Quando solicito o retorno à lista de assinantes
    Então o sistema deve enviar um link de confirmação válido por 48 horas