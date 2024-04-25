import express from "express";

const app = express();

app.get('/', (req,res) =>{
    res.send('Server is ready');
})

// get a list of 5 jokes

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is a another Joke'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port , ()=> {
    console.log(`Server is running at port:${port} `);
    
})