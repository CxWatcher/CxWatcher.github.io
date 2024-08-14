document.addEventListener('DOMContentLoaded', function() {
  const iframeCount = 8;
  const checkInterval = 120000;

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

  async function updateIframes(streamers) {
    const iframes = document.querySelectorAll('iframe');
    const targetIframes = Array.from(iframes).slice(0, iframeCount);
    const existingSlugs = new Set();

    targetIframes.forEach(iframe => {
      const url = new URL(iframe.src);
      const params = new URLSearchParams(url.search);
      if (params.has('user')) {
        existingSlugs.add(params.get('user'));
      }
    });

    streamers.forEach((streamer, index) => {
      if (index >= iframeCount) return;
      const slug = streamer.channel.slug;
      
      if (!existingSlugs.has(slug)) {
        if (index < targetIframes.length) {
          console.log(`Setting iframe ${index} to ${slug}`);
          targetIframes[index].src = `embed.html?user=${slug}`;
          existingSlugs.add(slug);
        }
      }
    });
  }

  async function fillIframes() {
    const streamers = await fetchStreamers();
    if (streamers.length < iframeCount) {
      const intervalId = setInterval(async () => {
        const updatedStreamers = await fetchStreamers();
        if (updatedStreamers.length >= iframeCount) {
          clearInterval(intervalId);
        }
        await updateIframes(updatedStreamers);
      }, checkInterval);
    } else {
      await updateIframes(streamers);
    }
  }

  fillIframes();
  console.log('Initial streamers update complete.');
});
