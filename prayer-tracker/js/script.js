// Daftar sholat
const prayers = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];

// Load status dari localStorage saat halaman dimuat
window.onload = function() {
    prayers.forEach(prayer => {
        const checkbox = document.getElementById(prayer);
        checkbox.checked = localStorage.getItem(prayer) === 'true';
        checkbox.addEventListener('change', () => {
            localStorage.setItem(prayer, checkbox.checked);
        });
    });
};

// Fungsi untuk reset semua checkbox
function resetPrayers() {
    prayers.forEach(prayer => {
        document.getElementById(prayer).checked = false;
        localStorage.setItem(prayer, false);
    });
}
