function showAlert() {
    const petType = document.getElementById("pet").value;
    alert(`You are looking for a: ${petType}`);
}

function removeDonateButton() {
    const donateButton = document.getElementById("donateButton");
    donateButton.remove();
}

function increasePetting(button) {
    const pettingsElement = button.previousElementSibling;
    let pettings = parseInt(pettingsElement.textContent);
    pettings++;
    pettingsElement.textContent = `${pettings} petting(s)`;
}
