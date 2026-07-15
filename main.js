// Memory Book Script - 3D Book Cover & Fullscreen Polaroid Trail

// 1. DYNAMIC MEDIA FILES ARRAY
const mediaFiles = [
  "20250717_112208.heic",
  "20250717_112218.heic",
  "20250907_131207.heic",
  "20250907_131803.heic",
  "20250907_131814.heic",
  "20250907_132341.heic",
  "20250907_132840.heic",
  "20251020_105541.heic",
  "20251110_202914.heic",
  "IMG-20250422-WA0003.jpg",
  "IMG-20250516-WA0008.jpg",
  "IMG-20250525-WA0009.jpg",
  "IMG-20250726-WA0061.jpg",
  "IMG-20251103-WA0013.jpg",
  "IMG-20251122-WA0046.jpg",
  "IMG-20251213-WA0021.jpg",
  "IMG-20260105-WA0019.jpg",
  "IMG-20260108-WA0064.jpg",
  "IMG-20260108-WA0067.jpg",
  "IMG-20260113-WA0375.jpg",
  "IMG-20260113-WA0380.jpg",
  "IMG_20250518_201930_553.jpg",
  "IMG_20250817_105251.jpg",
  "IMG_20250817_115134.jpg",
  "IMG_20250817_115223.jpg",
  "IMG_20251204_200928_270.jpg",
  "IMG_20260409_082115.jpg",
  "IMG_6310.HEIC",
  "IMG_7063.JPG",
  "IMG_7067-EDIT.jpg",
  "IMG_8238.HEIC",
  "Screenshot_20250510_202358.jpg",
  "Screenshot_20250510_202401.jpg",
  "Snapchat-1002869771.jpg",
  "Snapchat-1054088021.jpg",
  "Snapchat-1122426511.jpg",
  "Snapchat-116609896.jpg",
  "Snapchat-1170681452.jpg",
  "Snapchat-1177186573.jpg",
  "Snapchat-1202350408.jpg",
  "Snapchat-1213882703.jpg",
  "Snapchat-1262290040.jpg",
  "Snapchat-1336586928.jpg",
  "Snapchat-1346573364.jpg",
  "Snapchat-1387870021.jpg",
  "Snapchat-1404002532.jpg",
  "Snapchat-1451985562.jpg",
  "Snapchat-1492672411.jpg",
  "Snapchat-1494346778.jpg",
  "Snapchat-1518552276.jpg",
  "Snapchat-1532477812.jpg",
  "Snapchat-1534419721.jpg",
  "Snapchat-1552908319.jpg",
  "Snapchat-157649770.jpg",
  "Snapchat-1576514385.jpg",
  "Snapchat-1649841250.jpg",
  "Snapchat-1707801648.jpg",
  "Snapchat-1802136530.jpg",
  "Snapchat-1933457442.jpg",
  "Snapchat-1941118704.jpg",
  "Snapchat-1945787031.jpg",
  "Snapchat-200276536.jpg",
  "Snapchat-2004785614.jpg",
  "Snapchat-2076846182.jpg",
  "Snapchat-20816540.jpg",
  "Snapchat-2092426372.jpg",
  "Snapchat-2092948312.jpg",
  "Snapchat-2107241357.jpg",
  "Snapchat-237750066.jpg",
  "Snapchat-335202843.jpg",
  "Snapchat-396411936.jpg",
  "Snapchat-405707638.jpg",
  "Snapchat-407064271.jpg",
  "Snapchat-414129398.jpg",
  "Snapchat-435963636.jpg",
  "Snapchat-455616080.jpg",
  "Snapchat-459822264.jpg",
  "Snapchat-471206491.jpg",
  "Snapchat-486474401.jpg",
  "Snapchat-489561151.jpg",
  "Snapchat-492012301.jpg",
  "Snapchat-514236535.jpg",
  "Snapchat-5252689.jpg",
  "Snapchat-553901223.jpg",
  "Snapchat-58535052.jpg",
  "Snapchat-600303112.jpg",
  "Snapchat-631635978.jpg",
  "Snapchat-646046891.jpg",
  "Snapchat-670760510.jpg",
  "Snapchat-675033085.jpg",
  "Snapchat-734427575.jpg",
  "Snapchat-740460425.jpg",
  "Snapchat-741513453.jpg",
  "Snapchat-74293595.jpg",
  "Snapchat-752367976.jpg",
  "Snapchat-754157247.jpg",
  "Snapchat-757881436.jpg",
  "Snapchat-761009360.mp4",
  "Snapchat-786539222.jpg",
  "Snapchat-827899928.jpg",
  "Snapchat-837056911.jpg",
  "Snapchat-889271926.jpg",
  "Snapchat-994860766.jpg",
  "Videoshot_20250405_154155.jpg"
];

