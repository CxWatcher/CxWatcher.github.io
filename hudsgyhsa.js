<script>
  async function fetchTopStreamers() {
    try {
      const response = await fetch('https://kick.com/stream/livestreams/en?page=1&limit=8&subcategory=irl&sort=desc');
      const data = await response.json();
      const iframes = document.querySelectorAll('iframe');
      data.data.forEach((streamer, index) => {
        if (iframes[index]) {
          const slug = streamer.channel.slug;
          iframes[index].src = `embed.html?user=${slug}`;
        }
      });
    } catch (error) {
      console.error('Error fetching top streamers:', error);
    }
  }
  fetchTopStreamers();
</script>
