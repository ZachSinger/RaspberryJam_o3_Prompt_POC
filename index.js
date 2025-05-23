const getAppToolbar = () => {
  return document.getElementById("app-toolbar-container");
};

const getBpmWidget = () => {
  return document.getElementById("bpm-widget");
};

const getSongWidget = () => {
  return document.getElementById("song-widget");
};

const getSongNameText = () => {
  return document.getElementById("song-name-text");
};

const getNextSongArrow = () => {
  return document.getElementById("next-song-arrow");
};

const getPrevSongArrow = () => {
  return document.getElementById("prev-song-arrow");
};

const getHamburgerWidget = () => {
  return document.getElementById("hamburger-widget");
};

const getMainDisplayRegion = () => {
  return document.getElementById("main-display-region");
};

const getCurrentSongPart = () => {
  return document.getElementById("current-song-part");
};

const getSongPartArrow = () => {
  return document.getElementById("song-part-arrow");
};

const getNextSongPart = () => {
  return document.getElementById("next-song-part");
};

const getDescriptionDisplayRegion = () => {
  return document.getElementById("description-display-region");
};

const getDescriptionDisplayText = () => {
  return document.getElementById("description-display-text");
};

const getBpmDisplayRegion = () => {
  return document.getElementById("bpm-display-region");
};

const getBpmDisplayShape = () => {
  return document.getElementById("bpm-display-shape");
};

const getBpmDisplay = () => {
  return document.getElementById("bpmDisplay");
};

const getBpmModeToggle = () => {
  return document.getElementById("bpm-toggle-button");
};

/**
 *  -----------Global Vars---------------
 */
let isBpmModeActive = false;
let currentSetName = "SetA";
let currentSetData;
let songsInSetData;
let songPartIndex = 0;
let songInSetIndex = 0;

/**
 *  -----------Functions---------------
 */
const renderMainDisplayRegion = () => {};

renderMainDisplayRegion();

const loadCurrentSet = async () => {
  try {
    const response = await fetch(`sets/${currentSetName}.json`);
    if (!response.ok) {
      throw new Error("Unable to fetch json");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error loading ${currentSetName}.json:`, error);
    return [];
  }
};

const loadSongsInSet = async () => {
  if (!currentSetData || currentSetData.length === 0) {
    currentSetData = await loadCurrentSet();
  }
  if (!currentSetData) currentSetData = [];
  const songJsons = await Promise.all(
    currentSetData.map(async (songName) => {
      try {
        const response = await fetch(`songs/${songName}.json`);
        if (!response.ok) {
          throw new Error(`Unable to fetch ${songName}.json`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Error loading ${songName}.json:`, error);
        return null;
      }
    })
  );
  return songJsons;
};

/**
 *  -----------Song In Set Functions---------------
 */
const getCurrentSong = () => {
  return songsInSetData[songInSetIndex];
};

const handleSongArrowLeft = () => {
  let len = songsInSetData.length;

  if (songInSetIndex - 1 >= 0) {
    songInSetIndex -= 1;
  } else {
    songInSetIndex = len - 1;
  }

  updateSongInSetText();
};

const handleSongArrowRight = () => {
  let len = songsInSetData.length;

  songInSetIndex = (songInSetIndex + 1) % len;

  updateSongInSetText();
};

const updateSongInSetText = () => {
  let text = songsInSetData[songInSetIndex].songTitle;
  getSongNameText().innerText = text;
};

/**
 *  -----------Current Song Functions---------------
 */
const getCurrentSongPartName = () => {
  return getCurrentSong().parts[songPartIndex].name;
};

const getCurrentSongPartDescription = () => {
  return getCurrentSong().parts[songPartIndex].description;
};

function updateNextSongPartDisplay() {
  const el = document.getElementById("next-song-part");
  const currentSong = getCurrentSong();
  if (
    el &&
    currentSong &&
    Array.isArray(currentSong.parts) &&
    songPartIndex < currentSong.parts.length - 1
  ) {
    el.style.display = "block";
    el.textContent = currentSong.parts[songPartIndex + 1].name;
  } else if (el) {
    el.style.display = "none";
  }
}

// Update both displays when the song part changes
function updateCurrentSongPartDisplay() {
  const el = document.getElementById("current-song-part");
  if (el) {
    el.textContent = getCurrentSongPartName();
  }
  updateNextSongPartDisplay();
}

