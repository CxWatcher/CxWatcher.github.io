document.addEventListener('DOMContentLoaded', function() {
  const iframeCount = 8; 
  const checkInterval = 120000;
  const currentStreamers = new Set();

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
    let streamerIndex = 0;

    iframes.forEach((iframe) => {
      const src = iframe.src;

      if (src.includes('fetching.html') && streamerIndex < streamers.length) {
        const slug = streamers[streamerIndex].channel.slug;

        if (!currentStreamers.has(slug)) {
          console.log(`Updating iframe ${src} to ${slug}`);
          iframe.src = `embed.html?user=${slug}`;
          currentStreamers.add(slug);
          streamerIndex++;
        }
      }
    });

    if (streamerIndex < iframeCount) {
      console.log('Not all iframes are filled. Starting periodic check.');
      startPeriodicCheck();
    }
  }

  async function startPeriodicCheck() {
    const intervalId = setInterval(async () => {
      console.log('Checking for new streamers...');
      const updatedStreamers = await fetchStreamers();
      
      if (updatedStreamers.length >= iframeCount) {
        clearInterval(intervalId);
        console.log('Enough streamers found. Stopping periodic check.');
      }
      updateIframes(updatedStreamers);
    }, checkInterval);
  }

  async function fillIframes() {
    const streamers = await fetchStreamers();
    updateIframes(streamers);
  }

  fillIframes();
  console.log('Initial streamers update complete.');
});