// 50+ Cute romantic captions for unique Polaroid photos
const romanticCaptions = [
  "A little bit of magic ✨",
  "Moments we wish would last ❤️",
  "Pure smiles and good vibes 😊",
  "Laughter is everything 💖",
  "A thousand feelings 💕",
  "Memories worth holding close 🥰",
  "Caught in a beautiful moment",
  "Chasing sunsets together 🌅",
  "The best times of my life 🌟",
  "Making memories forever",
  "Happiness looks gorgeous on us! 🌺",
  "A snippet of our journey 🗺️",
  "Just us being perfectly happy 🥰",
  "Every picture tells our story",
  "My favorite distraction 🔒",
  "You make my heart smile 💞",
  "A million little things with you",
  "Holding onto this sweet moment",
  "My sun, my moon, and my stars 🌙",
  "Two hearts, one soul ❤️",
  "The reason for my smile 😊",
  "With you, life is beautiful 🌹",
  "Simply meant to be 🕊️",
  "Every moment with you is precious",
  "Creating our own fairytale ✨",
  "You're my favorite view 🏞️",
  "Perfect candids, perfect memories",
  "Crazy about you! 🤪❤️",
  "Wrapped up in your warmth 🔥",
  "My absolute favorite place to be",
  "Side by side, hand in hand 🤝",
  "All of me loves all of you",
  "The sweetest memory of all 🍭",
  "Forever wouldn't be long enough",
  "You are my happy place 🏡",
  "Just a sweet slice of heaven 🍰",
  "My heart belongs to you 💝",
  "Love is in the little things 🌸",
  "You make everything better 🪄",
  "My partner in everything 🚀",
  "Under the spell of your laugh 🪄",
  "So many giggles, so much love",
  "You shine brighter than the stars ✨",
  "Capturing our sweet candids 📸",
  "You make my world complete 🌎",
  "A sweet token of our love 🎫",
  "Forever and always, you and me",
  "My dream come true 🌌",
  "Living in our bubble of joy 🧼",
  "To the moon and back 🚀🌙",
  "Every day with you is a gift 🎁",
  "Blessed with the best 🥰",
  "Just love, laughter, and us 🥂"
];

