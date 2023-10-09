    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var isMobile = screenWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      alert("Hey, This website may be a little weird on mobile devices, for a better experience please move to a pc.");
    }
