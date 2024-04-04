import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

//rota get que retorna todos os registros no banco de dados
routes.get('/', async (req, res) => {
    try {
      const { recordset } = await sql.query('select * from Agendamento');
      return res.status(200).json(recordset);
    } 
    catch (error) {
      return res.status(501).json('Erro ao buscar agendamentos.');
    }
  });

  //registro chamado novo
  routes.post('/agendamento/novo', async (req, res) => {
    try {
      const { dataAgenda, horario, descricao } = req.body;
      await pool.query`INSERT INTO Agendamento VALUES (${dataAgenda}, ${horario}, ${descricao})`;
      res.status(201).json('Chamado cadastrado com sucesso.');
    } 
    catch (error) {
      return res.status(501).json('Erro ao cadastrar agendamento...');
    }
  });

  
  routes.delete('/agendamento/excluir:id', async (req, res)=>{
    try {
        const { id } = req.params
        await pool.query`delete from Agendamento where id = ${id}`
        return res.status(200).json('agendamento excluido!')
    } 
    catch (error) {
        return res.status(501).json('erro ao excluir agendamento...')
    }
})

export default routes