const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogs.js');
const temperamentRouter = require('./temperament.js');
const dogRouter = require('./dog.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {

    res.status(200).send('index')

});

router.use('/dogs', dogsRouter);
router.use('/temperament', temperamentRouter);
router.use('/dog', dogRouter);

module.exports = router;
