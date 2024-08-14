  document.addEventListener('DOMContentLoaded', async function() {
    async function fetchTopStreamers() {
      try {
        console.log('Fetching data from API...');
        
        const response = await fetch('https://kick.com/stream/livestreams/en?page=1&limit=8&subcategory=ices-survival-games&sort=desc');
        
        if (!response.ok) {
          console.error('Failed to fetch data. Status:', response.status);
          return;
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
        
        const iframes = document.querySelectorAll('iframe');
        console.log('Found iframes:', iframes);
        
        if (data.data.length > iframes.length) {
          console.warn('Warning: More streamers than iframes available.');
        }
        
        data.data.forEach((streamer, index) => {
          if (index < iframes.length) {
            const slug = streamer.channel.slug;
            console.log(`Setting stream 1 ${index} to ${slug}`);
            iframes[index].src = `embed.html?user=${slug}`;
          } else {
            console.warn(`No iframe available for streamer ${index}`);
          }
        });
        
      } catch (error) {
        console.error('Error fetching top streamers:', error);
      }
    }
    
    await fetchTopStreamers();
    console.log('Streamers update complete.');
  });
