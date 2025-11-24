const express = require ('express');
const app = express();
const port = 8080;

app.get('/',(req,res) => {
    res.send('Bonjour, ceci est un server web simple en utilisant node.js et express. js ');
});

app.listen(port, () =>{
    console.log(`Le server est en écoute sur le port ${port}`)
});
