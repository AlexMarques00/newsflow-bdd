# NewsFlow - Prática de BDD com Cucumber.js

Repositório da suíte de testes BDD desenvolvida para a plataforma NewsFlow da Vértice.

## Como rodar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. No terminal, na raiz do projeto, execute:

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar a validação de sintaxe (dry-run)
npm run test:dry

# 3. Executar os testes automatizados
npm test
```

## Fora de escopo
As seguintes regras do sistema *NewsFlow* não foram priorizadas nestas quatro histórias iniciais:
* **RN05 (Frequência):** O limite de 2 newsletters por semana por assinante foi desconsiderado para focar nas etapas centrais de criação, aprovação e agendamento, pois adiciona uma complexidade de fila semanal extensa para o prazo de 3 dias.
* **RN07 (Falha de entrega):** As regras de retentativas automáticas (hard/soft bounce e intervalos de 5, 15 e 45 minutos) ficaram fora do escopo por exigirem simulações complexas de requisições de rede assíncronas que extrapolam o núcleo comportamental da suíte inicial.

## Resultado da Execução (`npm test`)
```text
..................................................................

13 scenarios (13 passed)
66 steps (66 passed)
0m 0.046s (0m 0.005s executing your code)
```