# language: pt
Funcionalidade: Salvar rascunho automaticamente
  Como redatora
  Quero que meu texto seja salvo enquanto escrevo
  Para não perder trabalho quando a conexão cair

  Contexto:
    Dado que estou autenticada como redatora
    E que criei uma nova edição de newsletter

  @feliz
  Cenário: Salvamento automático após período de inatividade
    Dado que estou editando o conteúdo da newsletter
    Quando passo 30 segundos sem digitar
    Então o rascunho deve ser salvo automaticamente
    E cada salvamento deve criar uma versão numerada

  @excecao
  Cenário: Restaurar versão anterior do rascunho sem apagar as seguintes
    Dado que a edição possui 5 versões salvas
    Quando seleciono a versão 2 para restauração
    Então o conteúdo da versão 2 deve ser carregado na tela
    E as versões seguintes não devem ser apagadas