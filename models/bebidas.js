import mongosee from "mongoose"

const Schema =mongoose.Schema;

const bebidasSchema = new Schema({
    
    nombre: {type:String, required:[true,'Nombre obligatorio']},
    precio: {type:Number, required:[true,'Precio obligatorio']},
    estilo_ :{type:String, require:[true,'Limonada, Jugo o bebida caliente.']},
    date: {type:Date, default:Date.now},
    activo:{type:Boolean, default:true},
    
});

//Convertir a modelo. 

const Bebidas = mongoose.model('Bebidas',bebidasSchema)
export default Bebidas;