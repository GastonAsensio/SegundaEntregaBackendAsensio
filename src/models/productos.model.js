import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {type: String, required: true, max: 200 },
    description: {type: String, required: true, max: 200 },
    price: {type: Number, required: true, max: 200 },
    code: {type: Number, required: true, max: 200 },
    photo: {type: String, required: true, max: 200 },
    stock: {type: Number, required: true, max: 200 },
},
{
    timestamps: true,
    versionKey: false,
}
);

export const productSchema = model ("productos", schema);