const port = 3003;

const bodyParse  = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.listen(port, function(){
   console.log(`BACKEND is running on port ${port}.`);
    
});
