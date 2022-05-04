const curriculo = (req, res)=>{
    res.render("curriculo")
}
const sobremim = (req, res)=>{
    res.render("sobremim")
}
const projecao = (req, res)=>{
    res.render("projecao")
}
const contato = (req, res)=>{
    res.render("contato")
}
const recebidas = (req, res)=>{
    console.log("qualquercoisa",req.body)
    res.render("mensagens-recebidas", {email:req.body.email, mensagem:req.body.mensagem})
}
module.exports = {curriculo, sobremim, projecao, contato, recebidas}