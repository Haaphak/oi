const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo a Steam pirateada kkk</h1>");
})

//rota do cadastro de produtos
app.get("/Games", function(req,res){
    res.send("<h1>Lista de Games!!! :D</h1>");
})

//rota com parametro 
app.get("/Games/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Game:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:usuario?", function(req,res){
    //req --> dados enviados pelo cliente
    var usuario = req.params.usuario;
    if (usuario){
        res.send("<h1>Item " + usuario + " criado!</h1>");
    }else{
        res.send("Item criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})