  const chatIframe = document.getElementById("chat");
  const overlayBtn = document.querySelector('.overlay-btn');
  var iceBtn = document.getElementById('ice');
  var joelBtn = document.getElementById('joel');
  var homelessBtn = document.getElementById('homeless');
  var pakBtn = document.getElementById('DeePak');
  var susBtn = document.getElementById('sus')
  var shoBtn = document.getElementById('sho')
  let currentstreamer = "iceposeidon";
  let checking = false;

overlayBtn.addEventListener('click', function() {
  const userInput = prompt('Enter a kick channel:');
  if (userInput) {
    currentstreamer = userInput;
    retryLoad();
    player.poster('https://i.imgur.com/G2zhTfr.png'); 
    changeIframeSource(`https://kick.com/${currentstreamer}/chatroom`);
  }
});


function changeIframeSource(newSrc) {
  chatIframe.src = newSrc;
  chatIframe.contentWindow.location.reload(true);
}

function retryLoad() {
  fetch(`https://kick.com/api/v2/channels/${currentstreamer}`)
    .then(response => response.json())
    .then(data => {
      const playback_url = data.playback_url;
      const src = `https://corsproxy.io/?${playback_url}`;
      player.src({ type: 'application/x-mpegURL', src });
      player.play();
	  setTimeout(() => checking = false, 2000);
    })
    .catch(error => console.error(error));
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
