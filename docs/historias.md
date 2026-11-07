# Histórias de Usuário - NewsFlow

## US01 Salvar rascunho automaticamente
**Como** redatora  
**Quero** que meu texto seja salvo enquanto escrevo  
**Para** não perder trabalho quando a conexão cair  

**Critérios de aceitação**
* O rascunho é salvo a cada 30 segundos de inatividade.
* Cada salvamento cria uma versão numerada.
* As últimas 20 versões podem ser restauradas.
* Restaurar uma versão não apaga as seguintes.

**Regras cobertas:** RN01  
**Prioridade:** Alta – perda de conteúdo é a reclamação número um dos redatores.  
**Cenários:** features/us01-rascunho.feature

---

## US02 Aprovação pré-envio por revisor
**Como** revisora  
**Quero** conferir o conteúdo e liberar o envio sem virar gargalo  
**Para** garantir a qualidade das newsletters antes de atingirem os assinantes  

**Critérios de aceitação**
* O envio ou agendamento exige aprovação prévia de um revisor.
* O autor da edição não pode aprovar a própria edição.
* A reprovação devolve a edição ao status de rascunho e exige um comentário obrigatório justificando o ajuste.

**Regras cobertas:** RN02  
**Prioridade:** Alta – evita erros e disparos de conteúdo não revisado.  
**Cenários:** features/us02-aprovacao.feature

---

## US03 Agendamento com antecedência
**Como** gestora de comunicação  
**Quero** agendar o envio de uma edição aprovada  
**Para** que ela chegue no melhor horário sem eu precisar apertar o botão no momento do disparo  

**Critérios de aceitação**
* O envio deve ser agendado para no mínimo 15 minutos à frente, considerando o fuso horário `America/Sao_Paulo`.
* É permitido reagendar uma edição até 2 vezes.
* É permitido cancelar o agendamento até 5 minutos antes do horário marcado.

**Regras cobertas:** RN03  
**Prioridade:** Média – organiza a rotina de publicações da equipe.  
**Cenários:** features/us03-agendamento.feature

---

## US04 Descadastro imediato de assinantes
**Como** assinante  
**Quero** me descadastrar da newsletter facilmente pelo e-mail  
**Para** parar de receber conteúdos que não me interessam mais  

**Critérios de aceitação**
* Todo e-mail disparado deve conter um link visível de descadastro.
* O clique no link gera efeito imediato de remoção da base.
* O sistema envia um e-mail de confirmação do descadastro.
* O retorno posterior à lista exige duplo opt-in com um link de confirmação válido por 48 horas.

**Regras cobertas:** RN06  
**Prioridade:** Alta – requisito de conformidade com normas de privacidade e boa experiência do usuário.  
**Cenários:** features/us04-descadastro.feature