import express from "express"
import {PORT, mongoDbURL} from "./config.js"
import mongoose from "mongoose"

import bookRoute from './routers/bookRoute.js'
import cors from 'cors'

const app = express()
app.use(express.json())
//app.use(cors())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to MERN routing")
})

app.use('/books', bookRoute)


//to work with mongodb you have to install a package: npm i mangoose
// import mangoose above this file
//create a database schema in another file,go to models folder and look for bookModel.js
mongoose.connect(mongoDbURL)
    .then(() =>{
        console.log("App connected successfully")
        app.listen(PORT, () => {
            console.log(`App is good at port: ${PORT}`)
        })
    })
    .catch((error) => console.log(error))