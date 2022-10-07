import { UI_ELEMENTS } from "./constants.js"

const initialCards = [
	{
		nameCity: 'Архыз',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		nameCity: 'Челябинская область',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		nameCity: 'Иваново',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		nameCity: 'Камчатка',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		nameCity: 'Холмогорский район',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		nameCity: 'Байкал',
		src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

function renderingDefaultFieldValueProfile() {
	UI_ELEMENTS.inputChangeFullName.value = UI_ELEMENTS.fullName.textContent;
	UI_ELEMENTS.inputChangeProfession.value = UI_ELEMENTS.profession.textContent;
}

renderingDefaultFieldValueProfile();

function changeProfile(event) {
	const inputValueFullName = UI_ELEMENTS.inputChangeFullName.value;
	UI_ELEMENTS.fullName.textContent = inputValueFullName;
	const inputValueProfession = UI_ELEMENTS.inputChangeProfession.value;
	UI_ELEMENTS.profession.textContent = inputValueProfession;
	clozedPopap(UI_ELEMENTS.popupProfile);
}

function openPopap(element) {
	element.classList.add('popup-opened');
	window.addEventListener('keydown', checkEscButton);
}
function clozedPopap(element) {
	element.classList.remove('popup-opened');
	window.removeEventListener('keydown', checkEscButton);
}

function deleteCard(element) {
	element.remove();
}

function fillPhotoPopupInfo(photoIndex, nameIndex) {
	UI_ELEMENTS.popupCardSrc.src = photoIndex;
}
function like(event){
event.target.closest('.block-card__name-city').querySelector('.block-card__heart').classList.toggle('black-heart')
}
function createCard(card) {
	const clone = UI_ELEMENTS.cloneCard.content.querySelector('.block-card__item').cloneNode(true);
	const srcImg = clone.querySelector('.block-card__photo-city');
	srcImg.src = card.src;
	const nameCity = clone.querySelector('.block-card__city');
	nameCity.textContent = card.nameCity;
	const iconClozed = clone.querySelector('.block-card__delete-photo');
	iconClozed.addEventListener('click', (event) => {
		deleteCard(clone)
	});
	srcImg.addEventListener('click', () => {
		fillPhotoPopupInfo(srcImg.src, nameCity.textContent);
		openPopap(UI_ELEMENTS.popupCard);
	});
	const heartLiked = clone.querySelector('.block-card__heart');
	heartLiked.addEventListener('click', (event) => {
		like(event)
	})
	return clone
}
function addNewCard(cardData) {
	const cardElement = createCard(cardData);
	UI_ELEMENTS.nodePrepend.prepend(cardElement);
}


function saveCard() {
	const newCard = {
		src: UI_ELEMENTS.inputAddPhoto.value,
		nameCity: UI_ELEMENTS.inputAddNameCity.value
	}

	addNewCard(newCard);
	clozedPopap(UI_ELEMENTS.popupAddCard);
	UI_ELEMENTS.formAddCard.reset();
}

// Закрытие попапа при нажатии клавиши Esc
function checkEscButton(evt) {
	if (evt.key === 'Escape') {
		const currentPopupElement = document.querySelector('.popup-opened');
		clozedPopap(currentPopupElement);
	}
}

// Закрытие попапа при нажатии на overlay
function handleOverlayClick(evt) {
	if (evt.target === evt.currentTarget) {
		clozedPopap(evt.currentTarget);
	}
}
UI_ELEMENTS.myDate.addEventListener('click', (event) => {
	openPopap(UI_ELEMENTS.popupProfile)
});

UI_ELEMENTS.closedPopupProfile.addEventListener('click', (event) => {
	clozedPopap(UI_ELEMENTS.popupProfile);
});

UI_ELEMENTS.addCard.addEventListener('click', (event) => {
	openPopap(UI_ELEMENTS.popupAddCard)
});


UI_ELEMENTS.closedPopupAddCard.addEventListener('click', (event) => {
	clozedPopap(UI_ELEMENTS.popupAddCard);
});
UI_ELEMENTS.popupCardClose.addEventListener('click', (event) => {
	clozedPopap(UI_ELEMENTS.popupCard)
});
UI_ELEMENTS.formProfile.addEventListener('submit', changeProfile);
UI_ELEMENTS.formAddCard.addEventListener('submit', saveCard)

initialCards.forEach(card => addNewCard(card));
UI_ELEMENTS.popupElements.forEach(popupElement => {
	popupElement.addEventListener('click', handleOverlayClick);
});