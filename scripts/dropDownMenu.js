const dropdown = document.querySelector('.select');
const dropdownResult = document.querySelector('.select__current-value');
const dropdownMenu = document.querySelector('.select__list');
let ariaExpanded = false;

document.addEventListener('click', e => {
    if (!e.target.closest('.select') && dropdown.classList.contains('visible')) toogleDropDown()
})

dropdownResult.addEventListener('click', _ => {
    toogleDropDown()
})

dropdownMenu.querySelectorAll('.select__option').forEach(option => {
    option.addEventListener('click', _ => {
        const selectedOption = document.querySelector('.select__option_selected');
        selectedOption.classList.remove('select__option_selected');
        selectedOption.setAttribute('aria-selected', 'false')
        option.classList.add('select__option_selected')
        dropdownResult.innerHTML = option.innerHTML
        option.setAttribute('aria-selected', 'true')
        toogleDropDown()
    })
})

function toogleDropDown() {
    dropdown.setAttribute('aria-expanded', ariaExpanded = !ariaExpanded)
    dropdown.classList.toggle('select_open')
    dropdownMenu.classList.toggle('hidden')
    dropdownMenu.classList.toggle('visible')
}
