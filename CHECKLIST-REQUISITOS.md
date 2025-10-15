# 📋 Checklist - Verificação de Requisitos do Experimento

## 🎯 Objetivo do Experimento
**"Análise Comparativa do Impacto de Ferramentas de Inteligência Artificial para Geração de Código na Produtividade e Qualidade do Desenvolvimento de Software"**

---

## ✅ 1. Estrutura do Projeto

### **Repositório Template:**
- [ ] ✅ Repositório público no GitHub
- [ ] ✅ README principal com instruções completas
- [ ] ✅ 3 pastas de tarefas independentes
- [ ] ✅ Configuração SonarCloud funcional
- [ ] ✅ Configuração Jest para testes
- [ ] ✅ GitHub Actions configurado

### **Organização das Tarefas:**
- [ ] ✅ `tarefa1-validate-user/` - Validação de formulário
- [ ] ✅ `tarefa2-refactor-code/` - Refatoração de código legado
- [ ] ✅ `tarefa3-todo-manager/` - Sistema de gerenciamento avançado

---

## ✅ 2. Tarefa 1 - Validação de Formulário

### **Funcionalidades Obrigatórias:**
- [ ] ✅ Validação de email (formato padrão)
- [ ] ✅ Validação de CPF (algoritmo completo)
- [ ] ✅ Validação de senha (8+ chars, maiúscula, número, especial)
- [ ] ✅ Validação de idade (18+ anos)
- [ ] ✅ Retorno padronizado (status + messages)

### **Arquivos:**
- [ ] ✅ `validateUser.js` - Implementação principal
- [ ] ✅ `validateUser.test.js` - Testes unitários
- [ ] ✅ `README.md` - Instruções específicas

### **Qualidade:**
- [ ] ✅ Código limpo e bem estruturado
- [ ] ✅ Funções auxiliares quando necessário
- [ ] ✅ Tratamento de casos edge
- [ ] ✅ Cobertura de testes adequada

---

## ✅ 3. Tarefa 2 - Refatoração de Código Legado

### **Código Base (legacyCode.js):**
- [ ] ✅ Código propositalmente ruim para refatoração
- [ ] ✅ Múltiplos problemas de qualidade:
  - [ ] ✅ Nomes de variáveis ruins (`p`, `q`, `t`, `c`, `r`, `d`, `f`)
  - [ ] ✅ Uso de `var` ao invés de `let/const`
  - [ ] ✅ Uso de `==` ao invés de `===`
  - [ ] ✅ Magic numbers (0.2, 0.15, 15, 10, 5)
  - [ ] ✅ Código morto (`if (false)`)
  - [ ] ✅ Variáveis não utilizadas
  - [ ] ✅ Complexidade ciclomática alta
  - [ ] ✅ Duplicação de código

### **SonarCloud Detection:**
- [ ] ✅ SonarCloud detecta problemas no código legado
- [ ] ✅ Issues gerados para code smells
- [ ] ✅ Métricas de qualidade calculadas
- [ ] ✅ Quality Gate falha devido aos problemas

### **Refatoração Esperada:**
- [ ] ✅ Nomes de variáveis descritivos
- [ ] ✅ Funções auxiliares extraídas
- [ ] ✅ Constantes para magic numbers
- [ ] ✅ Uso de `===` ao invés de `==`
- [ ] ✅ Uso de `let/const` ao invés de `var`
- [ ] ✅ Estrutura mais limpa e organizada

---

## ✅ 4. Tarefa 3 - Sistema de Gerenciamento Avançado

### **Classes Obrigatórias:**
- [ ] ✅ `Task` - Representa uma tarefa
- [ ] ✅ `User` - Representa um usuário
- [ ] ✅ `ProjectStats` - Estatísticas do projeto
- [ ] ✅ `TodoManager` - Classe principal

### **Enums:**
- [ ] ✅ Status - todo, in_progress, done
- [ ] ✅ Priority - low, medium, high

### **Sistema de Códigos (Jira-like):**
- [ ] ✅ Geração automática de códigos (PROJ-123, TASK-456)
- [ ] ✅ Suporte a múltiplos projetos
- [ ] ✅ Busca por código (`findTaskByCode`)
- [ ] ✅ Contadores por projeto

### **Workflow de Status:**
- [ ] ✅ Transições válidas implementadas
- [ ] ✅ Validação de transições
- [ ] ✅ Regras de negócio (urgent não pode cancelar)

### **Sistema de Usuários:**
- [ ] ✅ Roles (admin, manager, developer)
- [ ] ✅ Permissões baseadas em roles
- [ ] ✅ Login/logout funcional

### **Funcionalidades Avançadas:**
- [ ] ✅ Criação de tarefas com validações
- [ ] ✅ Listagem com filtros e paginação
- [ ] ✅ Atribuição de tarefas
- [ ] ✅ Controle de tempo (logWork)
- [ ] ✅ Relatórios e estatísticas
- [ ] ✅ Sistema de notificações
- [ ] ✅ Exportação para CSV
- [ ] ✅ Busca avançada

---

## ✅ 5. Configuração SonarCloud

