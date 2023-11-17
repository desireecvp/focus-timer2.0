let darkMode = false
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark')

  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget
    .querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode
})