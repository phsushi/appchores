import express from 'express';
import cors from 'cors';
import Chores from './classes/Chore.js';
const tarefasClass = new Chores();
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
//Criar rota de criação de tarefa
app.post('/create/chore', (req, res) => {
    const { title, desc } = req.body;
    res.status(201).send("Tarefa criada com sucesso!");
    tarefasClass.create({ title, desc });
});
//Criar rota de atualização de tarefa
//Criar rota de excluir tarefa
//Criar rota de exibir tarefas (com ou sem filtro)
app.get('/list/chore', (req, res) => {
    const filtroRaw = req.query.title;
    const filtro = typeof (filtroRaw) === 'string' ? filtroRaw : undefined;
    const lista = tarefasClass.list(filtro);
    res.status(200).send(lista);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
let receba = 1;
