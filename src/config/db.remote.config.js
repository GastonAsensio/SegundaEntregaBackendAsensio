import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const init = () => {
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        err => {
            if (err) {
                console.log(err);
            } else { console.log("Conectado a MongoDB");
        }
    }
);
}

