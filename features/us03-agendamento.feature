# language: pt
Funcionalidade: Agendar envio de newsletter
  Como gestora de comunicação
  Quero agendar o envio de uma edição aprovada
  Para que ela chegue no melhor horário sem eu precisar apertar o botão

  Contexto:
    Dado que estou autenticada como gestora
    E que existe uma edição aprovada
    E que o segmento "Clientes Premium" tem 1200 assinantes

  @feliz
  Cenário: Agendamento bem-sucedido com antecedência válida
    Quando agendo o envio para daqui a 60 minutos
    Então o disparo deve estar agendado
    E devo ver a mensagem "Envio agendado"

  @limite
  Esquema do Cenário: Validação da antecedência mínima de agendamento
    Quando agendo o envio para daqui a <minutos> minutos
    Então devo ver a mensagem "<mensagem>"

    Exemplos:
      | minutos | mensagem |
      | 60      | Envio agendado |
      | 16      | Envio agendado |
      | 15      | Envio agendado |
      | 14      | O envio precisa de ao menos 15 minutos |
      | 10      | O envio precisa de ao menos 15 minutos |