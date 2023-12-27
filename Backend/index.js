import  express, { request, response }  from "express";
import { PORT,mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodel.js"; 
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app=express();
app.use(express.json())

app.use(cors())

// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// )
app.get('/',(request,response)=>{
    //console.log(request)
    return response.status(234).send('Welcome to mern stack')

})



app.use('/books',booksRoute);
mongoose.connect(mongoDBURL).then(()=>{
    console.log("App connected to DB")
    app.listen(PORT,()=>{
        console.log(`app listening to port :${PORT}`);
    });
    
}).catch((error)=>{
    console.log(error)

})