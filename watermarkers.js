const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('user');
const video = document.getElementById('amazon-ivs-videojs');

if (!user) {
  document.body.innerHTML = '';

  const errorMessage = document.createElement('div');
  errorMessage.innerText = 'ERROR: Incorrect Use\nExample: https://cxwatcher.github.io/embed.html?user=<USERNAME>';
  errorMessage.style.fontSize = '18px';
  document.body.appendChild(errorMessage);
} else {
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

  player.src({ type: 'application/x-mpegURL', src: '1' });

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
    fetch(`https://kick.com/api/v2/channels/${user}`)
      .then(response => response.json())
      .then(data => {
        const playback_url = data.playback_url;
        const src = `https://api.codetabs.com/v1/proxy/?quest=${playback_url}`;
        player.src({ type: 'application/x-mpegURL', src });
        player.play();
      })
      .catch(error => console.error(error));
  }

  function loadWithDelay() {
    setTimeout(function() {
      retryLoad();
    }, 5000);
  }

  if (player.readyState() === 0) {
    loadWithDelay();
  }

  let checking = false;

  function checkPlayerState() {
    if (!checking && player.readyState() === 0) {
      console.log(`Stream Offline, Trying to reconnect to ${user}`);
      checking = true;
      loadWithDelay();
    }
  }

  player.on('pause', function() {
    console.log(`Player Paused`);
    checking = true;
  });

  player.on('play', function() {
    console.log(`Player Playing`);
    checking = false;
  });

  setInterval(checkPlayerState, 5000);
}
