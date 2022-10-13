const express = require('express');
const app = express();
const port = 30001;

app.listen(port, ()=>{
    console.log('server is up and running');
});

app.get('/insights', (req, res)=>{
    
    res.send()
})