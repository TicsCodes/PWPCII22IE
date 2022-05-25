// 1 ODM - Mongoose
import mongoose from 'mongoose';

// 2 Desestructuracion del modulo de esquemas (Schemas) de Mongoose
const { Schema } = mongoose;

// 3 crear un Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Generar el modelo a partir de un Schema
//  Compilar el modelo
export default mongoose.model('project', ProjectSchema);