### **Análise de Qualidade:**
- [ ] ✅ Projeto configurado no SonarCloud
- [ ] ✅ GitHub Actions funcionando
- [ ] ✅ Análise automática a cada push
- [ ] ✅ Métricas de qualidade sendo coletadas:
  - [ ] ✅ Bugs detectados
  - [ ] ✅ Code Smells identificados
  - [ ] ✅ Vulnerabilidades de segurança
  - [ ] ✅ Cobertura de testes
  - [ ] ✅ Duplicação de código
  - [ ] ✅ Complexidade ciclomática
  - [ ] ✅ Complexidade cognitiva

### **Para Participantes:**
- [ ] ✅ Instruções claras de configuração
- [ ] ✅ Passo-a-passo no README
- [ ] ✅ Configuração individual (cada um tem seu projeto)
- [ ] ✅ Compartilhamento de link público

---

## ✅ 6. Configuração de Testes

### **Jest Configuration:**
- [ ] ✅ Suporte a ES Modules
- [ ] ✅ Cobertura de código configurada
- [ ] ✅ Scripts por tarefa (`npm run test:tarefa1`, etc.)
- [ ] ✅ Relatórios LCOV gerados

### **Testes por Tarefa:**
- [ ] ✅ Tarefa 1: Testes para validações
- [ ] ✅ Tarefa 2: Testes para refatoração
- [ ] ✅ Tarefa 3: Testes para sistema completo

---

## ✅ 7. Instruções e Documentação

### **README Principal:**
- [ ] ✅ Instruções de fork e clone
- [ ] ✅ Configuração SonarCloud (etapa 3)
- [ ] ✅ Regras de conduta por grupo
- [ ] ✅ Instruções de registro de tempo
- [ ] ✅ Convenções de commit

### **READMEs das Tarefas:**
- [ ] ✅ Tarefa 1: Requisitos e critérios claros
- [ ] ✅ Tarefa 2: Problemas identificados e soluções esperadas
- [ ] ✅ Tarefa 3: Funcionalidades complexas e regras de negócio

### **Remoção de Tempos Estimados:**
- [ ] ✅ Sem referência a tempo estimado
- [ ] ✅ Foco na qualidade ao invés de velocidade

---

## ✅ 8. Configuração para Participantes

### **Grupos do Experimento:**
- [ ] ✅ **GC (Grupo Controle)**: Sem IA, pode consultar documentação
- [ ] ✅ **GE1**: Claude
- [ ] ✅ **GE2**: ChatGPT  
- [ ] ✅ **GE3**: Gemini

### **Regras Diferenciadas:**
- [ ] ✅ GC: Permissões para StackOverflow, GitHub, tutoriais
- [ ] ✅ GE: Apenas ferramenta de IA designada
- [ ] ✅ Todos: Não compartilhar código entre participantes

### **Registro de Tempo:**
- [ ] ✅ Console.log obrigatório no início de cada tarefa
- [ ] ✅ Commit inicial com identificação da ferramenta
- [ ] ✅ Rastreamento via Git para métricas de tempo

---

## ✅ 9. Coleta de Dados

### **Métricas GitHub:**
- [ ] ✅ Tempo de desenvolvimento (commits)
- [ ] ✅ Número de commits por tarefa
- [ ] ✅ Ferramenta de IA utilizada
- [ ] ✅ Histórico completo de desenvolvimento

### **Métricas SonarCloud:**
- [ ] ✅ Quality Gate Status
- [ ] ✅ Bugs, Vulnerabilities, Code Smells
- [ ] ✅ Cobertura de testes
- [ ] ✅ Complexidade (ciclo e cognitiva)
- [ ] ✅ Technical Debt
- [ ] ✅ Maintainability Rating

### **Links Compartilhados:**
- [ ] ✅ Repositório GitHub público
- [ ] ✅ Projeto SonarCloud público
- [ ] ✅ Fácil acesso para coleta de dados

---

## 🎯 Como Usar Este Checklist

### **Para o Pesquisador:**
1. ✅ Verificar cada item antes de iniciar o experimento
2. ✅ Testar com participantes piloto
3. ✅ Validar coleta de dados
4. ✅ Confirmar que SonarCloud detecta problemas

### **Para Participantes:**
1. ✅ Seguir instruções do README
2. ✅ Configurar SonarCloud corretamente
3. ✅ Implementar todas as funcionalidades
4. ✅ Compartilhar links dos projetos

### **Para Validação:**
1. ✅ Executar `npm test` - deve passar
2. ✅ Verificar SonarCloud - deve mostrar issues na tarefa 2
3. ✅ Testar funcionalidades das 3 tarefas
4. ✅ Validar que links são públicos e acessíveis

---

## 🚨 Pontos Críticos

- [ ] ✅ **SonarCloud deve detectar problemas** na tarefa 2
- [ ] ✅ **Todas as tarefas devem ser funcionais** após implementação
- [ ] ✅ **Configuração individual** do SonarCloud por participante
- [ ] ✅ **Registro de tempo** via console.log obrigatório
- [ ] ✅ **Links públicos** para coleta de dados

---

**✅ Status Geral:** [ ] Pronto para o experimento
