"use client"

import { useState } from "react"
import "../css/ValidationForm.css"

const ValidationForm = ({ onValidate }) => {
  const [codes, setCodes] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)

  const handleCodeChange = (index, value) => {
    // Apenas letras maiúsculas e números, máximo 4 caracteres
    const formattedValue = value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 4)
    const newCodes = [...codes]
    newCodes[index] = formattedValue
    setCodes(newCodes)

    // Auto-focus no próximo campo se completou 4 caracteres
    if (formattedValue.length === 4 && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fullCode = codes.join("-")

    if (codes.some((code) => code.length !== 4)) {
      alert("Por favor, preencha todos os códigos com 4 caracteres cada.")
      return
    }

    setIsLoading(true)

    // Simula carregamento de 4 segundos
    setTimeout(() => {
      setIsLoading(false)
      onValidate(fullCode)
    }, 4000)
  }

  const handleClear = () => {
    setCodes(["", "", "", ""])
    document.getElementById("code-0")?.focus()
  }

  return (
    <div className="validation-container">
      <div className="header">
        <div className="header-content">
          <div className="menu-icon">☰</div>
          <div className="logo-section">
            <img src="/images/usp-logo.png" alt="USP Logo" className="usp-logo-img" />
            <div className="portal-title">Portal de Serviços</div>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Qual serviço você deseja utilizar?" />
        </div>
        <div className="breadcrumb">
          <span>🏠 Home</span>
          <span> | IDDigital</span>
        </div>
      </div>

      <div className="main-content-no-sidebar">
        <div className="content-container">
          <div className="section-header">
            <div className="orange-bar"></div>
            <h2>Documentos</h2>
          </div>

          <div className="language-selector">
            <select>
              <option>Idioma da página: Português</option>
            </select>
          </div>

          <div className="description">
            <p>
              A Universidade de São Paulo oferece, nesta página, a possibilidade de conferir a autenticidade de um
              documento emitido por ela através da internet.
            </p>
          </div>

          <div className="instruction">
            <p>Digite abaixo o "Código de controle" que pode ser encontrado no documento recebido.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="code-inputs">
              <div className="mobile-row">
                <div className="code-group">
                  <input
                    id="code-0"
                    type="text"
                    value={codes[0]}
                    onChange={(e) => handleCodeChange(0, e.target.value)}
                    className="code-input"
                    maxLength={4}
                  />
                  <span className="separator">-</span>
                </div>
                <div className="code-group">
                  <input
                    id="code-1"
                    type="text"
                    value={codes[1]}
                    onChange={(e) => handleCodeChange(1, e.target.value)}
                    className="code-input"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="mobile-row">
                <div className="code-group">
                  <input
                    id="code-2"
                    type="text"
                    value={codes[2]}
                    onChange={(e) => handleCodeChange(2, e.target.value)}
                    className="code-input"
                    maxLength={4}
                  />
                  <span className="separator">-</span>
                </div>
                <div className="code-group">
                  <input
                    id="code-3"
                    type="text"
                    value={codes[3]}
                    onChange={(e) => handleCodeChange(3, e.target.value)}
                    className="code-input"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            <div className="button-group">
              <button type="submit" className="validate-button" disabled={isLoading}>
                {isLoading ? (
                  <div className="loading-container">
                    <div className="spinner"></div>
                    Validando...
                  </div>
                ) : (
                  "Validar"
                )}
              </button>
              <button type="button" className="clear-button" onClick={handleClear}>
                Limpar
              </button>
            </div>
          </form>

          <div className="info-text">
            <p>Você poderá obter do sistema 4 quatro respostas diferentes:</p>
          </div>

          <div className="response-list">
            <ol>
              <li>
                O "Código de controle" digitado no campo acima, corresponde a um documento emitido pela USP, e este
                ainda é válido. Neste caso você receberá na sua tela uma cópia fiel do documento em papel que lhe foi
                entregue, podendo assim confirmar a sua autenticidade.
              </li>
              <li>
                O "Código de controle" digitado no campo acima, corresponde a um documento emitido pela USP, e este
                possui uma versão válida mais recente. Neste caso você receberá na sua tela a versão atual do documento
                emitido, podendo assim confirmar a sua autenticidade.
              </li>
              <li>
                O "Código de controle" digitado no campo acima, corresponde a um documento emitido pela USP, mas este já
                perdeu a sua validade. Neste caso você receberá na sua tela uma mensagem constando o tipo de documento
                emitido, data de emissão, e quando o documento perdeu sua validade.
              </li>
              <li>O "Código de controle" digitado no campo acima, não corresponde a um documento emitido pela USP.</li>
            </ol>
          </div>

          <div className="document-list-button">
            <button className="list-button">
              Lista de documentos emitidos pela Universidade de São Paulo através da Internet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValidationForm
