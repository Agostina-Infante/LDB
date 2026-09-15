document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('viewport');
    const image = document.getElementById('targetImage');

    if (viewport && image) {
        const handleMove = (clientX, clientY) => {
            const rect = viewport.getBoundingClientRect();
            
            const xRatio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const yRatio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

            const maxShiftX = image.offsetWidth - rect.width;
            const maxShiftY = image.offsetHeight - rect.height;

            const translateX = maxShiftX > 0 ? -xRatio * maxShiftX : 0;
            const translateY = maxShiftY > 0 ? -yRatio * maxShiftY : 0;

            image.style.transform = `translate(${translateX}px, ${translateY}px)`;
        };

        // Desktop mouse movement
        viewport.addEventListener('mousemove', (e) => {
            handleMove(e.clientX, e.clientY);
        });

        // Mobile touch movement
        viewport.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });
    }
});