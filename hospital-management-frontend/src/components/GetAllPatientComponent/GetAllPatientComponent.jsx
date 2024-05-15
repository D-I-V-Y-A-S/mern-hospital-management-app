import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PatientComponent from './PatientComponent'
import './GetAllPatientComponent.css'

const GetAllPatientComponent = () => {
    const [patient, setpatient] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3500/api/v1/patients`)
            .then(response => setpatient(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='books'>
        {patient.map((patient, index)=>(
            <PatientComponent patient={patient} key={index}/>
        ))}
    </div>
  )
}

export default GetAllPatientComponent