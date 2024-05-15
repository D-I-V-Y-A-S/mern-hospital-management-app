// This is patientsController
const patientsModel = require('../models/patientModel')
const initialData = require('../data/initialData')

const addNewpatient = async(request, response) => {
    const newpatient = request.body;
    try{
        const existingpatient = await patientsModel.findOne({patient_id : newpatient.patient_id})
        if(existingpatient)
        {
            return response.status(409).json({message:'ISBN Number already exists.'})
        }
        const patient = await patientsModel.create(newpatient)
        response.status(201).json(patient)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const displayAllpatients = async(request, response)=> {

    try
    {
        const allpatients = await patientsModel.find().sort({patient_id:1})
        if (allpatients.length === 0)
        {
            const initialpatients = await patientsModel.insertMany(initialData)
        }
        response.status(200).json(allpatients)
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const updatepatient = async(request, response) => {
    const patientToBeUpdated = request.body
    try{
        const updatedpatient = await patientsModel.updateMany({patient_id:patientToBeUpdated.patient_id},patientToBeUpdated)
        response.status(200).json(updatedpatient)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const deletepatient = async(request, response) => {
    const patientToBeDeleted = request.body
    try{
        const deletedpatient = await patientsModel.deleteOne({patient_id:patientToBeDeleted.patient_id})
        console.log(patientToBeDeleted)
        response.status(200).json(deletedpatient)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

module.exports = {addNewpatient, displayAllpatients, updatepatient, deletepatient}