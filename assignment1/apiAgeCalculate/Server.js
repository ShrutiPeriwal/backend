import express from 'express';
import router from './Router.js';

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs')
app.use('/age',router)

app.listen(port,()=> {
    console.log('server running at', `http://localhost:${port}`);
});
