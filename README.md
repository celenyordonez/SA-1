# API Escola - Nodee.Js + Express
API REST simples para gerenciar alunos e professores 

## Pré-requisitos 
-Node.js instalado

## Como rodar

### Instalar dependencias
```bash
npm i
```

### Iniciar o servidor

```bash
node index.js
```

### Acessar
Abra o navegador em: `http://localhost:3000`

## Endpoints

### Tarefas

| Metodo | Endpoint | Descrição |
|--------|----------|-----------|
|GET | `/tarefas` | Lista as tarefas|
|GET | `/tarefas/:id`| Buscar uma tarefa expecifica |
|POST | `/tarefas` | Cria uma nova tarefas|
|PUT  | `/tarefas/:id` | Atualiza uma tarefas|
|DELETE | `/tarefas/:id` | Remove um tarefas|


## Tecnologias
- Node.js
- Express