const changeSongPartDisplay = (backward = false) => {
  let currentSong = getCurrentSong();
  let length = currentSong.parts.length;
  let increment = backward ? -1 : 1;
  let newIndex = songPartIndex + increment;

  console.log(currentSong, songPartIndex, length, increment, newIndex);
  if (newIndex < length && newIndex >= 0) {
    songPartIndex += increment;
    refreshDisplayRegions();
  }

  if (newIndex === length - 1) {
    getNextSongPart().textContent = "";
  }

  // Always update next-song-part visibility after changing part
  const nextSongPartEl = document.getElementById("next-song-part");
  if (nextSongPartEl) {
    if (songPartIndex < currentSong.parts.length - 1) {
      nextSongPartEl.style.display = "flex";
    } else {
      nextSongPartEl.style.display = "none";
    }
  }
};

//Update description display for current song part
const updateCurrentDescriptionDisplay = () => {
  const descriptionDisplay = getDescriptionDisplayText();

  descriptionDisplay.textContent = getCurrentSongPartDescription();
};

const refreshDisplayRegions = () => {
  updateCurrentSongPartDisplay();
  updateCurrentDescriptionDisplay();
};

/**
 *  -----------Hamburger Menu Functions---------------
 */

const toggleHamburgerMenu = () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
};

/**
 *  -----------BPM Functions---------------
 */

const toggleBPMMode = (event) => {
  isBpmModeActive = !isBpmModeActive;
  const btn = event.target;
  btn.innerText = isBpmModeActive ? "Disable" : "Enable";
  btn.classList.toggle("bpm-enabled", isBpmModeActive);
  btn.classList.toggle("bpm-disabled", !isBpmModeActive);
};

const initialize = async () => {
  currentSetData = await loadCurrentSet();
  songsInSetData = await loadSongsInSet();

  getSongNameText().innerText = songsInSetData[songInSetIndex].songTitle;
  getHamburgerWidget().addEventListener("click", toggleHamburgerMenu);
  getNextSongArrow().addEventListener("click", handleSongArrowRight);
  getPrevSongArrow().addEventListener("click", handleSongArrowLeft);
  getBpmModeToggle().addEventListener("click", toggleBPMMode);

  const bpmBtn = getBpmModeToggle();
  bpmBtn.innerText = isBpmModeActive ? "Disable" : "Enable";
  bpmBtn.classList.toggle("bpm-enabled", isBpmModeActive);
  bpmBtn.classList.toggle("bpm-disabled", !isBpmModeActive);

  updateCurrentSongPartDisplay();
  updateCurrentDescriptionDisplay();
};

// Example usage:
(async () => {
  await initialize();
})();

let keyDownTimestamp = null;
let keyIsDown = false;
let repeatInterval = null;

// Keyboard handlers
document.addEventListener("keydown", (event) => {
  if (keyIsDown) return; // Prevent repeat while holding
  keyIsDown = true;
  keyDownTimestamp = Date.now();

  // Start repeat after 500ms if still held
  repeatInterval = setTimeout(function repeat() {
    changeSongPartDisplay(true);
    repeatInterval = setTimeout(repeat, 500);
  }, 500);
});

document.addEventListener("keyup", (event) => {
  if (!keyIsDown) return;
  keyIsDown = false;
  const duration = Date.now() - keyDownTimestamp;
  clearTimeout(repeatInterval);

  if (duration <= 150) {
    changeSongPartDisplay(false); // Quick tap
  }
});

// Touch handlers
let touchDownTimestamp = null;
let touchIsDown = false;
let touchRepeatInterval = null;

document.addEventListener("touchstart", (event) => {
  if (touchIsDown) return;
  touchIsDown = true;
  touchDownTimestamp = Date.now();

  touchRepeatInterval = setTimeout(function repeat() {
    changeSongPartDisplay(true);
    touchRepeatInterval = setTimeout(repeat, 500);
  }, 500);
});

document.addEventListener("touchend", (event) => {
  if (!touchIsDown) return;
  touchIsDown = false;
  const duration = Date.now() - touchDownTimestamp;
  clearTimeout(touchRepeatInterval);

  if (duration <= 150) {
    changeSongPartDisplay(false); // Quick tap
  }
});
