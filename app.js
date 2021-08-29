const fs = require('fs');
const express = require('express');
const app = express();

const mentors = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
app.use(express.json());

app.get('/api/v1/mentors', (req, res) => {
    res.status(200).json({
        message: 'success',
        response: {
            mentors
        }
    })
});



app.post('/api/v1/mentors', (req, res) => {
    const newObject = {...req.body, id: mentors.length + 1};

    mentors.push(newObject);
    fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(mentors), () => {
        console.log('success');
    });

    res.status(201).json({
        message: 'success',
        data: newObject
    })
})

const port = 3000;
app.listen(port, () => {
    console.log('server running');
})

// console.log(apxp);