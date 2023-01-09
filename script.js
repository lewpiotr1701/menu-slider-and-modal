const body = document.querySelector('body')
const toggleNav = document.querySelector('#toggle')
const hamburgerIcon = document.querySelector('#toggle i')
const openModal = document.querySelector('#open')
const closeModal = document.querySelector('#close')
const modalContainer = document.querySelector('#modal-container')

// Toggle nav
toggleNav.addEventListener('click', () => {
  body.classList.toggle('show-nav')

  body.classList.contains('show-nav')
    ? hamburgerIcon.className = 'fa-solid fa-x fa-2x'
    : hamburgerIcon.className = 'fa fa-bars fa-2x'
})

// Show modal
openModal.addEventListener('click', () => {
  modalContainer.classList.add('show-modal')
})

// Hide modal
closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal')
})

// Hide modal on outside click
window.addEventListener('click', e => {
  e.target === modalContainer ? modalContainer.classList.remove('show-modal') : false
})
