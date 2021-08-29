const fs = require('fs');
const express = require('express');
const app = express();


const mentors = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

app.get('/api/v1/mentors', (req, res) => {
    res.status(200).json({
        message: 'success',
        response: {
            mentors
        }
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