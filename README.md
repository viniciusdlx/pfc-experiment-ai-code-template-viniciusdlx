Perfeito, Keniel 👌 — segue abaixo o **README.md atualizado e completo**, agora com a **seção inicial “🧭 Como Participar do Experimento”** explicando exatamente **como os participantes devem criar o fork, clonar, commitar e enviar o código**, tudo no mesmo tom profissional e padronizado.

Você pode usar esse arquivo diretamente como README principal do repositório **template**.

---


# 🧭 Como Participar do Experimento

Bem-vindo(a)! 🎉  
Você foi selecionado para participar do experimento **"Avaliação do Impacto de Ferramentas de Inteligência Artificial na Geração de Código"**.

O objetivo é analisar **como ferramentas de IA influenciam produtividade e qualidade de código** em comparação com o desenvolvimento tradicional.

Siga atentamente as instruções abaixo.  
Cada etapa é essencial para garantir a validade científica do estudo. 💡

---

## 🧩 Etapas de Participação

### 1. **Crie seu fork do repositório template**
1. Acesse o repositório base:  
   👉 [[https://github.com/ia-code-experiment/template-experiment-ai](https://github.com/kenielnunes/pfc-experiment-ai-code-template)]
2. Clique em **Fork → Create fork**.
3. Nomeie seu repositório da seguinte forma:
```

pfc-experiment-ai-code-template-seu-nome

````
Exemplo: `pfc-experiment-ai-code-template-joaosilva`

---

### 2. **Clone o seu fork para a sua máquina**
```bash
git clone https://github.com/pfc-experiment-ai-code-template/pfc-experiment-ai-code-template-joaosilva.git
cd pfc-experiment-ai-code-template-joaosilva
npm install
````

---

### 3. **Implemente as tarefas**

* As três tarefas estão nas pastas:

  ```
  /tarefa1-validate-user
  /tarefa2-refactor-code
  /tarefa3-todo-manager
  ```
* Leia o `README.md` dentro de cada pasta antes de começar.
* Desenvolva o código e garanta que os testes passem (`npm test`).

---

### 4. **Commits e organização**

Durante o desenvolvimento:

* Faça **commits frequentes e claros** (a cada parte concluída).
* Use a convenção abaixo:

| Prefixo     | Uso                              |
| ----------- | -------------------------------- |
| `feat:`     | nova funcionalidade              |
| `fix:`      | correção de bug                  |
| `refactor:` | melhoria sem mudar comportamento |
| `test:`     | criação/alteração de testes      |
| `docs:`     | alteração em documentação        |
| `chore:`    | manutenção ou setup              |

📌 **Exemplos:**

```
feat: adiciona validação de CPF
fix: corrige cálculo de idade mínima
refactor: separa função de validação de senha
```

> 💡 Recomenda-se fazer **1 commit a cada 15–30 minutos** de progresso.

---

### 5. **Envie o código (push)**

Após cada commit:

```bash
git push origin main
```

Isso enviará seu código para o GitHub, acionando automaticamente o **SonarCloud** para análise de qualidade.

---

### 6. **Regras de conduta**

* Use **somente a ferramenta de IA designada ao seu grupo** (Claude, ChatGPT, Gemini ou nenhuma no grupo controle).
* Não compartilhe seu código com outros participantes.
* Não use soluções externas (StackOverflow, GitHub etc.).
* É permitido usar prompts para compreender ou gerar código relacionado à tarefa.
* Mantenha o código público para que as métricas possam ser coletadas.

---

### 7. **Após finalizar todas as tarefas**

* Verifique se todos os testes (`npm test`) passam.
* Confirme que os commits estão no GitHub.
* Responda o **Questionário Pós-Experimento** enviado por e-mail.

---

# 🧠 Experimento: Impacto de Ferramentas de IA na Geração de Código

Este repositório faz parte do estudo **"Análise Comparativa do Impacto de Ferramentas de Inteligência Artificial para Geração de Código na Produtividade e Qualidade do Desenvolvimento de Software"**.

O objetivo deste experimento é **avaliar a influência de ferramentas de IA** (como ChatGPT, Claude e Gemini) no processo de desenvolvimento de software, comparando com o desenvolvimento tradicional.

---

## 📋 Estrutura do Repositório

Cada participante deverá desenvolver **três tarefas independentes**, localizadas nas pastas:

```
/tarefa1-validate-user
/tarefa2-refactor-code
/tarefa3-todo-manager
```

Cada pasta contém:

* Um arquivo `README.md` com a descrição detalhada da tarefa;
* Arquivo(s) `.js` com o código base a ser implementado;
* Pasta `/tests` com os testes automatizados;
* Tempo limite estimado para conclusão.

---

## ⚙️ Preparação do Ambiente

### 1. Requisitos

* **Node.js 20+**
* **npm** (instalado junto com Node)
* **VS Code** ou **Cursor IDE**
* Acesso à internet (para usar a ferramenta de IA, se aplicável)

### 2. Instalação

Clone ou baixe o repositório (ou o **fork** que você recebeu):

```bash
git clone <seu-repositorio-fork-url>
cd experiment-ai-template
npm install
```

---

## 🚀 Execução das Tarefas

### 🔹 Etapas obrigatórias:

1. **Leia o README** de cada tarefa antes de iniciar.
2. **Implemente o código** dentro da pasta indicada.
3. **Garanta que os testes passam** com sucesso (`npm test`).
4. **Faça commits frequentes**, com mensagens claras.
5. **Não use código pronto da internet** (StackOverflow, GitHub etc.).
   Use **apenas a ferramenta de IA designada** e o seu conhecimento.

---

## 🧩 Descrição das Tarefas

### 🧪 Tarefa 1 — Validação de Formulário

Implementar um sistema simples de validação de dados de usuário.

* Validação de email, CPF, senha e idade.
* Tratamento de erros personalizados.
* Retornar objeto com status e mensagens.

⏱ Tempo estimado: **1h30**

---

### 🧠 Tarefa 2 — Refatoração de Código

Refatorar um código legado propositalmente ruim, mantendo a mesma saída.

* Melhorar nomes de variáveis e modularidade.
* Remover duplicações.
* Adicionar tratamento de erros.

⏱ Tempo estimado: **2h**

---

### ⚙️ Tarefa 3 — Gerenciador Local de Tarefas (sem API)

Implementar um sistema de gerenciamento de tarefas em memória.

* Classe `TodoManager` com CRUD simples.
* Validação de dados e tratamento de erros.
* Paginação local e login simulado.

⏱ Tempo estimado: **3h**

---

## 💬 Regras do Experimento

1. Cada participante pertence a **um grupo específico**:

   * **GC** → Grupo Controle (sem IA)
   * **GE1** → Claude
   * **GE2** → ChatGPT
   * **GE3** → Gemini

2. Os grupos **experimentais** devem usar **apenas a ferramenta de IA designada** para auxiliar no desenvolvimento.

3. É permitido:

   * Usar prompts para entender requisitos ou gerar código **relacionado à tarefa**.
   * Ajustar, refatorar e comentar o código livremente.

4. É proibido:

   * Consultar repositórios externos prontos.
   * Compartilhar código entre participantes.
   * Utilizar múltiplas ferramentas de IA (apenas a designada).

5. Todos os commits devem ser feitos com mensagens claras, por exemplo:

   ```
   feat: implementa validação de senha
   fix: corrige verificação de CPF
   refactor: extrai função auxiliar
   ```

---

## 🔍 Avaliação Automática (SonarCloud)

Este repositório está configurado com **SonarCloud** via GitHub Actions.
A cada `push`, será feita uma análise automática de qualidade de código.

As métricas coletadas incluem:

* **Complexidade ciclomática**
* **Code smells**
* **Bugs**
* **Vulnerabilidades**
* **Duplicação de código**
* **Índice de manutenibilidade**

Você pode acompanhar sua análise diretamente no painel do SonarCloud:
👉 [https://sonarcloud.io/projects](https://sonarcloud.io/projects)

---

## 🧾 Entregáveis

Cada tarefa será avaliada com base em:

| Categoria              | Descrição                                    | Peso |
| ---------------------- | -------------------------------------------- | ---- |
| ✅ Funcionalidade       | Cumprimento dos requisitos e testes passando | 30%  |
| 🧩 Qualidade de Código | Clareza, organização e boas práticas (Sonar) | 30%  |
| 🧠 Produtividade       | Tempo e número de commits (Git)              | 20%  |
| 💬 Percepção           | Feedback pós-experimento (questionário)      | 20%  |

---

## 📦 Scripts Disponíveis

| Comando            | Descrição                             |
| ------------------ | ------------------------------------- |
| `npm install`      | Instala dependências                  |
| `npm test`         | Executa todos os testes automatizados |
| `npm run coverage` | Gera relatório de cobertura de testes |

---

## 🧪 Workflow Automático (CI/CD)

O repositório contém uma pipeline automática via **GitHub Actions**:

```yaml
name: SonarCloud
on: [push]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm test -- --coverage
      - uses: SonarSource/sonarcloud-github-action@v2
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

Essa pipeline executa os testes e envia automaticamente as métricas para o SonarCloud.

---

## 🧑‍💻 Contato e Suporte

Se tiver dúvidas durante o experimento:

* Entre em contato com o pesquisador responsável **(Keniel Alves Nunes)**.
* Ou envie mensagem no canal oficial do experimento no **Discord/WhatsApp**.

---

## 📅 Importante

* O tempo total estimado para todas as tarefas é de **6 a 7 horas**.
* As tarefas devem ser concluídas dentro do **prazo combinado**.
* Após finalizar, responda ao **Questionário Pós-Experimento** enviado por email.

---

### 💡 Lembre-se:

> O objetivo não é apenas “terminar o código”, mas **mostrar como você usa raciocínio e ferramentas de IA para resolver problemas de programação com qualidade**.

Boa sorte e bom código! 🚀
```
