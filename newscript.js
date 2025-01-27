document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('streamer-search');
    const suggestionsContainer = document.getElementById('suggestions');
    const streamsContainer = document.getElementById('streams-container');

    searchInput.addEventListener('input', function() {
        const query = this.value;
        if (query.length > 0) {
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

    function addStream(slug) {
        const streamElement = document.createElement('div');
        streamElement.className = 'stream';
        streamElement.innerHTML = `
            <video id="video-${slug}" class="video-js vjs-4-3 vjs-big-play-centered" controls autoplay playsinline></video>
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
});
