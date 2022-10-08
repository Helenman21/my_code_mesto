import { UI_ELEMENTS } from "./constants.js";
//показать ошибку ввода
const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add('form__input_type_error');
	errorElement.textContent = errorMessage;
	//errorElement.classList.add('form__input-error_active');
 };
 //скрыть ошибку ввода
 const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	// inputElement.classList.remove('form__input_type_error');
	// errorElement.classList.remove('form__input-error_active');
	errorElement.textContent = '';
 };
 //проверить достоверность ввода
 const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
	  showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
	  hideInputError(formElement, inputElement);
	}
 };
 //имеет неверный ввод
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
	  return !inputElement.validity.valid;
	});
 };
 //переключить состояние кнопки
 const toggleButtonState = (inputList, buttonElement) => {
	console.log(hasInvalidInput(inputList));
	if (hasInvalidInput(inputList)) {
	  buttonElement.classList.add('button_inactive');
	} else {
	  buttonElement.classList.remove('button_inactive');
	}
 }; 
 //установить прослушиватели событий
 const setEventListeners = (selectors) => {
	const inputList = Array.from(selectors.formSelector.querySelectorAll('.form-input'));
	console.log('это инпутлист', inputList)
	const buttonElement = selectors.submitButtonSelector;
 
	toggleButtonState(inputList, buttonElement);
 
	inputList.forEach((inputElement) => {
	  inputElement.addEventListener('input', function () {
		 checkInputValidity(selectors.formSelector, inputElement);
		 toggleButtonState(inputList, buttonElement);
	  });
	});
 };

 // включение валидации вызовом enableValidation
// все настройки передаются при вызове


// enableValidation({
// 	formSelector: '.popup__form',
// 	inputSelector: '.popup__input',
// 	submitButtonSelector: '.popup__button',
// 	inactiveButtonClass: 'popup__button_disabled',
// 	inputErrorClass: 'popup__input_type_error',
// 	errorClass: 'popup__error_visible'
//  });
 //включить проверку
 const enableValidation = (selectors) => {
	const form = selectors.formSelector;
	form.addEventListener('submit', function (evt) {
		 evt.preventDefault();
	  }); 
	
		 setEventListeners(selectors);
 };
 
 enableValidation({
		popupElement: UI_ELEMENTS.popupProfile,
		formSelector: UI_ELEMENTS.formProfile,
		fieldset: UI_ELEMENTS.fieldSetPopupProfileForm,
		inputSelector: '.popup__input',
		submitButtonSelector: UI_ELEMENTS.buttonPopupProfile,
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'popup__input_type_error',
		errorClass: 'popup__error_visible'
	 });
 