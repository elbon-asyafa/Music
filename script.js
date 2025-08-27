const music = document.getElementById('music');
const playlist = document.getElementById('playlist');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

const songs = [
  { title: 'tabola pica 1', src: 'songs/DJ TABOLA BALE X CALON MANTU IDAMAN SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2025 - Maman Fvndy Rmx.mp3' },
  { title: 'tabola pica 2', src: 'songs/DJ TABOLA BALE X PICA PICA 2 SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2025 - Maman Fvndy Rmx.mp3' },
  { title: 'kasih aba aba', src: 'songs/DJ KASIH ABA ABA - KU MERASAKAN APA YANG KAU RASAKAN SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2025 - Maman Fvndy Rmx.mp3' },
];

let currentSongIndex = 0;

// Load first song by default
music.src = songs[currentSongIndex].src;

// Generate playlist
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = song.title;
  li.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    music.play();
    updateActiveSong();
  });
  playlist.appendChild(li);
});

function loadSong(index) {
  music.src = songs[index].src;
}

function updateActiveSong() {
  const allItems = playlist.querySelectorAll('li');
  allItems.forEach((item, i) => {
    item.style.fontWeight = (i === currentSongIndex) ? 'bold' : 'normal';
    item.style.color = (i === currentSongIndex) ? '#4CAF50' : '#000';
  });
}

// Initial highlight
updateActiveSong();

// Controls
playButton.addEventListener('click', () => music.play());
pauseButton.addEventListener('click', () => music.pause());
stopButton.addEventListener('click', () => {
  music.pause();
  music.currentTime = 0;
});

// Auto play next song
music.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  music.play();
  updateActiveSong();
});
