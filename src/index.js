const express = require('express');
const { PORT } = require('./config/server.config');



const app = express();

app.get('/ping', (req,res) => {
    return res.json({messege : 'Problem service is alive'});
    
})


app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);

})