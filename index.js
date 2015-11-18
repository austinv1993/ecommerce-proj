var express = require('express')
	,	bodyParser = require('body-parser')
	,	cors = require('cors')
	,	mongojs = require('mongojs')
	,	port = 3000
	,	app = express()
	,	db = mongojs('products')
	,	product = db.collection('product')
	
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api/product', function(req, res) {
	product.insert(req.body, function(err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result)
		}
	})
})
app.get('/api/product', function(req, res) {
	product.find(req.query, function(err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result)
		}
	})
})
app.put('/api/product', function(req, res) {
	product.update({'_id': mongojs.ObjectId(req.query.id)}, req.body, function(err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result)
		}
	})
})
app.delete('/api/product', function(req, res) {
	product.remove({'_id': mongojs.ObjectId(req.query.id)}, function(err, result) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(result)
		}
	})
})









app.listen(port, function() {
	console.log('listening on port:', port);
})