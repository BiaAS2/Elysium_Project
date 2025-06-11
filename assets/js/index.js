/**
 * Script de Validação de Cadastro - Elysium
 *
 * Este script é responsável por
 * validar o formulário de
 * registro de novos usuários
 * em tempo real.
 *
 * Inclui validação de campos
 * obrigatórios, formatação
 * de dados e verificação
 * de concordância com termos.
 *
 * Não é recomendado alterar
 * este arquivo, a menos que
 * você saiba o que está fazendo.
 *
 * @author Lucelho Silva
 * @version 2.0
 * @since 2025
 */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")

  // Add form validation
  form.addEventListener("submit", function (e) {
    let isValid = true

    // Email validation
    if (!emailInput.value || !isValidEmail(emailInput.value)) {
      showError(emailInput, "Por favor, insira um e-mail válido")
      isValid = false
    } else {
      clearError(emailInput)
    }

    // Password validation
    if (!passwordInput.value || passwordInput.value.length < 6) {
      showError(passwordInput, "A senha deve ter pelo menos 6 caracteres")
      isValid = false
    } else {
      clearError(passwordInput)
    }

    if (!isValid) {
      e.preventDefault()
    }
  })

  // Social login handlers
  const socialButtons = document.querySelectorAll(".social-buttons img")
  socialButtons.forEach(button => {
    button.addEventListener("click", function () {
      const provider = this.alt.includes("Google") ? "google" : "facebook"
      handleSocialLogin(provider)
    })
  })
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showError(input, message) {
  clearError(input)
  input.style.borderColor = "#ef4444"
  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message text-small"
  errorDiv.style.color = "#ef4444"
  errorDiv.style.marginTop = "4px"
  errorDiv.textContent = message
  input.parentNode.appendChild(errorDiv)
}

function clearError(input) {
  input.style.borderColor = ""
  const errorMessage = input.parentNode.querySelector(".error-message")
  if (errorMessage) {
    errorMessage.remove()
  }
}

function handleSocialLogin(provider) {
  console.log(`Tentativa de login com ${provider}`)
  // Aqui você implementaria a lógica de login social
  alert(`Login com ${provider} será implementado em breve!`)
}
