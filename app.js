const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Everthing works good '));

app.listen(port);
console.log(`Code Updated successfully`);
