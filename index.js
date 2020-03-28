const express = require('express');
const rotas = require('./src/routes');
const app = express();



// Habilita o ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static('public'));

// invoca as rotas de usuário
app.use('/', rotas);
app.use((req, res)=>{
    return res.send("Acho que você se perdeu!");
})

app.listen(3300, ()=>console.log("Servidor rodando na porta 3300"))