// Helper to format dates and captions based on filename
function getMediaDetails(filename, index) {
  let title = "";
  let dateText = "A Precious Moment";
  
  const dateMatch = filename.match(/(\d{4})(\d{2})(\d{2})/);
  if (dateMatch) {
    const year = dateMatch[1];
    const monthIndex = parseInt(dateMatch[2]) - 1;
    const day = parseInt(dateMatch[3]);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    if (monthIndex >= 0 && monthIndex < 12) {
      dateText = `${months[monthIndex]} ${day}, ${year}`;
    }
  }

  // Calculate a stable index for unique captions
  const captionIndex = typeof index === 'number' ? index : Math.abs(filename.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
  title = romanticCaptions[captionIndex % romanticCaptions.length];

  if (filename.includes("Snapchat")) {
    if (dateText === "A Precious Moment") {
      dateText = "Snapchat Memory";
    }
  } else if (filename.includes("Screenshot")) {
    if (dateText === "A Precious Moment") {
      dateText = "Screenshot Save";
    }
  }

  return { title, date: dateText };
}

// Global Application State
let currentUserName = "";
let bgMusic = null;
let musicPlaying = false;
let preloadedMediaElements = []; // Store pre-created DOM elements
let trailInstance = null; // The ImageTrail instance

// DOM Elements with Safe Selection
const introScreen = document.getElementById("app");
const introTitle = document.getElementById("intro-title");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const emojiCanvas = document.getElementById("emoji-canvas");
const homeScreen = document.getElementById("home-screen");
const trailScreen = document.getElementById("trail-screen");
const userDisplayName = document.getElementById("user-display-name");
const musicController = document.getElementById("music-controller");
const musicToggle = document.getElementById("music-toggle");
const musicNext = document.getElementById("music-next");
const trailContainer = document.getElementById("trail-container");
const instructionsOverlay = document.getElementById("instructions");

// Buttons & Album elements
const coverSheet = document.getElementById("book-cover-sheet");
const btnReset = document.getElementById("btn-reset");
const btnHome = document.getElementById("btn-home");

// Image Modal Elements
const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.querySelector(".modal-close");

// HEIC conversion Cache to prevent multiple loads
const heicCache = {};

// Centralized GSAP Page Transition Helper
function transitionPages(fromScreen, toScreen, onMidpoint, type = "curtain") {
  const overlay = document.getElementById("transition-overlay");
  if (!overlay) {
    if (onMidpoint) onMidpoint();
    if (toScreen) {
      toScreen.classList.remove("hidden");
      animateEntrance(toScreen);
    }
    return;
  }

  const topCurtain = overlay.querySelector(".top-curtain");
  const bottomCurtain = overlay.querySelector(".bottom-curtain");
  const heartWrapper = overlay.querySelector(".transition-heart-wrapper");

  if (type === "fade") {
    const tl = gsap.timeline();
    overlay.style.pointerEvents = "auto";
    
    if (fromScreen) {
      tl.to(fromScreen, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          fromScreen.classList.add("hidden");
          gsap.set(fromScreen, { y: 0 });
        }
      });
    }
    
    tl.add(() => {
      if (onMidpoint) onMidpoint();
      if (toScreen) {
        toScreen.classList.remove("hidden");
        gsap.set(toScreen, { opacity: 0, y: 15 });
      }
    });

    if (toScreen) {
      tl.to(toScreen, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => {
          animateEntrance(toScreen);
        }
      });
    }
    
    tl.add(() => {
      overlay.style.pointerEvents = "none";
    });
    
    return;
  }

  overlay.style.pointerEvents = "auto";

  const tl = gsap.timeline({
    onComplete: () => {
      overlay.style.pointerEvents = "none";
    }
  });

  tl.to([topCurtain, bottomCurtain], {
    y: "0%",
    duration: 0.6,
    ease: "power3.inOut"
  })
  .to(heartWrapper, {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.7)"
  }, "-=0.2")
  .to(heartWrapper, {
    scale: 1.1,
    duration: 0.2
  })
  .add(() => {
    if (onMidpoint) {
      onMidpoint();
    }
    if (toScreen) {
      animateEntrance(toScreen);
    }
  })
  .to(heartWrapper, {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power2.in"
  })
  .to(topCurtain, {
    y: "-100%",
    duration: 0.6,
    ease: "power3.inOut"
  }, "-=0.2")
  .to(bottomCurtain, {
    y: "100%",
    duration: 0.6,
    ease: "power3.inOut"
  }, "<");
}

// Staggered Entrance Animation helper
function animateEntrance(container) {
  if (!container) return;
  const card = container.querySelector(".intro-card, .security-card, .vibe-card, .book-container, .caption-container");
  if (card) {
    const childs = card.querySelectorAll("h1, h2, h3, p, form, .input-group, button, .vibe-hearts-container, .security-options");
    if (childs.length > 0) {
      gsap.killTweensOf(childs);
      gsap.fromTo(childs, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
      );
    }
  }
}

// 2. INTRO TYPING ANIMATION
const introPhrase = "knock knock, who's this?";
let introCharIndex = 0;

function typeIntroText() {
  if (introTitle) {
    if (introCharIndex < introPhrase.length) {
      introTitle.textContent += introPhrase.charAt(introCharIndex);
      introCharIndex++;
      setTimeout(typeIntroText, 110);
    } else {
      if (nameForm) {
        nameForm.classList.remove("hidden-opacity");
        nameForm.classList.add("show-opacity");
      }
      if (nameInput) {
        nameInput.focus();
      }
    }
  }
}

// Start preloading media on load (website waits for lamp turn-on to reveal)
window.addEventListener("DOMContentLoaded", () => {
  preloadMedia();
});

// 3. EMOJI RAIN ENGINE (CANVAS)
let canvasCtx = null;
// ONLY HEART emojis as requested: ❤️
let emojisList = ['❤️'];
let activeEmojis = [];
let rainAnimationId = null;

function initEmojiCanvas() {
  if (emojiCanvas) {
    canvasCtx = emojiCanvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  }
}

function resizeCanvas() {
  if (emojiCanvas) {
    emojiCanvas.width = window.innerWidth;
    emojiCanvas.height = window.innerHeight;
  }
}

class FallingEmoji {
  constructor() {
    this.x = Math.random() * (emojiCanvas ? emojiCanvas.width : window.innerWidth);
    this.y = -50 - (Math.random() * 200);
    this.char = emojisList[Math.floor(Math.random() * emojisList.length)];
    this.size = 24 + Math.random() * 26; // 24px to 50px
    this.speedY = 3.0 + Math.random() * 2.5; // NORMAL SPEED (3.0 to 5.5)
    this.swaySpeed = 0.015 + Math.random() * 0.02;
    this.swayAmplitude = 20 + Math.random() * 25;
    this.swayOffset = Math.random() * 100;
    this.angle = Math.random() * 360;
    this.spinSpeed = -1.5 + Math.random() * 3;
  }

