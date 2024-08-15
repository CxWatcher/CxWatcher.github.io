document.addEventListener('DOMContentLoaded', async function() {
  const iframeCount = 8; 
  const currentStreamers = new Set();
  const eliminated = new Set(['cobbruvs', 'crazytawn']);

  async function fetchStreamers() {
    try {
      console.log('Fetching data from API...');
      
      const response = await fetch('https://kick.com/stream/livestreams/en?page=1&limit=30&subcategory=hunger-games&sort=desc');
      
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

      if (src.includes('fetching.html')) {
        while (streamerIndex < streamers.length && eliminated.has(streamers[streamerIndex].channel.slug)) {
          console.log(`Skipping eliminated streamer: ${streamers[streamerIndex].channel.slug}`);
          streamerIndex++;
        }

        if (streamerIndex < streamers.length) {
          const slug = streamers[streamerIndex].channel.slug;

          if (!currentStreamers.has(slug)) {
            console.log(`Updating iframe ${src} to ${slug}`);
            iframe.src = `embed.html?user=${slug}`;
            currentStreamers.add(slug);
            streamerIndex++;
          }
        }
      }
    });

    if (streamerIndex < iframeCount) {
      console.log('Not all iframes are filled. Fewer streamers than expected.');
    }
  }

  async function fillIframes() {
    const streamers = await fetchStreamers();
    updateIframes(streamers);
  }

  await fillIframes();
  console.log('Initial streamers update complete.');
});
