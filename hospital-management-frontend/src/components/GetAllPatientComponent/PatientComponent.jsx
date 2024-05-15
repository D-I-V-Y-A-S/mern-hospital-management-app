import React from 'react'

const PatientComponent = ({ patient }) => {
    return (
        <div className="card">
            <div className="text-container">
                <h3>{patient.patient_id}</h3>
                <p className="status">
                    {patient.name} ({patient.age})({patient.gender})
                </p>
                <p className="status">
                    {patient.location}
                </p>
                <p className='availability'>Height:{patient.height}</p>
                <p className="availability">Weight:{patient.weight}</p>
                <p className="availability">BMI:{patient.bmi}</p>

                <p style={{marginTop:"5%"}}>Contact info</p>
                <p>{patient.phone_number}</p>
                <p>{patient.email}</p>
            </div>
        </div>
    )
}

export default PatientComponent