  update(time) {
    this.y += this.speedY;
    this.angle += this.spinSpeed;
    this.xOffset = Math.sin(time * this.swaySpeed + this.swayOffset) * this.swayAmplitude;
  }

  draw() {
    if (!canvasCtx) return;
    canvasCtx.save();
    canvasCtx.translate(this.x + this.xOffset, this.y);
    canvasCtx.rotate((this.angle * Math.PI) / 180);
    canvasCtx.font = `${this.size}px Arial`;
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline = "middle";
    canvasCtx.fillText(this.char, 0, 0);
    canvasCtx.restore();
  }
}

function runEmojiRain() {
  if (!emojiCanvas) {
    transitionToHomeScreen();
    return;
  }

  emojiCanvas.classList.remove("hidden");
  activeEmojis = [];
  
  for (let i = 0; i < 45; i++) {
    activeEmojis.push(new FallingEmoji());
  }

  let startTime = Date.now();
  
  function animateRain() {
    let now = Date.now();
    let elapsed = now - startTime;
    
    canvasCtx.clearRect(0, 0, emojiCanvas.width, emojiCanvas.height);
    
    if (activeEmojis.length < 55 && Math.random() < 0.2) {
      activeEmojis.push(new FallingEmoji());
    }

    for (let i = activeEmojis.length - 1; i >= 0; i--) {
      let em = activeEmojis[i];
      em.update(now / 1000);
      em.draw();

      if (em.y > emojiCanvas.height + 50) {
        activeEmojis.splice(i, 1);
      }
    }

    // Normal speed rain lasts for 6 seconds
    if (elapsed < 6000) {
      rainAnimationId = requestAnimationFrame(animateRain);
    } else {
      emojiCanvas.style.opacity = '0';
      setTimeout(() => {
        cancelAnimationFrame(rainAnimationId);
        emojiCanvas.classList.add("hidden");
        emojiCanvas.style.opacity = '1';
        transitionToHomeScreen();
      }, 800);
    }
  }

  animateRain();
}

// 4. MUSIC ENGINE (HTML5 AUDIO - PLAYING LOCAL BACKGROUND.MP3 & GDRIVE PLAYLIST)
const playlist = [
  "background.mp3",
  "https://docs.google.com/uc?export=download&id=118P6PnQTQaUlzWg0jmTXJNmiuxuAK3-j",
  "song2.mp3"
];
let playlistIndex = 0;

function initAudio() {
  if (!bgMusic) {
    bgMusic = new Audio(playlist[playlistIndex]);
    
    // Auto-advance playlist when song ends
    bgMusic.addEventListener("ended", () => {
      playNextTrack();
    });

    // Auto-advance if there is a loading error (e.g. drive file warning page)
    bgMusic.addEventListener("error", (e) => {
      console.error("Audio failed to load, skipping to next track:", e);
      playNextTrack();
    });

    if (musicController) {
      musicController.classList.remove("hidden");
    }
  }
}

function playNextTrack() {
  if (!bgMusic) return;
  playlistIndex = (playlistIndex + 1) % playlist.length;
  
  bgMusic.src = playlist[playlistIndex];
  bgMusic.load();
  
  if (musicPlaying) {
    bgMusic.play().catch(err => console.error("Audio playback error:", err));
    if (musicToggle) {
      musicToggle.querySelector(".music-text").textContent = "Playing";
      musicToggle.classList.add("active");
    }
  }
  console.log("Playing next song: " + playlist[playlistIndex]);
}

function toggleMusic() {
  initAudio();

  musicPlaying = !musicPlaying;
  
  if (musicPlaying) {
    bgMusic.play().catch(err => {
      console.error("Audio playback failed:", err);
    });
    if (musicToggle) {
      musicToggle.querySelector(".music-text").textContent = "Playing";
      musicToggle.classList.add("active");
    }
  } else {
    if (bgMusic) {
      bgMusic.pause();
    }
    if (musicToggle) {
      musicToggle.querySelector(".music-text").textContent = "Muted";
      musicToggle.classList.remove("active");
    }
  }
}

if (musicToggle) {
  musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMusic();
  });
}

if (musicNext) {
  musicNext.addEventListener("click", (e) => {
    e.stopPropagation();
    initAudio();
    musicPlaying = true;
    playNextTrack();
  });
}

