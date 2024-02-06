const express = require("express");

const app = express();

//to parse the request body
app.use(express.json());


//Books Api Routes: GET, POST, PUT, DELETE
let books = [
    {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        name: "The Alchemist",
    },
    {
        id: 3,
        name: "The Da Vinci Code",
    }

];


app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello change this to list of books!" });
})
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong" });
})


// Add other requests GET, POST, PUT, DELETE



app.listen(8000, () => {
    console.log(`App is live on: http://localhost:8000`);
});