const chatIframe = document.getElementById("chat");
const overlayBtn = document.querySelector('.overlay-btn');
let currentstreamer = "iceposeidon";
let checking = false;

// Initialize Video.js player
const video = document.getElementById('amazon-ivs-videojs');
registerIVSTech(videojs);
registerIVSQualityPlugin(videojs);

const player = videojs("amazon-ivs-videojs", {
    techOrder: ["AmazonIVS"],
    controls: true,
    liveui: true,
    bigPlayButton: true,
    controlBar: {
        volumePanel: {
            inline: false
        },
        pictureInPictureToggle: false
    },
    amazonIVS: {
        heartbeat: 500,
        reconnect: true
    }
});

player.enableIVSQualityPlugin();

// Load initial stream
fetch(`https://kick.com/api/v2/channels/${currentstreamer}`)
    .then(response => response.json())
    .then(data => {
        const playback_url = data.playback_url;
        const src = `https://api.codetabs.com/v1/proxy/?quest=${playback_url}`;
        player.src({ type: 'application/x-mpegURL', src });
        player.play();
    })
    .catch(error => console.error(error));

// Overlay button to change stream
overlayBtn.addEventListener('click', function() {
    const userInput = prompt('Enter a kick channel:');
    if (userInput) {
        currentstreamer = userInput;
        retryLoad();
        player.poster('https://i.imgur.com/G2zhTfr.png');
        changeIframeSource(`https://cxwatcher.github.io/chat?user=${userInput}&animate=true&badges=true&commands=true&bots=true&textsize=15px`);
    }
});

// Change iframe source
function changeIframeSource(newSrc) {
    chatIframe.src = newSrc;
}

// Retry loading the stream
function retryLoad() {
    fetch(`https://kick.com/api/v2/channels/${currentstreamer}`)
        .then(response => response.json())
        .then(data => {
            const playback_url = data.playback_url;
            const src = `https://api.codetabs.com/v1/proxy/?quest=${playback_url}`;
            player.src({ type: 'application/x-mpegURL', src });
            player.play();
            setTimeout(() => checking = false, 2000);
        })
        .catch(error => console.error(error));
}

// Reload chat
function reloadChat() {
    chatIframe.src = chatIframe.src;
}

// Check player state and reconnect if offline
function checkPlayerState() {
    if (!checking && player.readyState() === 0) {
        console.log(`Stream Offline, Trying to reconnect to ${currentstreamer}`);
        checking = true;
        retryLoad();
    }
}

// Player event listeners
player.on('pause', function() {
    console.log(`Player Paused`);
    checking = true;
});

player.on('play', function() {
    console.log(`Player Playing`);
    checking = false;
});

// Set intervals for checking player state and reloading chat
setInterval(checkPlayerState, 5000);
setInterval(reloadChat, 30 * 60 * 1000);

// Toggle chat overlay visibility
function toggleFullscreen() {
    const chatIframe = document.getElementById('chat');
    const fullscreenButton = document.getElementById('fullscreen-button');
    if (chatIframe.style.display === 'none') {
        fullscreenButton.src = 'https://i.imgur.com/Zo9GjgJ.png';
        chatIframe.style.display = 'block';
    } else {
        fullscreenButton.src = 'https://i.imgur.com/bf2rPEp.png';
        chatIframe.style.display = 'none';
    }
}
