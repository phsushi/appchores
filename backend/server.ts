import express from 'express';
import cors from 'cors';
import Chores from './classes/Chore.js'
const tarefasClass = new Chores()

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


//Criar rota de criação de tarefa
app.post('/criar/tarefa', (req,res)=>{
  const tarefa = req.body
  console.log(typeof(tarefa))
  console.table(tarefa)

  // tarefasClass.create(tarefa)
})


//Criar rota de atualização de tarefa


//Criar rota de excluir tarefa


//Criar rota de exibir tarefas (com ou sem filtro)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
