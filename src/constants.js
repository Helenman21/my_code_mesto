const myDate = document.querySelector('.block-avatar__pen-frame');
const addCard = document.querySelector('.block-avatar__add-button');
const inputAddPhoto = document.querySelector('.popup-add-card__input-photo');
const inputAddNameCity = document.querySelector('.popup-add-card__input-name-city');
const buttonPopupCard = document.querySelector('.popup-add-card__button');
const deleteCard = document.querySelector('.block-card__delete-photo');
const closedPopupAddCard = document.querySelector('.popup-add-card__closed');
const fullName = document.querySelector('.block-avatar__full-name');
const profession = document.querySelector('.block-avatar__profession');
const popupAddCard = document.querySelector('.popup-add-card');
const cloneCard = document.querySelector('#block-card__item-clone');
const card = document.querySelector('.block-card__item');
const nodePrepend = document.querySelector('.block-card__row');
const formAddCard = document.querySelector('.popup-add-card__form');
const photo = document.querySelectorAll('.block-card__photo-city');
const popupElements = document.querySelectorAll('.popup');


// попап профиля
const popupProfile = document.querySelector('.popup-profile');
const formProfile = popupProfile.querySelector('.popup-profile__form');
const buttonPopupProfile = popupProfile.querySelector('.popup-profile__button');
const closedPopupProfile = popupProfile.querySelector('.popup-profile__closed');
const inputChangeFullName = popupProfile.querySelector('.popup-profile__input-full-name');
const inputChangeProfession = popupProfile.querySelector('.popup-profile__input-profession');
const fieldSetPopupProfileForm = popupProfile.querySelector('.form__set')

// попап фото
const popupCard = document.querySelector('.popup-card');
const popupCardNameCity = popupCard.querySelector('.popup-card__name-city');
const popupCardClose = popupCard.querySelector('.popup-card__closed');
const popupCardSrc = popupCard.querySelector('.popup-card__img');

export const UI_ELEMENTS = {
	myDate,
	addCard,
	inputChangeFullName,
	inputAddPhoto,
	inputChangeProfession,
	inputAddNameCity,
	buttonPopupProfile,
	buttonPopupCard,
	deleteCard,
	closedPopupProfile,
	closedPopupAddCard,
	fullName,
	profession,
	popupProfile,
	popupAddCard,
	cloneCard,
	card,
	nodePrepend,
	formProfile,
	formAddCard,
	photo,
	popupCard,
	popupCardNameCity,
	popupCardClose,
	popupCardSrc,
	popupElements, 
	nodePrepend, 
	fieldSetPopupProfileForm
}