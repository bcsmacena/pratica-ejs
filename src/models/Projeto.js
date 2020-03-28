const projetos = [
    {
        nome:"PetShop em Node",
        descricao:"Petshop feito em node",
        tecnologia:"Node"
    },
    {
        nome:"Site Landseeker",
        descricao:"Site feito em HTML",
        tecnologia:"HTML & CSS"
    }
]

const pegarProjetos = ()=>{
    return projetos;
}

module.exports = {pegarProjetos}