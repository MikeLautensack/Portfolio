let express  = require('express');
let app = express();
let bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static('public'))

var value='1.';

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './public', 'index.html'))
})


app.get('/game/:move', function(req, res) {
	let move = req.params;
	console.log(move);//game logic
	res.send('next candi moves')
})




app.listen(3000, function(){
	console.log("Server started on port: 3000")
})