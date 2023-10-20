const video = document.getElementById("videoElement");
const togglePlayBtn = document.getElementById("togglePlay");
const rewindBtn = document.getElementById("rewind");
const forwardBtn = document.getElementById("forward");

togglePlayBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        togglePlayBtn.textContent = "Pause";
    } else {
        video.pause();
        togglePlayBtn.textContent = "Play";
    }
});

rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});

forwardBtn.addEventListener("click", () => {
    video.currentTime += 10;
});

const cover = document.getElementById("cover");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  video.play();
  togglePlayBtn.textContent = "Pause";
  
  cover.style.transition = "opacity 1s";
  cover.style.opacity = "0";
  setTimeout(() => {
      cover.style.display = "none";
      notesContainer.style.display = "block";  // Show the notes
  }, 1000);
});


const progressBar = document.getElementById("progressBar");

video.addEventListener("timeupdate", () => {
    let percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = percentage + "%";
});

// Optional: Click on the progress bar to seek
document.querySelector('.progress-container').addEventListener('click', (e) => {
    let progress = (e.clientX - e.target.offsetLeft) / e.target.offsetWidth;
    video.currentTime = progress * video.duration;
});

const notesContainer = document.getElementById("notesContainer");
const closeNotesBtn = document.getElementById("closeNotes");
let isDragging = false, startX, startY, initialOffsetX, initialOffsetY;

// Function to close the notes container
closeNotesBtn.addEventListener("click", () => {
    notesContainer.style.display = "none";
});

// Make the notes container draggable
notesContainer.querySelector('.notes-header').addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialOffsetX = notesContainer.offsetLeft;
    initialOffsetY = notesContainer.offsetTop;
    document.addEventListener("mousemove", moveNotes);
    document.addEventListener("mouseup", stopMoveNotes);
});

function moveNotes(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    notesContainer.style.left = initialOffsetX + dx + "px";
    notesContainer.style.top = initialOffsetY + dy + "px";
}

function stopMoveNotes() {
    document.removeEventListener("mousemove", moveNotes);
    document.removeEventListener("mouseup", stopMoveNotes);
    isDragging = false;
}
