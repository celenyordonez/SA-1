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
|GET | `/tarefas` | Lista os alunos|
|GET | `/tarefas/:id`| Buscar um aluno expecifico |
|POST | `/tarefas` | Cria um novo aluno|
|PUT  | `/tarefas/:id` | Atualiza um aluno|
|DELETE | `/tarefas/:id` | Remove um aluno|


## Tecnologias
- Node.js
- Express
