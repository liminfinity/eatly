const dropdown = document.querySelector('.select');
const dropdownResult = document.querySelector('.select__current-value');
const dropdownMenu = document.querySelector('.select__list');


document.addEventListener('click', e => {
    if (!e.target.closest('.select')) dropdownMenu.classList.remove('visibile')
})

dropdownResult.addEventListener('click', _ => {
    toogleDropDown()
})

dropdownMenu.querySelectorAll('.select__option').forEach(option => {
    option.addEventListener('click', _ => {
        const selectedOption = document.querySelector('.select__option_selected');
        selectedOption.classList.remove('select__option_selected');
        option.classList.add('select__option_selected')
        dropdownResult.innerHTML = option.innerHTML
        toogleDropDown()
    })
})

function toogleDropDown() {
    dropdown.classList.toggle('select_open')
    dropdownMenu.classList.toggle('visibile')
}
