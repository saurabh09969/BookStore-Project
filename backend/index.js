import  express  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js';


const app = express();

//Middleware for parsing request body
app.use(express.json());



app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send("MERN Stack Project")
});

app.use('/books',booksRoutes);


mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App successfully connceted to database");
    
    app.listen(PORT, () => {
        console.log(`App is listening on port:${PORT}`);
    });
        
})

.catch((error) => {
    console.log(error);
});
