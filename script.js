// Play background music
function playMusic() {
    const music = document.getElementById("bg-music");
    if (music) {
      music.volume = 0.3;
      music.play().catch(() => {
        // In case autoplay is blocked; optional user interaction fallback
        console.log("User interaction required to play audio.");
      });
    }
  }
  
  // Load specific page content dynamically
  function loadPage(page) {
    fetch(`${page}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById("app").innerHTML = html;
        if (page === "gallery") initGallery();
        if (page === "home") initButtons();
      });
  }
  
  // Run on initial page load
  window.onload = () => {
    loadPage("home");
    playMusic(); // Optional initial attempt
  };
  
  // Home Page Button Logic
  function initButtons() {
    const yesMeme = "yes.jpg";
    const noMemes = ["goli.jpg", "abey.jpg", "swarg.jpg"];
    let noClickCount = 0;
  
    // YES button
    window.sayYes = function () {
      playMusic();
  
      const gifElement = document.getElementById("gif");
      const heading = document.getElementById("heading");
      const buttons = document.querySelector(".buttons");
      const yesContainer = document.getElementById("yesContainer");
  
      gifElement.style.display = "none";
      heading.style.display = "none";
      buttons.style.display = "none";
  
      yesContainer.innerHTML = `
        <img src="${yesMeme}" alt="Thank You Meme" class="thank-you-img" width="300px" />
        <p>Aapki aur humari dosti 30 February tak! 💖</p>
        <button class="arrow" onclick="loadPage('message')">Let’s Go ➜</button>
      `;
      yesContainer.style.display = "block";
    };
  
    // NO button
    window.sayNo = function () {
      playMusic();
  
      const gifElement = document.getElementById("gif");
      if (noClickCount < noMemes.length) {
        gifElement.src = noMemes[noClickCount];
        noClickCount++;
      } else {
        gifElement.src = noMemes[noMemes.length - 1];
      }
    };
  }
  
  // Gallery Page Logic
  function initGallery() {
    const captions = [
      "cutieee 💖",
      "us >> 🫶",
      "sundar ladko ko tadte huye ",
      "",
      "aise hi meri baat sunegi toh acche photo aate rahenge ",
      "",
      "sundari🤌🤌🤌",
      ""
    ];
  
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const captionBox = document.getElementById("captionBox");
  
    function showSlide(n) {
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      slides[n].style.display = "block";
      if (n < captions.length - 1) {
        captionBox.textContent = captions[n];
        captionBox.style.display = "block";
      } else {
        captionBox.style.display = "none";
      }
    }
  
    window.changeSlide = function (dir) {
      slideIndex += dir;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      showSlide(slideIndex);
    };
  
    showSlide(slideIndex);
  }
  