const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: './uploads/'});
const dirCleaner = require('./dirCleaner');

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/' + 'index.html');
});

app.post('/send', upload.single('payload'), (request, response, next) => {
  const json = { "size": request.file.size };

  dirCleaner();
  response.send(json);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
