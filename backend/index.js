import  express  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import {book} from './models/bookModel.js'

const app = express();

app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send("MERN Stack")
});


//Route to save a New Book

//h


mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App successfully connceted to database");
    
    app.listen(PORT, () => {
        console.log(`App is listening on port:${PORT}`);
    });
        
})

.catch((error) => {
    console.log(error);
})