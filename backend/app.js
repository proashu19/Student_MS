import express from 'express' ;
import cors from 'cors';
import studentRoutes from "./routes/studentRoutes.js";

const app = express ();

app.use(cors());

app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/' , (req , res) => {
    res.json( "API is running")
});



export default app;