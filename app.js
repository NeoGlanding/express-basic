const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'this is a new app',
    })
});

app.post('/', (req, res) => {
    res.status(201).json({
        message: 'post is finished'
    })
})


const port = 3000;
app.listen(port, () => {
    console.log('server running');
})

// console.log(apxp);