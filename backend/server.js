import express from 'express';
import cors from 'cors';
import { userRoute } from './routes/routes.js';
const app = express();
import Connect from './db/DBconnect.js';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.backEndPort || 8080;
// const port = 8000;

//middleware for using json
app.use (
    express.json()
);

//root dir url route
app.get (
    "/",
    (req,res)=> {
        res.send (
            "Commissioning Server Root Directory"
        )
    }
);

//directoy url route for activities json, include all operations
app.use (
    cors()
)
app.use(
    "/api/json/activities",
    userRoute
);


//connect db and start server function
let start = async () => {
    try {
        await Connect(process.env.connectionString)
        app.listen (
            port, console.log(`Server up & running listening to port ${port} :)`)
        )
    }
    catch (err) {
        console.log(err);
    }
}
start();

// //define the port that the server will listen to it
// app.listen (
//     port, console.log(`Server up & running listening to port ${port} :)`)
// );