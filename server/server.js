const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '../Public'));


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/Public/home.html');
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
