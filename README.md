# API Tarefas - Node.js + Express

API REST simples para gerenciar tarefas

---

## Pré-requisitos
- Node.js instalado

---

## Como rodar

Instalar dependências:
npm i

Iniciar o servidor:
node index.js

Acessar:
Abra o navegador em: http://localhost:3000

---

## Endpoints

### Tarefas

Metodo	Endpoint	Descrição
GET	/tasks	Lista todas as tarefas
GET	/tasks/:id	Buscar uma tarefa específica
POST	/tasks	Cria uma nova tarefa
PUT	/tasks/:id	Atualiza uma tarefa
DELETE	/tasks/:id	Remove uma tarefa

---

## Regras de Negócio
- Não permite criar tarefa com título vazio
- Não permite alterar tarefa já concluída
- Não permite concluir tarefa que já está concluída
- Cada tarefa possui ID único
- Retorna códigos HTTP corretos

---

## Tecnologias
Node.js  
Express  


---

## Notas
Os dados são armazenados em memória (reiniciar o servidor apaga tudo)

