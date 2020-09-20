const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/login', (req, res) => {
    res.send({correct:false,incorrect:[false,true]})
})
app.listen(8080,'200.135.58.18');