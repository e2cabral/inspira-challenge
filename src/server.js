import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(__dirname + '/dist/web'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/web/index.html'));
});

app.listen(process.env.PORT || 8080);
