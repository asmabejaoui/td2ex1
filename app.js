const express = require('express');
const app = express();

//middleware
const loggerMiddleware = (req,res,next) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    console.log(`[${date} ${time}]  ${req.method} ,${req.path}`);
    next();
};
//utiliser le middleware dans application
app.use(loggerMiddleware);
//exemple de route pour tester le middleware
app.get('/',(req,res)=>{
    res.send('exercice1!');
});
app.listen(3000, () =>{
    console.log('serveur démarré sur le port 3000')
});
