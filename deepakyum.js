  const chatIframe = document.getElementById("chat");
  var iceBtn = document.getElementById('ice');
  var joelBtn = document.getElementById('joel');
  var hyubBtn = document.getElementById('hyub');
  var pakBtn = document.getElementById('DeePak');
  var susBtn = document.getElementById('sus')
  var shoBtn = document.getElementById('sho')
  var samBtn = document.getElementById('Sam')
  var ac7Btn = document.getElementById('ac7')
  var bennyBtn = document.getElementById('benny')
  let currentstreamer = "garydavid";
  let checking = false;
  iceBtn.addEventListener('click', function() {
  currentstreamer = "iceposeidon";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/iceposeidon/chatroom");
});
  joelBtn.addEventListener('click', function() {
  currentstreamer = "kangjoel";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/imjoel3004/chatroom");
});
  shoBtn.addEventListener('click', function() {
  currentstreamer = "shotime";
  retryLoad();
  player.poster('https://i.imgur.com/UV54Dao.png');
  changeIframeSource("https://kick.com/shotime/chatroom");
});
  hyubBtn.addEventListener('click', function() {
  currentstreamer = "hyubsama";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/slightlyhomeless/chatroom");
});
  pakBtn.addEventListener('click', function() {
  currentstreamer = "deepak";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/deepak/chatroom");
});
  susBtn.addEventListener('click', function() {
  currentstreamer = "suspendas";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/suspendas/chatroom");
  });	
  samBtn.addEventListener('click', function() {
  currentstreamer = "sam";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png');
  changeIframeSource("https://kick.com/sam/chatroom");
  });	
  ac7Btn.addEventListener('click', function() {
  currentstreamer = "ac7ionman";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png'); 
  changeIframeSource("https://kick.com/ac7ionman/chatroom");
});
  bennyBtn.addEventListener('click', function() {
  currentstreamer = "bennymack";
  retryLoad();
  player.poster('https://i.imgur.com/jhaOd2e.png'); 
  changeIframeSource("https://kick.com/bennymack/chatroom");
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
      const src = `${playback_url}`;
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
