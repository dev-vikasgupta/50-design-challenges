function initBookShelf() {
  const panels = document.querySelectorAll('.book-shelf .panel')
  panels.forEach((panel, index) => {
    panel.addEventListener('click', ($event) => {
      deactivateBooks(panels)
      panel.classList.add('active')
      const position = index + 1
      const image = getImageUrl(position)

      setTimeout(() => {
        switchColorWithImages(panels)
        panel.style.backgroundColor = 'transparent'
        panel.style.backgroundImage = image
      }, 700)
    })
  })
}
function deactivateBooks(panels) {
  panels.forEach((panel, index) => {
    panel.classList.remove('active')
  })
}
function switchColorWithImages(panels) {
  panels.forEach((panel, index) => {
    panel.style.backgroundImage = 'none'
    panel.style.backgroundColor = setBackgroundColor(index)
  })
}
function getImageUrl(position) {
  return 'url(./img/' + position + '.jpg)'
}
function setBackgroundColor(position) {
  const colors = ['#73c2fb', '#f4c430', '#d8dcd6', '#36454f', '#40e0d0']
  return colors[position]
}
initBookShelf()
