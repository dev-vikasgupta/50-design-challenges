function initBookShelf() {
  const panels = document.querySelectorAll('.book-shelf .panel')
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      deactivateBooks(panels)
      panel.classList.add('active')
    })
  })
}
function deactivateBooks(panels) {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
initBookShelf()
