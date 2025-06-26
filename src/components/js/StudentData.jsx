"use client"
import "../css/StudentData.css"

const StudentData = ({ data, onBack }) => {
  return (
    <div className="student-data-container">
      <div className="header">
        <div className="header-content">
          <div className="menu-icon">☰</div>
          <div className="logo-section">
            <img src="/images/usp-logo.png" alt="USP Logo" className="usp-logo-img" />
            <div className="portal-title">Portal de Serviços</div>
          </div>
        </div>
      </div>

      <div className="document-container">
        <div className="document-header">
          <h2>Pró-Reitoria de Cultura e Extensão Universitária</h2>
          <h3>ATESTADO DE MATRÍCULA</h3>
        </div>

        <div className="document-content">
          <p className="attestation-text">
            <strong>ATESTO</strong>, atendendo o requerimento do interessado, que <strong>{data.name}</strong>, RG{" "}
            <strong>{data.rg}</strong>, nº USP <strong>{data.uspNumber}</strong>, é aluno(a) regularmente matriculado do{" "}
            <strong>{data.course}</strong>, ministrado pelo <strong>{data.department}</strong> do(a){" "}
            <strong>{data.school}</strong>, com carga horária total de <strong>{data.workload}</strong>, no período de{" "}
            <strong>{data.period}</strong>.
          </p>

          <p className="issue-date">
            Atestado de Matrícula emitido em <strong>{data.issueDate}</strong>.
          </p>

          <div className="authenticity-info">
            <p>
              A autenticidade deste documento pode ser verificada na página da Universidade de São Paulo em{" "}
              <strong>http://uspdigital.usp.br/webdoc</strong>. Informe o código de controle:{" "}
              <strong>{data.controlCode}</strong>
            </p>
            <p className="page-info">Página 1 de 1</p>
          </div>
        </div>

        <button onClick={onBack} className="back-button">
          Voltar à Verificação
        </button>
      </div>
    </div>
  )
}

export default StudentData
