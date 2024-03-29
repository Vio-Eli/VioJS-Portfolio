import express, { Application, Request, Response} from "express";

const app: Application = express(); 
const port: number = 3001;
const db = require("./config/connection");

// Test express route
app.get('/test', (req: Request, res: Response) => {
    res.send('Test');
});

// Ensures that server is running on localhost and on what port
db.once('open', () => {
    console.log('MongoDB is open');
    app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
})
})

