const express = require('express');
const { Sequelize } = require('sequelize');
const router = express.Router();
const saidasmotos = require('../Models/saidasmotos')
const saidascarros = require('../Models/saidascarros')
const placascarros = require('../Models/placascarros')
const saidasgasolina = require('../Models/saidasgasolina')
const db = require('../db/db')

router.get('/', async (req, res) => {
    const saidas = await saidasmotos(db, Sequelize.DataTypes).findAll();

    res.status(200).send(saidas)
})

router.get('/saidascarros', async (req, res) => {
    const saidas = await saidascarros(db, Sequelize.DataTypes).findAll();

    res.status(200).send(saidas)
})

router.get('/placascarros', async (req, res) => {
    const saidas = await placascarros(db, Sequelize.DataTypes).findAll();

    res.status(200).send(saidas)
})

router.get('/abastecimento', async (req, res) => {
    const saidas = await saidasgasolina(db, Sequelize.DataTypes).findAll();

    res.status(200).send(saidas)
})

module.exports = router;