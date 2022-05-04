
const {curriculo,
    sobremim,
    projecao,
    contato,
    recebidas} = require("./controllers.js")    

const express = require("express")
const path = require("path")

const Msg = require("./config/db.js")

const app = express();
const bodyParser = require("body-parser")

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use("/static",express.static(__dirname + "/views/static"))
app.get("/", sobremim)
app.get("/curriculo", curriculo);
app.get("/sobremim", sobremim);
app.get("/projecao",projecao);
app.get("/contato", contato);
app.post("/mensagens-recebidas", recebidas);

app.post("/contato", async (req, res)=>{
    const msg = {
        email: req.body.email,
        mensagem: req.body.mensagem
    }
    try{
        const user = await new Msg(msg).save()
        const msgRecebidas = await Msg.findAll()
        res.render("mensagens-recebidas", {
            email: user.email,
            mensagem: user.mensagem,
            msgRecebidas
        })
    }catch(e){
        console.log(e.message)
        res.send(e)
    }
    
})
app.listen(3000,()=>{
    console.log("Está Funcionando")
})