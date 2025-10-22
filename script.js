let currentPage = 1;
const totalPages = 2;
const pages = document.querySelectorAll('.page');
const song = document.getElementById('birthdaySong');
const musicBtn = document.getElementById('musicBtn');

// Show selected page
function showPage(pageNum) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(`page${pageNum}`).classList.add('active');
}

// Next page
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

// Previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

// Music play/pause
musicBtn.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    song.pause();
    musicBtn.textContent = "▶ Play Music";
  }
});
