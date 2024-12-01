const saveBtn = document.querySelector('.js-save-infor')
const modal = document.querySelector('.js-modal')
const closeBtn = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showUpdatePlan() {
    modal.classList.add('open')
}
function hideUpdatePlan() {
    modal.classList.remove('open')
}

saveBtn.addEventListener('click', showUpdatePlan)
closeBtn.addEventListener('click', hideUpdatePlan)
modal.addEventListener('click', hideUpdatePlan)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
