const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('HHH'));

app.listen(port);
console.log(`Code Updated successfully`);
