import express from 'express';
import configViewEngine from './config/viewEngine.js';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();




const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    //check => return res.send()
    console.log('>>> run into my middleware')
    console.log(req.method)
    next();
})

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
