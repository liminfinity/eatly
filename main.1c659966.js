/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 749:
/***/ (() => {

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


/***/ }),

/***/ 867:
/***/ (() => {

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar__content');
const closeSidebar = document.querySelector('.sidebar__close');
const {documentElement: html} = document;
const headerContent = document.querySelector('.header__content');
const authNav =  document.querySelector('.header__auth');
const isPhoneMedia = matchMedia('(max-width: 470px)')


isPhoneMedia.addEventListener('change', e => {
    const parent = authNav.parentElement;
    if (e.matches) {
        if (parent != sidebarContent) {
            parent.removeChild(authNav)
            sidebarContent.append(authNav)
            toogleAuth()
        }

    } else if (parent === sidebarContent) {
        sidebarContent.removeChild(authNav)
        headerContent.insertBefore(authNav, burger)
        toogleAuth()
    }
})

document.addEventListener('click', e => {
    if (!e.target.closest('.sidebar__content') && sidebar.classList.contains('visible')) toogleSideBar()
})

burger.addEventListener('click', e => {
    toogleSideBar()
    e.stopPropagation()
})

closeSidebar.addEventListener('click', e => {
    toogleSideBar()
    e.stopPropagation()
})

function toogleSideBar() {
    html.classList.toggle('overlay-open');
    burger.classList.toggle('burger_open');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('visible');
}
function toogleAuth() {
    authNav.classList.toggle('header__auth');
    authNav.classList.toggle('sidebar__auth');
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(867);
/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_sidebar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_dropDownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(749);
/* harmony import */ var _scripts_dropDownMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropDownMenu__WEBPACK_IMPORTED_MODULE_1__);










})();

/******/ })()
;