// 5. NAME SUBMISSION & SECURITY VERIFICATION
if (nameForm) {
  nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!nameInput) return;
    currentUserName = nameInput.value.trim();
    if (!currentUserName) return;

    if (userDisplayName) {
      userDisplayName.textContent = currentUserName;
    }
    
    const securityScreen = document.getElementById("security-screen");
    transitionPages(introScreen, securityScreen, () => {
      if (introScreen) {
        introScreen.classList.add("hidden");
        introScreen.style.display = 'none'; // Fully remove from layout
      }
      if (securityScreen) {
        securityScreen.classList.remove("hidden");
        securityScreen.style.opacity = '1';
      }
    });
  });
}

function showSecurityScreen() {
  const securityScreen = document.getElementById("security-screen");
  if (securityScreen) {
    securityScreen.classList.remove("hidden");
    setTimeout(() => {
      securityScreen.style.opacity = '1';
    }, 100);
  }
}

// Security Check Choice handlers
// Security Check Choice handlers
const securityOptionBtns = document.querySelectorAll(".security-option-btn");
const securityModal = document.getElementById("security-modal");
let isProceeding = false; // Prevent double trigger

function proceedToAlbum() {
  if (isProceeding) return;
  isProceeding = true;
  
  if (securityModal) {
    transitionPages(securityModal, homeScreen, () => {
      securityModal.classList.add("hidden");
      securityModal.style.opacity = '0';
      if (homeScreen) {
        homeScreen.classList.remove("hidden");
        homeScreen.style.opacity = '1';
      }
    }, "fade");
  }
}

const envelope = document.getElementById("envelope");

securityOptionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const securityScreen = document.getElementById("security-screen");
    const verifyingScreen = document.getElementById("verifying-screen");
    
    transitionPages(securityScreen, verifyingScreen, () => {
      if (securityScreen) {
        securityScreen.classList.add("hidden");
        securityScreen.style.opacity = '0';
      }
      if (verifyingScreen) {
        verifyingScreen.classList.remove("hidden");
        verifyingScreen.style.opacity = '1';
      }
    });

    // After 2.8 seconds, transition to the envelope modal
    setTimeout(() => {
      transitionPages(verifyingScreen, securityModal, () => {
        if (verifyingScreen) {
          verifyingScreen.classList.add("hidden");
          verifyingScreen.style.opacity = '0';
        }
        if (securityModal) {
          securityModal.classList.remove("hidden");
          securityModal.style.opacity = '1';
          
          // Ensure the envelope is closed initially
          if (envelope) {
            envelope.classList.remove("open");
            envelope.classList.add("close");
          }
        }
      }, "fade");
    }, 2800);
  });
});

function openEnvelope() {
  if (envelope && envelope.classList.contains("close")) {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }
}

function closeEnvelope() {
  if (envelope && envelope.classList.contains("open")) {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }
}

if (envelope) {
  envelope.addEventListener("click", (e) => {
    e.stopPropagation();
    
    if (envelope.classList.contains("close")) {
      openEnvelope();
    } else {
      // Second click (when envelope is already open): Proceed to album!
      proceedToAlbum();
    }
  });
}

// Clicking the modal background itself should also proceed if envelope is open
if (securityModal) {
  securityModal.addEventListener("click", () => {
    if (envelope && envelope.classList.contains("open")) {
      proceedToAlbum();
    }
  });
}

// 6. ASYNC MEDIA PRELOADER & HEIC CONVERTER
async function preloadMedia() {
  if (!trailContainer) return;
  
  for (let i = 0; i < mediaFiles.length; i++) {
    const file = mediaFiles[i];
    const details = getMediaDetails(file, i);
    const isHeic = file.toLowerCase().endsWith('.heic');
    const isVideo = file.toLowerCase().endsWith('.mp4');
    
    const polaroid = document.createElement("div");
    polaroid.className = "content__img polaroid";
    polaroid.style.opacity = "0";
    
    if (isVideo) {
      polaroid.innerHTML = `
        <video class="content__img-inner" src="picutres/${file}" loop muted playsinline></video>
        <div class="polaroid-caption">${details.title}</div>
      `;
      trailContainer.appendChild(polaroid);
      preloadedMediaElements.push(polaroid);
    } else if (isHeic) {
      polaroid.innerHTML = `
        <div class="content__img-inner">
          <div class="image-loading">
            <div class="spinner"></div>
            <span class="loading-text">Loading HEIC...</span>
          </div>
        </div>
        <div class="polaroid-caption">${details.title}</div>
      `;
      trailContainer.appendChild(polaroid);
      preloadedMediaElements.push(polaroid);
      
      convertAndSetHeic(file, polaroid);
    } else {
      polaroid.innerHTML = `
        <div class="content__img-inner" style="background-image: url('picutres/${file}')"></div>
        <div class="polaroid-caption">${details.title}</div>
      `;
      trailContainer.appendChild(polaroid);
      preloadedMediaElements.push(polaroid);
    }
  }
}

