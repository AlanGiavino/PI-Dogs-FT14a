const { Router } = require('express');
const router = Router();
const { Breed } = require('../db.js');
router.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temperaments } = req.body;
	if (temperaments.length === 0) {
		return res.sendStatus(500);
	}
	try {
		let newBreed = await Breed.create({
			name,
			height,
			weight,
			life_span,
			image: image
		});
		await newBreed.addTemperament(temperaments);
		res.json(newBreed);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;

