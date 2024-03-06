import model from "../db/model.js";

async function index(request, response, next){
    const filmes = await model.filme.findAll();
    response.status(200).json({filmes:filmes});
}

async function show(request, response, next){
    let id = request.params.id;
    const filmeEncontrato = await model.filme.findByPk(id);
    if(filmeEncontrato == undefined){
        response.status(404).json({message: "filme não encontrado."});
    }else{
        response.status(200).json({filme:filmeEncontrato});
    }
}

async function create(request, response, next){
    let body = request.body;
    try{
        await model.filme.create(body);
        response.status(201).json({filme:body});
    }catch(e){
        response.status(400).json({message: e.message});
    }
}

async function update(request, response, next){
    const id = request.params.id;
    const body = request.body;
    try{
        await model.filme.update(body, {
            where:{
                id: id
            }
        });
        response.status(200).json({filme:body});
    }catch(e){
        response.status(400).json({message: e.message});
    }
}

async function destroy(request, response, next){
    const id = request.params.id;
    try{
        await model.filme.destroy({
            where:{
                id:id
            }
        });
        response.status(204).json();
    }catch(e){
        response.status(400).json();
    }
}

export default {index, show, create, update, destroy}