async function convertAndSetHeic(filename, element) {
  const filePath = `picutres/${filename}`;
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("HEIC fetch fail");
    
    const blob = await response.blob();
    
    let convertedBlob;
    try {
      // First try regular single-image conversion
      convertedBlob = await heic2any({
        blob: blob,
        toType: 'image/jpeg',
        quality: 0.65
      });
    } catch (innerErr) {
      console.warn("Single HEIC conversion failed, retrying with multiple: true for:", filename, innerErr);
      // Fallback for bursts / Live Photos
      convertedBlob = await heic2any({
        blob: blob,
        toType: 'image/jpeg',
        quality: 0.65,
        multiple: true
      });
    }

    const finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
    const objectUrl = URL.createObjectURL(finalBlob);
    
    heicCache[filename] = objectUrl;
    
    const inner = element.querySelector(".content__img-inner");
    if (inner) {
      inner.style.backgroundImage = `url('${objectUrl}')`;
    }
    const spinner = element.querySelector(".image-loading");
    if (spinner) spinner.remove();
  } catch(err) {
    console.error("HEIC preloader fail for:", filename, err);
    // Gracefully remove the failed polaroid from DOM and preloaded list so user never sees a broken frame
    element.remove();
    const index = preloadedMediaElements.indexOf(element);
    if (index > -1) {
      preloadedMediaElements.splice(index, 1);
    }
    if (trailInstance) {
      trailInstance.images = preloadedMediaElements.map(el => new TrailImageItem(el));
      trailInstance.imagesTotal = preloadedMediaElements.length;
    }
  }
}

function transitionToHomeScreen() {
  if (homeScreen) {
    homeScreen.classList.remove("hidden");
    setTimeout(() => {
      homeScreen.style.opacity = '1';
    }, 100);
  }
}

// 7. 3D BOOK COVER CLICK & TRANSITION TO FULLSCREEN TRAIL
if (coverSheet) {
  coverSheet.addEventListener("click", () => {
    // 1. Play 3D flip open animation on cover sheet
    coverSheet.classList.add("flipped");
    
    // 2. Wait 1.1 seconds for 3D flip visual completion, then transition
    setTimeout(() => {
      transitionPages(homeScreen, trailScreen, () => {
        if (homeScreen) {
          homeScreen.style.opacity = '0';
          homeScreen.classList.add("hidden");
        }
        
        if (trailScreen) {
          trailScreen.classList.remove("hidden");
          trailScreen.style.opacity = '1';
          
          // Make sure the vibe selector screen is visible initially
          const vibeSelector = document.getElementById("vibe-selector-screen");
          if (vibeSelector) {
            vibeSelector.classList.remove("hidden-vibe");
          }
          
          // Hide the music toolbar until a song vibe is selected
          if (musicController) {
            musicController.classList.add("hidden");
          }

          // Initialize GSAP Image Trail (but don't scatter yet!)
          if (!trailInstance && trailContainer) {
            trailInstance = new ImageTrailVariant7(trailContainer);
          }
        }
      }, "fade");
    }, 1100);
  });
}

// VIBE SELECTION HEART BUTTON HANDLERS
const vibeSelector = document.getElementById("vibe-selector-screen");
const vibeHeartBtns = document.querySelectorAll(".vibe-heart-btn");

vibeHeartBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const trackIndex = parseInt(btn.getAttribute("data-track-index"));
    
    // Set playlist index
    playlistIndex = trackIndex;
    
    // Hide vibe selector overlay
    if (vibeSelector) {
      vibeSelector.classList.add("hidden-vibe");
    }
    
    // Start selected music
    musicPlaying = true;
    if (!bgMusic) {
      initAudio();
    } else {
      bgMusic.src = playlist[playlistIndex];
      bgMusic.load();
    }
    
    bgMusic.play().catch(err => console.error("Audio playback failed:", err));
    
    if (musicToggle) {
      musicToggle.querySelector(".music-text").textContent = "Playing";
      musicToggle.classList.add("active");
    }
    if (musicController) {
      musicController.classList.remove("hidden");
    }
    
    // Reveal the first 4 photos now that vibe/song is selected
    if (trailInstance) {
      trailInstance.scatterInitial();
    }
  });
});

