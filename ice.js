function changeIframeSrc() {
    var iframe = document.getElementById('frame1');
    var newSrc = 'https://player.kick.com/sam';
    iframe.src = newSrc;
}
changeIframeSrc()
	
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


function loadWithDelay() {
  setTimeout(function() {
    retryLoad();
  }, 500); 
}

function checkPlayerState() {
  if (!checking && player.readyState() === 0) {
    console.log(`Stream Offline, Trying to reconnect to ${currentstreamer}`);
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
