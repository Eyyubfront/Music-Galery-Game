const musicbox = document.getElementById("songbox");
const songerperson = document.getElementById("songername");
const songname = document.getElementById("songmusic");
const songphoto = document.getElementById("songphot");
const songid = document.getElementById("songid");
const back = document.getElementById("iconsbacw");
const playpause = document.getElementById("iconplay");
const forward = document.getElementById("iconforward");

const musiclist = [
  {
    id: 0,
    img: "songs1.jpg",
    songer: "Lami",
    audio: "Roya_-_Yada_Dusursen_-_www.BiG.AZ.mp3",
    song: "Hunk",
  },
  {
    id: 1,
    img: "songs2.jpg",
    songer: "Jeck",
    audio: "Roya_-_Yada_Dusursen_-_www.BiG.AZ.mp3",
    song: "Hunk",
  },
  {
    id: 2,
    img: "songs3.jpg",
    songer: "Song",
    audio: "Roya_-_Yada_Dusursen_-_www.BiG.AZ.mp3",
    song: "Hunk",
  },
  {
    id: 3,
    img: "songs4.jpg",
    songer: "Fred",
    audio: "Roya_-_Yada_Dusursen_-_www.BiG.AZ.mp3",
    song: "Hunk",
  },
  {
    id: 4,
    img: "songs5.jpg",
    songer: "Ali",
    audio: "Roya_-_Yada_Dusursen_-_www.BiG.AZ.mp3",
    song: "Hunk",
  },
];

let currentSong = 0;

Writedata(currentSong);

playpause.onclick = () => {
  if (songid.paused) {
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    songid.play();
  } else {
    songid.pause();
    songid.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
};

songsnext.onclick = () => {
  if (currentSong >= musiclist.length - 1) {
    currentSong = 0;
  } else {
    currentSong++;
  }
  Writedata(currentSong);
};

songprevs.onclick = () => {
  if (currentSong === 0) {
    currentSong = musiclist.length - 1;
  } else {
    currentSong--;
  }
  Writedata(currentSong);
};
forward.onclick = () => {
  songid.currentTime += 5;
};

backward.onclick = () => {
  songid.currentTime -= 5;
};

function Writedata(c) {
  songid.src = `./${musiclist[c].audio}`;
  songphoto.src = `./${musiclist[c].img}`;
  songerperson.textContent = `${musiclist[c].songer}`;
}
