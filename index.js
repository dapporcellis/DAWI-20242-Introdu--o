import express from 'express';
const app = express();

app.get('/',function (req,res){
    res.send("Oi mundo!");
})

app.get('/Diego',function(req,res){
    res.send("Diego!");
})

app.listen(3000);