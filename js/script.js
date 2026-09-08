const viewport = document.getElementById('viewport');
  const image = document.getElementById('targetImage');

  viewport.addEventListener('mousemove', (e) => {
    const rect = viewport.getBoundingClientRect();
    
    // Get cursor position inside the viewport (0 to 1 ratio)
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    // Calculate maximum distance the image can move
    const maxShiftX = image.offsetWidth - rect.width;
    const maxShiftY = image.offsetHeight - rect.height;

    // Only move if the image is actually larger than the container
    const translateX = maxShiftX > 0 ? -xRatio * maxShiftX : 0;
    const translateY = maxShiftY > 0 ? -yRatio * maxShiftY : 0;

    image.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });