import { Schema, model } from "mongoose";

const schema = new Schema(
    {
    productos: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productos",
    }
]
},
    {
        timestamps: true,
        versionKey: false,
    }
);


export default cartSchema = model ("carritos", schema);