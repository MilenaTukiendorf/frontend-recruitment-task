const showPopupButton= document.getElementById("show-popup-button");
console.log("showPopupButton", showPopupButton);

const onPopupButtonClick = () => {
    alert('Popup works');
}


showPopupButton.addEventListener('click', onPopupButtonClick );