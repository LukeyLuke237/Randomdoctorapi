import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import DoctorRouter from './routes/doctors.js';

const app = express();
const PORT = process.env.PORT || 5000;
const URL = 'mongodb+srv://temp:123@cluster0.kmqeywc.mongodb.net/DoctorDB';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(DoctorRouter);

mongoose.connect(URL)
        .then(async () => {
            console.log("Connect to MongoDB Atlas");
            app.listen(PORT, () => {
                console.log("Server is listening on port " + PORT)
            })
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        })