"use client"

import { useState } from "react"
import ValidationForm from "./components/js/ValidationForm"
import StudentData from "./components/js/StudentData"
import "./components/css/App.css"

function App() {
  const [isValidated, setIsValidated] = useState(false)
  const [studentData, setStudentData] = useState(null)

  const handleValidation = (code) => {
    // Simula validação - no caso real seria uma API
    if (code === "R9NI-KAQX-ZKEL-G4ZI") {
      setStudentData({
        name: "Rebeca Vieira Monteiro",
        rg: "504849359",
        uspNumber: "16243582",
        course: "Curso de Especialização: MBA em Gestão de Pessoas",
        department: "Departamento de Economia, Administração e Sociologia",
        school: 'Escola Superior de Agricultura "Luiz de Queiroz"',
        workload: "400:00 horas incluindo a monografia",
        period: "22/05/2024 a 27/02/2026",
        issueDate: "01/06/2025",
        controlCode: "R9NI-KAQX-ZKEL-G4ZI",
      })
      setIsValidated(true)
    } else {
      alert("Código de controle inválido!")
    }
  }

  const handleBack = () => {
    setIsValidated(false)
    setStudentData(null)
  }

  return (
    <div className="App">
      {!isValidated ? (
        <ValidationForm onValidate={handleValidation} />
      ) : (
        <StudentData data={studentData} onBack={handleBack} />
      )}
    </div>
  )
}

export default App
