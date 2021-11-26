const { Schema, model } = require("mongoose");

const fotoSchema = new Schema({
    title: String,
    date: String,
    explanation: String,
    copyright: String,
    type: String,
    url: String,
    media:String   
});

module.exports = model("Foto", fotoSchema, "fotos");