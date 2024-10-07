// Fungsi untuk mengubah pesan ketika tombol diklik
function ubahPesan() {
    const messageElement = document.querySelector('.message');
    messageElement.textContent = "Halo Amel, aku cuma mau bilang. makasih ya, udah buat aku seneng tiap hari, setiap harinya jadi happy dan bikin aku kangen terus. Semoga kita cepet ketemu ya amelll.";
    messageElement.style.opacity = 0;  // Efek transisi
    setTimeout(() => {
        messageElement.style.opacity = 1; // Efek transisi kembali
    }, 500);
}
