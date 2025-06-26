import express from 'express'
const app = express();

app.use('/imagem', express.static('public/imagem'));
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import mongoose from 'mongoose'
const url = "mongodb+srv://mig180506:mMOPHz17Vw7KqtGj@miguel.f4fxnqp.mongodb.net/?retryWrites=true&w=majority&appName=Miguel"


//converte o camimnho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

import routes from "./routes/route.js"
app.use(routes)

app.listen(3001)


