import mongoose, { Schema } from 'mongoose';

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    office_address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;