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
   👉 [https://github.com/kenielnunes/pfc-experiment-ai-code-template](https://github.com/kenielnunes/pfc-experiment-ai-code-template)

2. No canto superior direito, clique em **Fork** → **Create fork**.

3. Na página de criação do fork:

   - **Owner**: Será sua conta do GitHub
   - **Repository name**: Renomeie para `pfc-experiment-ai-code-template-seunome`
     - Exemplo: `pfc-experiment-ai-code-template-joaosilva`
     - Exemplo: `pfc-experiment-ai-code-template-maria`
   - **Description**: (opcional)
   - ✅ Certifique-se de que está **público** (não privado)

4. Clique em **Create fork**.

---

### 2. **Clone o seu fork para a sua máquina**

Após criar o fork, copie a URL do **seu repositório** (não o original):

```bash
# Substitua "SEU-USUARIO" e "SEU-NOME" pelos seus dados
git clone https://github.com/SEU-USUARIO/pfc-experiment-ai-code-template-SEU-NOME.git

# Exemplo real:
# git clone https://github.com/joaosilva/pfc-experiment-ai-code-template-joaosilva.git

cd pfc-experiment-ai-code-template-SEU-NOME
npm install
```

---

### 3. **⚠️ Configure o SonarCloud (OBRIGATÓRIO)**

**Esta etapa é ESSENCIAL para a coleta de métricas de qualidade do código.**

Configure sua própria conta no SonarCloud para análise automática da qualidade do código.

#### 📋 Passos para configurar:

1. **Crie conta no SonarCloud:**

   - Acesse: [https://sonarcloud.io](https://sonarcloud.io)
   - Clique em **"Log in"** → **"With GitHub"**
   - Autorize o acesso à sua conta GitHub

2. **Importe seu repositório:**

   - Clique em **"+"** (canto superior direito) → **"Analyze new project"**
   - Selecione seu fork: `pfc-experiment-ai-code-template-seunome`
   - Clique em **"Set Up"**

3. **Configure com GitHub Actions:**

   - Escolha: **"With GitHub Actions"** (já está configurado no repositório)
   - Copie o **SONAR_TOKEN** que aparece na tela

4. **Adicione o token no GitHub:**

   - Acesse seu fork no GitHub
   - Vá em **Settings** → **Secrets and variables** → **Actions**
   - Clique em **"New repository secret"**
   - Name: `SONAR_TOKEN`
   - Value: Cole o token copiado do SonarCloud
   - Clique em **"Add secret"**

5. **Atualize o arquivo `sonar-project.properties`:**

   ```properties
   # Substitua "SEU-USUARIO" pelo seu username do GitHub:
   sonar.projectKey=SEU-USUARIO_pfc-experiment-ai-code-template-seunome
   sonar.organization=SEU-USUARIO

   # Exemplo:
   sonar.projectKey=joaosilva_pfc-experiment-ai-code-template-joaosilva
   sonar.organization=joaosilva
   ```

6. **Teste a configuração:**

   ```bash
   git add sonar-project.properties
   git commit -m "chore: configura SonarCloud"
   git push origin main
   ```

   - Vá em **Actions** no GitHub e verifique se o workflow executou
   - Acesse o SonarCloud e veja os resultados da análise

7. **📤 IMPORTANTE - Compartilhe o link do seu projeto:**
   - Copie a URL do seu projeto no SonarCloud
   - Exemplo: `https://sonarcloud.io/project/overview?id=joaosilva_pfc-experiment-ai-code-template-joaosilva`
   - **Envie esse link para o pesquisador** junto com o link do seu repositório GitHub

---

### 4. **Implemente as tarefas**

- As três tarefas estão nas pastas:

  ```
  /tarefa1-validate-user
  /tarefa2-refactor-code
  /tarefa3-todo-manager
  ```

- Leia o `README.md` dentro de cada pasta antes de começar.
- Desenvolva o código e garanta que os testes passem (`npm test`).

#### ⚠️ **IMPORTANTE - Registro de Início de Cada Tarefa:**

**Antes de começar cada tarefa**, você DEVE fazer um commit inicial com um `console.log` indicando o início:

**Exemplo para Tarefa 1:**

```javascript
// No arquivo validateUser.js, adicione no início:
console.log("Início Tarefa 1 - [SUA FERRAMENTA DE IA OU 'SEM IA']");
// Exemplo: console.log("Início Tarefa 1 - Claude");
// Exemplo: console.log("Início Tarefa 1 - ChatGPT");
// Exemplo: console.log("Início Tarefa 1 - Gemini");
// Exemplo: console.log("Início Tarefa 1 - Sem IA");
```

**Faça o commit:**

```bash
git add .
git commit -m "chore: início tarefa 1"
git push origin main
```

Repita este processo para as **Tarefas 2 e 3**.

📌 **Identificação da Ferramenta de IA:**

- Se você está no **Grupo Experimental (GE1, GE2, GE3)**: Indique qual IA você está usando (Claude, ChatGPT ou Gemini)
- Se você está no **Grupo Controle (GC)**: Indique "Sem IA"

> 💡 Isso é essencial para metrificar o tempo de desenvolvimento de cada tarefa!

---

### 5. **Commits e organização**

Durante o desenvolvimento:

- Faça **commits frequentes e claros** (a cada parte concluída).
- Use a convenção abaixo:

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

### 6. **Envie o código (push)**

Após cada commit:

```bash
git push origin main
```

Isso enviará seu código para o GitHub, acionando automaticamente o **SonarCloud** para análise de qualidade.

---

### 7. **Regras de conduta**

#### **Para Grupos Experimentais (GE1, GE2, GE3):**

- Use **somente a ferramenta de IA designada ao seu grupo** (Claude, ChatGPT ou Gemini).
- É permitido usar prompts para compreender ou gerar código relacionado à tarefa.
- Não compartilhe seu código com outros participantes.

#### **Para Grupo Controle (GC - Sem IA):**

- **NÃO use nenhuma ferramenta de IA** para gerar ou sugerir código.
- **Permitido**: Consultar documentação oficial, StackOverflow, GitHub, tutoriais e qualquer recurso online para **consultas e aprendizado**.
- **Proibido**: Usar ferramentas como GitHub Copilot, Tabnine ou similares.
- Não compartilhe seu código com outros participantes.

#### **Para Todos os Grupos:**

- Mantenha o código público para que as métricas possam ser coletadas.
- Desenvolva o código você mesmo, usando apenas os recursos permitidos para seu grupo.

---

### 8. **Após finalizar todas as tarefas**

- Verifique se todos os testes (`npm test`) passam.
- Confirme que os commits estão no GitHub.
- Responda o **Questionário Pós-Experimento** enviado por e-mail.

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

- Um arquivo `README.md` com a descrição detalhada da tarefa;
- Arquivo(s) `.js` com o código base a ser implementado;
- Pasta `/tests` com os testes automatizados;
- Tempo limite estimado para conclusão.

---

## ⚙️ Preparação do Ambiente

### 1. Requisitos

- **Node.js 20+**
- **npm** (instalado junto com Node)
- **VS Code** ou **Cursor IDE**
- Acesso à internet (para usar a ferramenta de IA, se aplicável)

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

- Validação de email, CPF, senha e idade.
- Tratamento de erros personalizados.
- Retornar objeto com status e mensagens.

---

### 🧠 Tarefa 2 — Refatoração de Código

Refatorar um código legado propositalmente ruim, mantendo a mesma saída.

- Melhorar nomes de variáveis e modularidade.
- Remover duplicações.
- Adicionar tratamento de erros.

---

### ⚙️ Tarefa 3 — Gerenciador Local de Tarefas (sem API)

Implementar um sistema de gerenciamento de tarefas em memória.

- Classe `TodoManager` com CRUD simples.
- Validação de dados e tratamento de erros.
- Paginação local e login simulado.

---

## 💬 Regras do Experimento

### 📋 Grupos de Participantes

1. Cada participante pertence a **um grupo específico**:

   - **GC** → Grupo Controle (sem IA)
   - **GE1** → Gemini
   - **GE2** → ChatGPT
   - **GE3** → Claude

2. Os grupos **experimentais** devem usar **apenas a ferramenta de IA designada** para auxiliar no desenvolvimento.

### ⏱️ **Registro de Tempo (OBRIGATÓRIO)**

**Antes de iniciar cada tarefa**, adicione um `console.log` no arquivo principal com:

- Indicação de início da tarefa
- Nome da ferramenta de IA utilizada (ou "Sem IA" para grupo controle)

**Exemplo:**

```javascript
console.log("Início Tarefa 1 - Claude");
```

Faça o commit imediatamente:

```bash
git commit -m "chore: início tarefa 1"
git push origin main
```

Isso permitirá calcular o tempo exato de desenvolvimento de cada tarefa através do histórico de commits.

3. É permitido:

   - Usar prompts para entender requisitos ou gerar código **relacionado à tarefa**.
   - Ajustar, refatorar e comentar o código livremente.

4. É proibido:

   - Consultar repositórios externos prontos.
   - Compartilhar código entre participantes.
   - Utilizar múltiplas ferramentas de IA (apenas a designada).

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

- **Complexidade ciclomática**
- **Code smells**
- **Bugs**
- **Vulnerabilidades**
- **Duplicação de código**
- **Índice de manutenibilidade**

Você pode acompanhar sua análise diretamente no painel do SonarCloud:
👉 [https://sonarcloud.io/projects](https://sonarcloud.io/projects)

---

## 🧾 Entregáveis

Cada tarefa será avaliada com base em:

| Categoria              | Descrição                                    | Peso |
| ---------------------- | -------------------------------------------- | ---- |
| ✅ Funcionalidade      | Cumprimento dos requisitos e testes passando | 30%  |
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

- Entre em contato com o pesquisador responsável **(Keniel Alves Nunes)**.
- Ou envie mensagem no canal oficial do experimento no **Discord/WhatsApp**.

---

## 📅 Importante

- O tempo total estimado para todas as tarefas é de **6 a 7 horas**.
- As tarefas devem ser concluídas dentro do **prazo combinado**.
- Após finalizar, responda ao **Questionário Pós-Experimento** enviado por email.

---

### 💡 Lembre-se:

> O objetivo não é apenas “terminar o código”, mas **mostrar como você usa raciocínio e ferramentas de IA para resolver problemas de programação com qualidade**.

Boa sorte e bom código! 🚀

```
Teste Sonar
```
