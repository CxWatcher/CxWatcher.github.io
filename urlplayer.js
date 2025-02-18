const urlParams = new URLSearchParams(window.location.search);
const base64Url = urlParams.get('url');
const video = document.getElementById('amazon-ivs-videojs');

if (!base64Url) {
  document.body.innerHTML = '';

  const errorMessage = document.createElement('div');
  errorMessage.innerText =
    'ERROR: Incorrect Use\nExample: https://cxwatcher.github.io/embed.html?url=<BASE64_ENCODED_URL>';
  errorMessage.style.fontSize = '18px';
  document.body.appendChild(errorMessage);
} else {
  try {
    // Decode the Base64 string. If your string is URL-encoded, use decodeURIComponent first.
    // const decodedBase64 = decodeURIComponent(base64Url);
    const decodedUrl = atob(base64Url);
    console.log("Decoded URL:", decodedUrl);

    // Append the proxy to the decoded URL.
    const proxyUrl = `https://api.codetabs.com/v1/proxy/?quest=${decodedUrl}`;
    console.log("Proxy URL:", proxyUrl);

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

    // Use the proxyUrl as the source.
    player.src({ type: 'application/x-mpegURL', src: proxyUrl });

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
      player.src({ type: 'application/x-mpegURL', src: proxyUrl });
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
    errorMessage.innerText = 'ERROR: Invalid Base64 URL Provided';
    errorMessage.style.fontSize = '18px';
    document.body.appendChild(errorMessage);
    console.error("Decoding error:", error);
  }
}
