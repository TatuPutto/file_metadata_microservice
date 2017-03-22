const multer = require('multer');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', multer().single('image'), (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({size: req.file.size}));
});

app.listen(app.get('port'));
