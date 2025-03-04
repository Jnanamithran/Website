document.getElementById("openNav").addEventListener("click", function() {
    document.getElementById("navContainer").style.display = "block";
    document.getElementById("sideNav").classList.add("active");
});

document.getElementById("closeNav").addEventListener("click", function() {
    document.getElementById("sideNav").classList.remove("active");
    setTimeout(() => {
        document.getElementById("navContainer").style.display = "none";
    }, 400); // Matches transition time
});
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("backgroundMusic");
    let soundOnBtn = document.getElementById("soundOn");
    let soundOffBtn = document.getElementById("soundOff");

    // Check previous sound state (default: unmuted)
    let isMuted = localStorage.getItem("muted") === "true";
    audio.volume = 0.5;
    audio.muted = isMuted;

    function updateButtons() {
        soundOnBtn.classList.toggle("hidden", audio.muted);
        soundOffBtn.classList.toggle("hidden", !audio.muted);
    }

    function toggleSound(mute) {
        audio.muted = mute;
        localStorage.setItem("muted", mute);
        updateButtons();
        if (!mute) audio.play();
    }

    soundOffBtn.addEventListener("click", () => toggleSound(false));
    soundOnBtn.addEventListener("click", () => toggleSound(true));

    // Try to autoplay audio (handle restrictions)
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.addEventListener("click", firstInteraction, { once: true });
        });
    }

    function firstInteraction() {
        audio.play();
    }

    updateButtons();
});
