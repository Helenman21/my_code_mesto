import { UI_ELEMENTS } from "./constants.js";
//показать ошибку ввода
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	console.log('errorElement', errorElement)
	inputElement.classList.add(inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(errorClass);
 };
 //скрыть ошибку ввода
 const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(errorClass);
	errorElement.textContent = '';
 };
 //проверить достоверность ввода
 const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
	console.log('inputElement.validationMessage',inputElement.validationMessage )
	if (!inputElement.validity.valid) {
	  showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
	} else {
	  hideInputError(formElement, inputElement, inputErrorClass, errorClass);
	}
 };
 //имеет неверный ввод
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
	  return !inputElement.validity.valid;
	});
 };
 //переключить состояние кнопки
 const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
	if (hasInvalidInput(inputList)) {
	  buttonElement.classList.add(inactiveButtonClass);
	  buttonElement.disabled = true;
	} else {
	  buttonElement.classList.remove(inactiveButtonClass);
	   buttonElement.disabled = false;
	}
 }; 

 //установить прослушиватели событий
 const setEventListeners = (selectors) => {
	const inputList = Array.from(selectors.formSelector.querySelectorAll(selectors.inputSelector));
	const buttonElement = selectors.submitButtonSelector;
	toggleButtonState(inputList, buttonElement, selectors.inactiveButtonClass);
	inputList.forEach((inputElement) => {
	  inputElement.addEventListener('input', function () {
		 checkInputValidity(selectors.formSelector, inputElement, selectors.inputErrorClass, selectors.errorClass);
		 toggleButtonState(inputList, buttonElement, selectors.inactiveButtonClass);
	  });
	});
 };

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
		inputSelector: '.input-profile',
		submitButtonSelector: UI_ELEMENTS.buttonPopupProfile,
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'form__input_type_error',
		errorClass: 'popup__error_visible'
	 });
enableValidation({
		popupElement: UI_ELEMENTS.popupAddCard,
		formSelector: UI_ELEMENTS.formAddCard,
		fieldset: UI_ELEMENTS.fieldSetPopupCardForm,
		inputSelector: '.input-card',
		submitButtonSelector: UI_ELEMENTS.buttonPopupCard,
		inactiveButtonClass: 'popup__button_disabled',
		inputErrorClass: 'form__input_type_error',
		errorClass: 'popup__error_visible'
	 });

