const Item = require('../item');
const express = require('express');
const app = require('../app');

const router = express.Router();

router.get('', (req, res, next) => {
	try {
		return res.json({ items: Item.findAll() });
	} catch (e) {
		return next(e);
	}
});

router.post('', (req, res, next) => {
	try {
		let newItem = new Item(req.body.name, req.body.price);
		return res.json({ item: newItem });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
