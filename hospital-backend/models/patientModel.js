const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: true,
        unique: true
    }, name: {
        type: String,
        required: true,
    }, age: {
        type: Number,
        required: true,
    }, gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },location: {
        type: String,
        required: true,
    },phone_number: {
        type: Number,
        required: true,
    }, email: {
        type: String,
        required: true,

    }, height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    }, bmi: {
        type: Number,
        required: true,
    }

}, { collection: 'patients' }
)
module.exports = mongoose.model('patients', hospitalSchema)