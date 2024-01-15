 let checkingg = false;
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
  
  player.src({ type: 'application/x-mpegURL', src: '1' });

  fetch('https://kick.com/api/v2/channels/kimmee')
    .then(response => response.json())
    .then(data => {
      const playback_url = data.playback_url;
      const src = `${playback_url}`;
      player.src({ type: 'application/x-mpegURL', src });
      player.play();
    })
    .catch(error => console.error(error));
	
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
  
function changeIframeSource(newSrc) {
  chatIframe.src = newSrc;
  chatIframe.contentWindow.location.reload(true);
}

function retryLoad() {
  fetch(`https://kick.com/api/v2/channels/kimmee`)
    .then(response => response.json())
    .then(data => {
      const playback_url = data.playback_url;
      const src = `${playback_url}`;
      player.src({ type: 'application/x-mpegURL', src });
      player.play();
    setTimeout(() => checkingg = false, 2000);
    })
    .catch(error => console.error(error));
}
function loadWithDelay() {
  setTimeout(function() {
    retryLoad();
  }, 500); 
}

function checkPlayerState() {
  if (!checkingg && player.readyState() === 0) {
    console.log(`Stream Offline, Trying to reconnect to ${currentstreamer}`);
    checkingg = true;
    loadWithDelay();
  }
}

player.on('pause', function() {
  console.log(`Player Paused`);
  checkingg = true;
});

player.on('play', function() {
  console.log(`Player Playing`);
  checkingg = false;
});

setInterval(checkPlayerState, 5000);
