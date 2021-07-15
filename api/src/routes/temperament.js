
require('dotenv').config();
const { Router } = require('express');
const router = Router();

const { API_KEY } = process.env;
const { Temperament } = require('../db.js');



router.get('/', async (req, res) => {

    try {
        let query = await Temperament.findAll({
            order: [['name', 'asc']]
        });

        if (query) {
            res.json(query);
        } else {
            res.json('Not found');
        }

    } catch (error) {
        res.status(500).json(error);
    }

});



module.exports = router;