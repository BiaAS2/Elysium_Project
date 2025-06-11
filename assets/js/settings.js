/**
 * Script de Validação de Cadastro - Elysium
 *
 * Este script é responsável por
 * por fazer a animação do icone que deixa tela black or white
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
let barsEl = document.querySelector(".menu-toggle")
let iconBarsEl = document.querySelector(".sidebar-settings")

barsEl.addEventListener("click", () => {
  iconBarsEl.classList.toggle("show")
})
