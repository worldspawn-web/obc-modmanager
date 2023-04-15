const latestVersion = 1.47;
const currentVersion = 1.47;
const modal = document.querySelector('.modal');
let currentVersionModal = document.querySelector('.currentversion');
let latestVersionModal = document.querySelector('.latestversion');

currentVersionModal = currentVersionModal.textContent = currentVersion;
latestVersionModal = latestVersionModal.textContent = latestVersion;

const handleCloseModal = () => {
    modal.classList.toggle('active');
}

window.onload = () => {
    if (latestVersion !== currentVersion) {
        modal.classList.toggle('active');
    }
}

modal.addEventListener('click', handleCloseModal);


