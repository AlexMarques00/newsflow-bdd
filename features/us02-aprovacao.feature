# language: pt
Funcionalidade: Aprovação pré-envio por revisor
  Como revisora
  Quero conferir o conteúdo e liberar o envio sem virar gargalo
  Para garantir a qualidade das newsletters antes de atingirem os assinantes

  Contexto:
    Dado que existe uma edição de newsletter submetida para revisão

  @feliz
  Cenário: Aprovação de edição por um revisor autorizado
    Dado que estou autenticada como revisora diferente do autor
    Quando aprovo a edição
    Então o status da edição deve mudar para aprovada

  @excecao
  Cenário: Impedir que o autor aprove a própria edição
    Dado que estou autenticada como a redatora autora da edição
    Quando tento aprovar a edição
    Então devo ver a mensagem "O autor não pode aprovar a própria edição"
    E o status da edição deve permanecer inalterado

  @excecao
  Cenário: Reprovação de edição com comentário obrigatório
    Dado que estou autenticada como revisora
    Quando reprovo a edição sem informar um comentário
    Então devo ver a mensagem "O comentário de reprovação é obrigatório"
    E a edição deve retornar ao status de rascunho com o comentário registrado