import express from "express";

const app = express();
const port = 3000;



app.get('/', (req, res) => {
    // console.log(req.rawHeaders);
    res.send('<h1>Home Page</h1>');
});

app.post( '/register',  (req, res) => {
    res.sendStatus(201);
})


app.listen(port , () => {
    console.log(`listening on ${port}`);
})