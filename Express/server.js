const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './index.html'));
    res.send('Hello World');
});
app.post('/getData', (req, res) => {
    res.send('Welcome '+req.body.name+'!');
});

app.listen(3001, () => {
  console.log('server started');
});