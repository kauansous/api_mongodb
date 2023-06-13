const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// definindo o modelo Residencia
const Residencia = mongoose.model('residencias', {
  nome: String,
  tipo: String,
  capacidade: String,
  diretor: [String],
  rua: String,
  numero: String,
  bairro: String,
  cep: String,
  cidade: String,
  estado: String,
  status: String
});

//definindo o modelo Residente
const Residente = mongoose.model('residentes', {
  uid: String,
  nome: String,
  cpf: String,
  data_nascimento: String,
  sexo: String,
  email: String,
  telefone: String,
  contato_emergencia_nome: String,
  contato_emergencia_parentesco: String,
  contato_emergencia_telefone: String,
  rua: String,
  numero: String,
  bairro: String,
  cep: String,
  cidade: String,
  estado: String,
  residencia: [String],
  apartamento: [String],
  numero_quarto: [String],
  data_entrada: [String],
  data_saida: [String],
  acesso: String,
  historico_data: [String],
  historico_sentido: [String],
  historico_permissao: [String],
})

//definindo o modelo visitante
const Visitante = mongoose.model('visitantes', {
  nome: String,
  cpf: String,
  cpf_responsavel: String,
  residencia: String,
  apartamento: String,
  numero_quarto: String,
  data_entrada: String,
  data_saida: String,
  acesso: String,
});

//definindo o modelo funcionário
const Funcionario = mongoose.model('funcionarios', {
  nome: String,
  usuario: String,
  senha: String,
});


const Cartoes = mongoose.model('cartoes', {
  residencia: String,
  objects: [{
    uid: String,
    nome: String
  }]
});

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());

const db_string = `${process.env.MONGO_URL}`;

mongoose.connect(db_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  // Conexão bem-sucedida
  console.log('Conexão com o banco de dados estabelecida');
});

//Rotas das residências
app.get('/residencias', async (_req, res) => {
  try {
    const residencias = await Residencia.find();
    res.send(residencias);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/residencias', async (req, res) => {
  try {
    const residencia = new Residencia(req.body);
    await residencia.save();
    res.send(residencia);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/residencias/:id', async (req, res) => {
  try {
    const residencia = await Residencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(residencia);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/residencias/:id', async (req, res) => {
  try {
    const residencia = await Residencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(residencia);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/residencias/:id', async (req, res) => {
  try {
    const residencia = await Residencia.findByIdAndDelete(req.params.id);
    res.send(residencia);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Rotas dos residentes
app.get('/residentes', async (_req, res) => {
  try {
    const residentes = await Residente.find();
    res.send(residentes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/residentes', async (req, res) => {
  try {
    const residentes = new Residente(req.body);
    await residentes.save();
    res.send(residentes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/residentes/:id', async (req, res) => {
  try {
    const residentes = await Residente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(residentes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/residentes/:id', async (req, res) => {
  try {
    const residentes = await Residente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(residentes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/residentes/:id', async (req, res) => {
  try {
    const residentes = await Residente.findByIdAndDelete(req.params.id);
    res.send(residentes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Rotas dos visitantes
app.get('/visitantes', async (_req, res) => {
  try {
    const visitantes = await Visitante.find();
    res.send(visitantes);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/visitantes', async (req, res) => {
  try {
    const visitantes = new Visitante(req.body);
    await visitantes.save();
    res.send(visitantes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/visitantes/:id', async (req, res) => {
  try {
    const visitantes = await Visitante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(visitantes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/visitantes/:id', async (req, res) => {
  try {
    const visitantes = await Visitante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(visitantes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/visitantes/:id', async (req, res) => {
  try {
    const visitantes = await Visitante.findByIdAndDelete(req.params.id);
    res.send(visitantes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Rotas dos funcionários
app.get('/funcionarios', async (_req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.send(funcionarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Rotas dos cartões
app.get('/cartoes', async (_req, res) => {
  try {
    const cartoes = await Cartoes.find();
    res.send(cartoes);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/cartoes', async (req, res) => {
  try {
    const cartoes = new Cartoes(req.body);
    await cartoes.save();
    res.send(cartoes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/cartoes/:id', async (req, res) => {
  try {
    const cartoes = await Cartoes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(cartoes);

  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/cartoes/:id', async (req, res) => {
  try {
    const cartoes = await Cartoes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(cartoes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/cartoes/:id', async (req, res) => {
  try {
    const cartoes = await Cartoes.findByIdAndDelete(req.params.id);
    res.send(cartoes);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor Hospedado na Porta ${port}`);
