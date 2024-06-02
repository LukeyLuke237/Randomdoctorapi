import express from "express";
import Doctor from "../models/doctor.js";

const DoctorRouter = express.Router();

DoctorRouter.get('/doctors', (req, res) => {
    try {
        Doctor.find()
            .then(doctors => {
                if (doctors.length === 0) {
                    res.json("No doctors in the database")
                } else {
                    res.json(doctors)
                }
            })
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}) 

DoctorRouter.get('/doctors/:doctoremail', (req, res) => {
    try {
        Doctor.find({email: req.params.doctoremail})
            .then(doctor => {
                if (doctor.length === 0) {
                    res.json("No such doctor in the database")
                } else {
                    res.json(doctor)
                }
            })
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}) 

DoctorRouter.post('/doctors', async (req, res) => {
    try {
        const {name, email, profession, office_address, password} = req.body
        if (name == null || name === "" || email == null || email === "" || profession == null || profession === "" || office_address == null || office_address === "" || password == null || password === "") {
            
            res.json("Please enter all the fields")
        } else {
            const newDoctor = new Doctor({
                name,
                email,
                profession,
                office_address,
                password
            })
            newDoctor.save()
                .then(() => res.json("New doctor added!"))
                .catch((err) => res.status(400).json("Error: " + err));
        }
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
})

export default DoctorRouter;
