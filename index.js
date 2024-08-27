import express from 'express';
const app = express();

app.set('view engine', 'ejs');

//configura a pasta views para outro local
//app.set('views', path.join(__dirname, 'tela'));

app.use(express.urlencoded({ extended:true }));

app.get('/',function (req,res){
    //res.send("Oi mundo!");
    res.render('tela1')
})

app.post('/',function (req,res){
    let resultado;
    const val1 = parseFloat(req.body.val1);
    const val2 = parseFloat(req.body.val2);
    //const op = req.body.operacao;
    if(req.body.operacao =="soma"){
        resultado = val1+val2;
    }else if(req.body.operacao=='subt'){
        resultado = val1-val2;
    }else if(req.body.operacao=='mult'){
        resultado = val1*val2;
    }else if(req.body.operacao=='divi'){
        resultado = val1/val2;
    }else{
        res.send("Operação inválida")
    }
    //res.send("O resultado da operação solicitada é: "+ resultado)
    res.render('resposta.ejs',{Valor:resultado,Operacao:req.body.operacao})
})

app.get('/rifa', function(req, res){
    res.render('configurarifa')
})

app.post('/rifa', function(req, res){
    const inicio = parseInt(req.body.inicio)
    const fim = parseInt(req.body.fim)
    const mensagem = req.body.mensagem

    if(inicio>=fim){
        res.send("Quantidade de rifas inválidas, tente novamente.")
    }

    res.render('rifa',{inicio:inicio,fim:fim,mensagem:mensagem})
})



app.get('/Diego',function(req,res){
    res.send("Diego!");
})

app.get('/:x',function(req,res){
    const mensagem = "Oi "+req.params.x;
    res.send(mensagem)
})

app.get('/:nome/:sobrenome',function(req,res){
    const mensagem = "Oi "+req.params.nome+" "+req.params.sobrenome;
    res.send(mensagem)
})

// Essa rota recebe dois valores e a operação e da a resposta em tela.
app.get('/:calc/:n1/:n2',function(req,res){
    let calc;
    if(req.params.calc =="soma"){
        calc = parseFloat(req.params.n1)+parseFloat(req.params.n2);
    }else if(req.params.calc =="mult"){
        calc = parseFloat(req.params.n1)*parseFloat(req.params.n2);
    }else if(req.params.calc =="div"){
        calc = parseFloat(req.params.n1)/parseFloat(req.params.n2);
    }else if(req.params.calc =="subt"){
        calc = parseFloat(req.params.n1)-parseFloat(req.params.n2);
    }else{
        res.send("Essa operação não pode ser executada")
    }
    res.send("O resultado é "+calc)
                            
})


app.listen(3000);