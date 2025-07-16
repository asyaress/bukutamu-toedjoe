let lastOpenedModal = null;

function swipeLeft() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    welcomeScreen.classList.add('swipe-left');

    setTimeout(() => {
        const productContainer = document.getElementById('productContainer');
        productContainer.style.display = 'flex';
        showModal();
        lastOpenedModal = 'productModal';
        sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
        welcomeScreen.style.display = 'none';
    }, 1000);
}

function refreshPage() {
    location.reload(); // Perintah untuk reload halaman
  }
  

function showModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    lastOpenedModal = 'productModal';
    sessionStorage.setItem('lastOpenedModal', lastOpenedModal);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';

    // If lastOpenedModal is closed, clear the variable
    if (lastOpenedModal === 'productModal') {
        lastOpenedModal = null;
        sessionStorage.removeItem('lastOpenedModal'); // Clear from sessionStorage
    }
}