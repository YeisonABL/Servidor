import mongoose from "mongoose";

const Schema =mongoose.Schema;

const empanadasSchema = new Schema({
    
    nombre: {type:String, required:[true,'Nombre obligatorio']},
    descripcion :{type:String,required:[true,'descripción obligatoria']},
    precio: {type:Number, required:[true,'Precio obligatorio']},
    date: {type:Date, default:Date.now},
    activo:{type:Boolean, default:true}
});

//Convertir a modelo. 

const Empanadas = mongoose.model('Empanadas',empanadasSchema)
export default Empanadas;