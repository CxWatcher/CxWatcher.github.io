  const chatIframe = document.getElementById("chat");
  const frame1Iframe = document.getElementById("frame1");
  var iceBtn = document.getElementById('ice');
  var joelBtn = document.getElementById('joel');
  var hyubBtn = document.getElementById('hyub');
  var pakBtn = document.getElementById('DeePak');
  var susBtn = document.getElementById('sus')
  var shoBtn = document.getElementById('sho')
  var samBtn = document.getElementById('Sam')
  var ac7Btn = document.getElementById('ac7')
  var bennyBtn = document.getElementById('benny')
  let currentstreamer = "sam";
  let checking = false;

iceBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/iceposeidon/chatroom";
  frame1Iframe.src = "https://player.kick.com/iceposeidon";
});
  joelBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/kangjoel/chatroom";
  frame1Iframe.src = "https://player.kick.com/kangjoel";
});
  shoBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/shotime/chatroom";
  frame1Iframe.src = "https://player.kick.com/shotime";
});
  hyubBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/hyubsama/chatroom";
  frame1Iframe.src = "https://player.kick.com/hyubsama";
});
  pakBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/deepak/chatroom";
  frame1Iframe.src = "https://player.kick.com/deepak";
});
  susBtn.addEventListener('click', function() {
   chatIframe.src = "https://kick.com/suspendas/chatroom";
  frame1Iframe.src = "https://player.kick.com/suspendas";
  });	
  samBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/sam/chatroom";
  frame1Iframe.src = "https://player.kick.com/sam";
});
  ac7Btn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/ac7ionman/chatroom";
  frame1Iframe.src = "https://player.kick.com/ac7ionman";
});
  bennyBtn.addEventListener('click', function() {
  chatIframe.src = "https://kick.com/bennymack/chatroom";
  frame1Iframe.src = "https://player.kick.com/bennymack";
});
function changeIframeSource(newSrc) {
  chatIframe.src = newSrc;
  chatIframe.contentWindow.location.reload(true);
}

function loadWithDelay() {
  setTimeout(function() {
    retryLoad();
  }, 500); 
}

