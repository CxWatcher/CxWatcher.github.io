document.addEventListener('DOMContentLoaded', function() {
  const iframeCount = 8;
  const checkInterval = 120000; 
  let streamersFetched = []; 

  async function fetchStreamers() {
    try {
      console.log('Fetching data from API...');
      
      const response = await fetch('https://kick.com/stream/livestreams/en?page=1&limit=8&subcategory=ices-survival-games&sort=desc');
      
      if (!response.ok) {
        console.error('Failed to fetch data. Status:', response.status);
        return [];
      }

      const data = await response.json();
      console.log('Data fetched successfully:', data);
      return data.data || [];
      
    } catch (error) {
      console.error('Error fetching top streamers:', error);
      return [];
    }
  }

  function updateIframes(streamers) {
    const iframes = document.querySelectorAll('iframe');
    const existingSlugs = new Set();

    iframes.forEach(iframe => {
      const url = new URL(iframe.src);
      const params = new URLSearchParams(url.search);
      if (params.has('user') && params.get('user') !== 'blank') {
        existingSlugs.add(params.get('user'));
      }
    });

    let streamerIndex = 0;
    iframes.forEach((iframe) => {
      const url = new URL(iframe.src);
      const params = new URLSearchParams(url.search);

      if (params.get('user') === 'blank' && streamerIndex < streamers.length) {
        const slug = streamers[streamerIndex].channel.slug;

        if (!existingSlugs.has(slug)) {
          console.log(`Setting iframe to ${slug}`);
          iframe.src = `embed.html?user=${slug}`;
          existingSlugs.add(slug);
          streamerIndex++;
        }
      }
    });

    if (streamerIndex < iframeCount) {
      startPeriodicCheck();
    }
  }

  async function startPeriodicCheck() {
    const intervalId = setInterval(async () => {
      const updatedStreamers = await fetchStreamers();
      if (updatedStreamers.length >= iframeCount) {
        clearInterval(intervalId); 
      }
      updateIframes(updatedStreamers);
    }, checkInterval);
  }

  async function fillIframes() {
    const streamers = await fetchStreamers();
    streamersFetched = streamers; 
    updateIframes(streamers);
  }

  fillIframes();
  console.log('Initial streamers update complete.');
});
