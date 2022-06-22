let express = require('express')
let app = express();

app.get("/", (req, res) => {
    res.json({success: true})
})

app.get("/cor/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa;
    if(pessoa === "david"){
        res.json({cor: "azul"});
    }
   
})

module.exports = app;