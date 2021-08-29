const fs = require('fs');
const express = require('express');
const app = express();

const mentors = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
app.use(express.json());

const getAllMentors = (req, res) => {
    res.status(200).json({
        message: 'success',
        response: {
            mentors
        }
    })
}

const postMentor = (req, res) => {
    const newObject = {...req.body, id: mentors.length + 1};

    mentors.push(newObject);
    fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(mentors), () => {
        console.log('success');
    });

    res.status(201).json({
        message: 'success',
        data: newObject
    })
}
const getSpecificMentor = (req, res) => {
    const mentor = mentors.find(el => el.name === req.params.name);
    if (!mentor) {
        return res.status(404).json({
            status: 'failed',
            message: 'Not found'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: mentor
    });
}

const patchMentor = (req, res) => {
    console.log(req.body);
    const mentor = mentors.find(el => el.name === req.params.name);
    if (!mentor) {
        console.log('Not found');
    } 
    else {
        const newObj = {...mentor, ...req.body}
        fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(newObj), () => {
            console.log('success');
        });
    }
}

app.get('/api/v1/mentors', getAllMentors);
app.post('/api/v1/mentors', postMentor);
app.get('/api/v1/mentors/:name', getSpecificMentor);
app.patch('/api/v1/mentors/:name', patchMentor);

const port = 3000;
app.listen(port, () => {
    console.log('server running');
})

// console.log(apxp);