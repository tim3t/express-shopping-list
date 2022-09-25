const express = require('express');
const ExpressError = require('./expressError');
const items = require('./fakeDb');
const itemRoutes = require('./routes/items');

const app = express();
app.use(express.json());
app.use('/items', itemRoutes);

app.use(function(req, res, next) {
	return new ExpressError('File Not Found', 404);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	return res.json({
		error: err.message
	});
});

module.exports = app;
app.listen(3000, function() {
	console.log('Server is running on port 3000.');
});