// Close Album: Go back to Home Book screen
if (btnHome) {
  btnHome.addEventListener("click", () => {
    transitionPages(trailScreen, homeScreen, () => {
      // Pause background music when leaving the album
      if (musicPlaying && bgMusic) {
        bgMusic.pause();
        musicPlaying = false;
        if (musicToggle) {
          musicToggle.querySelector(".music-text").textContent = "Muted";
          musicToggle.classList.remove("active");
        }
      }

      // Reset cover sheet flip state
      if (coverSheet) {
        coverSheet.classList.remove("flipped");
      }

      // Clear active polaroids
      if (trailInstance) {
        trailInstance.clearAll();
      }

      if (trailScreen) {
        trailScreen.style.opacity = '0';
        trailScreen.classList.add("hidden");
      }
      if (homeScreen) {
        homeScreen.classList.remove("hidden");
        homeScreen.style.opacity = '1';
      }
    }, "fade");
  });
}

// Clear Board button action
if (btnReset) {
  btnReset.addEventListener("click", () => {
    if (trailInstance) {
      trailInstance.clearAll();
    }
  });
}

// 8. GSAP IMAGE TRAIL (VARIANT 7 DESIGN)
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0, clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

function getNewPosition(position, offset, arr) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) {
    return position - realOffset;
  } else {
    return arr.length - (realOffset - position);
  }
}

class TrailImageItem {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.inner = el.querySelector('.content__img-inner');
    this.rect = { width: 320, height: 380 };
    this.defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
    
    gsap.set(this.DOM.el, this.defaultStyle);
    this.DOM.el.style.pointerEvents = "none";
    this.getRect();
    window.addEventListener('resize', () => this.getRect());
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
    if (this.rect.width === 0) {
      const isMobile = window.innerWidth <= 768;
      this.rect.width = isMobile ? 240 : 320;
      this.rect.height = isMobile ? 290 : 380;
    }
  }
}

class ImageTrailVariant7 {
  constructor(container) {
    this.container = container;
    this.images = preloadedMediaElements.map(el => new TrailImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 90; // Spawn new polaroid every 90px of movement
    this.loopActive = false; // Render loop throttle flag

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.visibleImagesCount = 0;
    this.visibleImagesTotal = 9; // Max 9 polaroids onscreen
    this.visibleImagesTotal = Math.min(this.visibleImagesTotal, this.imagesTotal - 1);

    const handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      
      // If the render loop has paused, restart it!
      if (!this.loopActive) {
        this.loopActive = true;
        requestAnimationFrame(() => this.render());
      }
    };
    
    this.container.addEventListener('mousemove', handlePointerMove);
    this.container.addEventListener('touchmove', handlePointerMove);

    const fadeInstructions = () => {
      if (instructionsOverlay) {
        instructionsOverlay.style.opacity = '0';
        setTimeout(() => instructionsOverlay.remove(), 600);
      }
      this.container.removeEventListener('mousemove', fadeInstructions);
      this.container.removeEventListener('touchmove', fadeInstructions);
    };
    this.container.addEventListener('mousemove', fadeInstructions);
    this.container.addEventListener('touchmove', fadeInstructions);

    const initRender = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.lastMousePos = { ...this.mousePos };

      this.loopActive = true;
      requestAnimationFrame(() => this.render());

      this.container.removeEventListener('mousemove', initRender);
      this.container.removeEventListener('touchmove', initRender);
    };
    
    this.container.addEventListener('mousemove', initRender);
    this.container.addEventListener('touchmove', initRender);
    
