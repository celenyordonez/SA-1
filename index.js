const express = require('express')
const app = express()

app.use(express.json())

const tarefas = [
    {
        id: 1,
        titulo: "tarefa1",
        descricao: "descrição tarefa 1",
        status: "PENDENTE"
    },
    {
        id: 2,
        titulo: "tarefa2",
        descricao: "descrição tarefa 2",
        status: "EM ANDAMENTO"
    },
    {
        id: 3,
        titulo: "tarefa3",
        descricao: "descrição tarefa 3",
        status: "CONCLUIDA"
    }

]
    //Listar todas as tarefas:
    app.get("/tarefas", (req, res) => {
        return res.json(tarefas)
    })

    //Filtro por ID:
    app.get("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" })
    }
    return res.json(tarefa)
})

//Criar uma nova tarefa
app.post("/tarefas", (req,  res) => {
  
    const tarefaNovaTitulo = req.body.titulo
    const tarefaNovaDescricao = req.body.descricao
    const tarefaNovaStatus = req.body.status

    if (!tarefaNovaTitulo || !tarefaNovaDescricao || !tarefaNovaStatus){
        return res.status(400).json({ erro: "Todo os requisitos são OBRIGATÓRIOS!!"})
    }
   
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: tarefaNovaTitulo,
        descricao: tarefaNovaDescricao,
        status: tarefaNovaStatus
    }
    tarefas.push(novaTarefa)
    res.status(201).send()

    })
 //Atualizar tarefa
app.put("/tarefas/:id", (req,res) => {
   const id = parseInt(req.params.id)
 
   const tarefa = tarefas.find(t => t.id === id)
 
   if(!tarefa) {
    return res.status(404).json({ error: "Essa tarefa não existe"})
   }
 
   const {titulo, descricao, status} = req.body
 
   if(tarefa.status === "CONCLUIDA"){
    return res.status(400).json({error: "Esta tarefa já esta concluida! "})
   }
 
   const statusValidos = ["PENDENTE", "EM ANDAMENTO", "CONCLUIDA"]
 
   if (status && !statusValidos.includes(status)){
     return res.status(400).json({ error: "Status inválido" })
   }
 
    if (titulo !== undefined) {
        if (titulo.trim() === "") {
            return res.status(400).json({ error: "Titulo não pode ser vazio" })
        }
        tarefa.titulo = titulo
   }
 
   if (descricao !== undefined) {
        tarefa.descricao = descricao
   }
 
   if (status !== undefined) {
        tarefa.status = status
   }
 
   return res.json(tarefa)
 
})

//Deleta 
app.delete("/tarefas/:id", (req, res) => {
  const id =parseInt(req.params.id)
  const index = tarefas.findIndex(t => t.id === id)

if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada" })
  }

  tarefas.splice(index,1)

return res.status(204).send()
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
