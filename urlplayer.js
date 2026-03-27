const urlParams = new URLSearchParams(window.location.search);
const urlParam = urlParams.get('url');
const video = document.getElementById('amazon-ivs-videojs');

if (!urlParam) {
  document.body.innerHTML = '';

  const errorMessage = document.createElement('div');
  errorMessage.innerText =
    'ERROR: Incorrect Use\nExample: https://cxwatcher.github.io/play.html?url=<ENCODED_OR_DIRECT_URL>';
  errorMessage.style.fontSize = '18px';
  document.body.appendChild(errorMessage);
} else {
  try {
    let targetUrl = urlParam;

    // If the URL doesn't start with http, assume it's Base64 encoded and decode it
    if (!urlParam.startsWith('http')) {
      try {
        targetUrl = atob(urlParam);
      } catch (e) {
        console.warn("Could not decode as base64, attempting to use raw input as URL.");
      }
    }

    console.log("Target Stream URL:", targetUrl);

    // Initialize the Amazon IVS Player
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
    const workerProxy = 'https://your-worker-name.your-subdomain.workers.dev/';
    // Use the direct targetUrl instead of the proxy
    player.src({ type: 'application/x-mpegURL', src: workerProxy + targetUrl });

    function toggleFullscreen() {
      const videoContainer = document.getElementById('video-container');
      videoContainer.classList.toggle('fullscreen');
      const fullscreenButton = document.getElementById('fullscreen-button');
      if (videoContainer.classList.contains('fullscreen')) {
        fullscreenButton.src = 'https://i.imgur.com/bf2rPEp.png';
      } else {
        fullscreenButton.src = 'https://i.imgur.com/Zo9GjgJ.png';
      }
    }

    function retryLoad() {
      // Use the direct targetUrl for retries as well
      player.src({ type: 'application/x-mpegURL', src: workerProxy + targetUrl });
      player.play();
    }

    function loadWithDelay() {
      setTimeout(function () {
        retryLoad();
      }, 5000);
    }

    if (player.readyState() === 0) {
      loadWithDelay();
    }

    let checking = false;

    function checkPlayerState() {
      if (!checking && player.readyState() === 0) {
        console.log(`Stream Offline, Trying to reconnect`);
        checking = true;
        loadWithDelay();
      }
    }

    player.on('pause', function () {
      console.log(`Player Paused`);
      checking = true;
    });

    player.on('play', function () {
      console.log(`Player Playing`);
      checking = false;
    });

    setInterval(checkPlayerState, 5000);

  } catch (error) {
    document.body.innerHTML = '';

    const errorMessage = document.createElement('div');
    errorMessage.innerText = 'ERROR: An issue occurred while initializing the player.';
    errorMessage.style.fontSize = '18px';
    document.body.appendChild(errorMessage);
    console.error("Player initialization error:", error);
  }
}
