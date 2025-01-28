const chatIframe = document.getElementById("chat");
const overlayBtn = document.querySelector('.overlay-btn');
const searchInput = document.getElementById('streamer-search');
const suggestionsContainer = document.getElementById('suggestions');
const streamsContainer = document.getElementById('streams-container');
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

// Search for streamers
searchInput.addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        fetchSuggestions(query);
    } else {
        suggestionsContainer.innerHTML = '';
    }
});

function fetchSuggestions(query) {
    fetch('https://search.kick.com/multi_search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-typesense-api-key': 'nXIMW0iEN6sMujFYjFuhdrSwVow3pDQu'
        },
        body: JSON.stringify({
            searches: [{
                preset: 'channel_search',
                q: query
            }]
        })
    })
    .then(response => response.json())
    .then(data => {
        displaySuggestions(data.results[0].hits);
    })
    .catch(error => console.error('Error fetching suggestions:', error));
}

function displaySuggestions(hits) {
    suggestionsContainer.innerHTML = hits.map(hit => `
        <div class="suggestion-item" data-slug="${hit.document.slug}">
            ${hit.document.username}
        </div>
    `).join('');

    document.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            addStream(this.dataset.slug);
            searchInput.value = '';
            suggestionsContainer.innerHTML = '';
        });
    });
}

// Add a new stream
function addStream(slug) {
    const streamElement = document.createElement('div');
    streamElement.className = 'stream';
    streamElement.innerHTML = `
        <video id="video-${slug}" class="video-js vjs-4-3 vjs-big-play-centered" controls autoplay playsinline></video>
        <div id="chat-container">
            <iframe id="chat" src="https://cxwatcher.github.io/chat?user=${slug}&animate=true&badges=true&commands=true&bots=true&textsize=15px" referrerpolicy="no-referrer"></iframe>
        </div>
    `;
    streamsContainer.appendChild(streamElement);

    const player = videojs(`video-${slug}`, {
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

    fetch(`https://kick.com/api/v2/channels/${slug}`)
        .then(response => response.json())
        .then(data => {
            const playback_url = data.playback_url;
            const src = `https://api.codetabs.com/v1/proxy/?quest=${playback_url}`;
            player.src({ type: 'application/x-mpegURL', src });
            player.play();
        })
        .catch(error => console.error(error));
}

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
