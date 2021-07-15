require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { API_KEY } = process.env;
const { Breed, Temperament, breed_temp } = require('../db.js');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {

    let { name } = req.query;

    try {

        if (name) {
            let query = await Breed.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: [Temperament]
            })
            if (query.length > 0) {
                res.json(query);
            } else {
                res.status(404).json('Not found');
            }
        } else {
            let query = await Breed.findAll({
                include: [Temperament]
            });
            res.json(query);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:idBreed', async (req, res) => {

    let { idBreed } = req.params;

    try {
        let query = await Breed.findByPk(idBreed, {
            include: [Temperament]
        });
        if (query) {
            res.json(query);
        } else {
            res.status(404).json('Not found');
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;