console.log("Main start");

popup = document.getElementById('popup');
showPopupButton = document.getElementById('show-popup-button');

console.log('showPopupButton', showPopupButton);
console.log('popup', popup);

const openPopup = () => {
    popup  = document.getElementById('popup');
    console.log('togglePopup popup', popup);

    popup.classList.add("show-popup");
}

const closePopup = () => {
    popup = document.getElementById('popup');
    console.log('closePopup popup', popup);

    popup.classList.remove("show-popup");
}

showPopupButton.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);