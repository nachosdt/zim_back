const Foto = require("../models/Foto");

async function getFotos(req,res,next) {
    console.log("Request recibida...");
    console.log("FROM: ",req.url);
    console.log("METHOD: ",req.method);   
    console.log("User-Agent: ",req.headers["user-agent"]);

    try {           
        let fotos = await Foto.find();
        console.log(fotos);               
        res.status(200).send({data: fotos});
    }
    catch (error) {
        next(error);    
    }
}

async function postFoto(req,res,next) {
    console.log("Request recibida...");
    console.log("FROM: ", req.url);
    console.log("METHOD: ", req.method);
    console.log("BODY: ", req.body);   
    console.log("User-Agent: ",req.headers["user-agent"]);

    try {
        let yaExiste = await Foto.findOne({"date":req.body.date}).exec();
        if (yaExiste) {
            res.status(200).send({data: req.body, code: false, message: `Esa foto ya existe en la BBDD`});
        } else {
            let foto = new Foto(req.body);
            let fotoSave = await foto.save();
            console.log(fotoSave);
            res.status(200).send({data: fotoSave, code: true, message: `La foto con fecha ${req.body.date} se ha insertado en la BBDD`}); 
        }       
    }
    catch (error) {
        next(error);        
    }
}

async function putFoto(req,res,next) {
    console.log("Request recibida...");
    console.log("FROM: ",req.url);
    console.log("METHOD: ",req.method); 
    console.log("BODY: ",req.body);  
    console.log("User-Agent: ",req.headers["user-agent"]);
    
    try {        
        let resultado = await Foto.findByIdAndUpdate(req.body.id,{"explanation":req.body.explanation},{new:true});        
        res.status(200).send({data: resultado, code: true});
    }
    catch (error) {
        next(error);
    }
}

async function deleteFoto(req,res,next) {
    console.log("Request recibida...");
    console.log("FROM: ",req.url);
    console.log("METHOD: ",req.method); 
    console.log("BODY: ",req.body);  
    console.log("User-Agent: ",req.headers["user-agent"]);

    try {        
        let resultado = await Foto.findByIdAndDelete(req.body.id);        
        res.status(200).send({data: resultado, code: true});
    }
    catch (error) {
        next(error);
    }
}

module.exports = { getFotos, postFoto, putFoto, deleteFoto };