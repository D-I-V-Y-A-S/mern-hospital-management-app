const express = require('express')
const router = express.Router()
const {addNewpatient, displayAllpatients, updatepatient, deletepatient} = require('../controller/patientController')
const {validateISBN} = require('../controller/validateController')


router.route('/').post(addNewpatient).get(displayAllpatients).patch(updatepatient).delete(deletepatient)
router.route('/validate').post(validateISBN)


module.exports = router