    this.bindZoomEvents();
  }

  render() {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.2);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.2);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }

    // Performance optimization: only request animation frame if there is still movement or active images animating
    const cacheDist = getMouseDistance(this.cacheMousePos, this.mousePos);
    if (cacheDist > 0.2 || !this.isIdle) {
      this.loopActive = true;
      requestAnimationFrame(() => this.render());
    } else {
      this.loopActive = false;
    }
  }

  showNextImage() {
    if (this.imagesTotal === 0) return;
    ++this.zIndexVal;
    
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;
    img.DOM.el.style.pointerEvents = "auto"; // Enable clicks when visible

    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.65, 1.15);
    const rotationValue = gsap.utils.random(-8, 8);

    const video = img.DOM.el.querySelector("video");
    if (video) {
      video.currentTime = 0;
      video.play().catch(()=>{});
    }

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated()
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue - 0.25,
          rotationZ: 0,
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true
        },
        {
          duration: 0.45,
          ease: 'power2.out',
          scale: scaleValue,
          rotationZ: rotationValue,
          zIndex: this.zIndexVal, // Ensure new image stays on top of previous ones
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true
        },
        0
      );

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images);
      const oldImg = this.images[lastInQueue];
      
      gsap.to(oldImg.DOM.el, {
        duration: 0.5,
        ease: 'power3.inOut',
        opacity: 0,
        scale: scaleValue + 0.3,
        force3D: true,
        onComplete: () => {
          const oldVid = oldImg.DOM.el.querySelector("video");
          if (oldVid) oldVid.pause();
          
          oldImg.DOM.el.style.pointerEvents = "none"; // Disable clicks when hidden
          
          if (this.activeImagesCount === 0) {
            this.isIdle = true;
          }
        }
      });
    }
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }
  
  onImageDeactivated() {
    this.activeImagesCount--;
  }

  bindZoomEvents() {
    this.images.forEach(img => {
      img.DOM.el.addEventListener("click", () => {
        const opacityVal = gsap.getProperty(img.DOM.el, "opacity");
        if (opacityVal > 0.6) {
          const video = img.DOM.el.querySelector("video");
          if (video) return;
          
          if (img.DOM.inner && modalImg) {
            const bgImg = img.DOM.inner.style.backgroundImage;
            const urlMatch = bgImg.match(/url\("?(.+?)"?\)/);
            if (urlMatch && urlMatch[1]) {
              modalImg.src = urlMatch[1];
              const capText = img.DOM.el.querySelector(".polaroid-caption");
              if (modalCaption && capText) {
                modalCaption.textContent = capText.textContent;
              }
              if (imageModal) {
                imageModal.classList.remove("hidden");
              }
            }
          }
        }
      });
    });
  }

  clearAll() {
    this.images.forEach(img => {
      gsap.killTweensOf(img.DOM.el);
      img.DOM.el.style.pointerEvents = "none"; // Disable clicks on clear
      gsap.to(img.DOM.el, {
        duration: 0.35,
        opacity: 0,
        scale: 0.3,
        onComplete: () => {
          const video = img.DOM.el.querySelector("video");
          if (video) video.pause();
        }
      });
    });
    this.visibleImagesCount = 0;
  }

  scatterInitial() {
    // Show 4 random images at random positions to make the album feel populated initially
    const count = Math.min(4, this.imagesTotal);
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        // Calculate a random position in the viewport
        const rx = window.innerWidth * gsap.utils.random(0.15, 0.85);
        const ry = window.innerHeight * gsap.utils.random(0.15, 0.85);
        
        // Update positions
        this.cacheMousePos = { x: rx, y: ry };
        this.mousePos = { x: rx, y: ry };
        
        // Show the image at this coordinate
        this.showNextImage();
      }, i * 200);
    }
  }
}

// 9. EVENT BINDINGS FOR MODAL CLOSE
if (modalClose) {
  modalClose.addEventListener("click", () => {
    if (imageModal) imageModal.classList.add("hidden");
  });
}

if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal || e.target === modalClose) {
      imageModal.classList.add("hidden");
    }
  });
}

// 10. INTERACTIVE INTRO LAMP & DIAGONAL RAINBOW CONTROLLER
const introLamp = document.getElementById("intro-lamp");
const rainbowOverlay = document.getElementById("rainbow-overlay");
const lampScreen = document.getElementById("lamp-screen");
const butterfliesBg = document.getElementById("butterflies-bg");
let introStarted = false;

if (introLamp) {
  introLamp.addEventListener("click", (e) => {
    e.stopPropagation();
    
    // 1. Turn the lamp bulb on
    introLamp.classList.add("lamp-on");
    
    // 2. Transition body to light mode
    document.body.classList.remove("dark-mode");
    
    // 3. Transition directly from lampScreen to introScreen (Page 3)
    setTimeout(() => {
      transitionPages(lampScreen, introScreen, () => {
        if (lampScreen) {
          lampScreen.style.opacity = "0";
          lampScreen.style.visibility = "hidden";
          lampScreen.classList.add("hidden");
        }
        
        // Activate butterflies WebGL background
        if (butterfliesBg) {
          butterfliesBg.classList.add("active");
        }
        
        // Show the main landing screen (Page 3)
        if (introScreen) {
          introScreen.classList.remove("hidden");
          introScreen.style.opacity = "1";
        }
        
        // Reveal the intro name-input card
        const introCard = document.getElementById("intro-card");
        if (introCard) {
          introCard.classList.remove("hidden-opacity");
          introCard.classList.add("show-opacity");
        }
        
        // Start the typewriter animation sequence
        if (!introStarted) {
          introStarted = true;
          setTimeout(typeIntroText, 400);
        }
      }, "fade");
    }, 600);
  });
}
