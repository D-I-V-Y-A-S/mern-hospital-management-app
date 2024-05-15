// This is validateController
const patientsModel = require('../models/patientModel')

const validateISBN = async(request, response) => {
    const patientToBeValidated = request.body.patient_id;
    
    try
    {
        const validISBN = await patientsModel.findOne({patient_id:patientToBeValidated})
        if (validISBN)
        {
            return response.status(200).json(validISBN)
        }
        response.status(400).json({message:'Invalid patient_id!'})
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }

}

module.exports = {validateISBN}