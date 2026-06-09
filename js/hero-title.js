(function () {
    function runTitleBounce() {
        var title = document.querySelector('.hero-title');
        if (!title) {
            return;
        }

        title.style.transition = 'none';
        title.style.opacity = '0';

        var start = performance.now();
        var duration = 1400;

        function frame(now) {
            var elapsed = now - start;

            if (elapsed >= duration) {
                title.style.transform = '';
                title.style.opacity = '1';
                return;
            }

            var progress = elapsed / duration;
            var damp = 1 - progress;
            var bounce = Math.abs(Math.sin(progress * Math.PI * 3.2)) * damp * 10;

            title.style.opacity = String(Math.min(1, progress * 5));
            title.style.transform = 'translateY(' + (-bounce).toFixed(2) + 'px)';
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runTitleBounce);
    } else {
        runTitleBounce();
    }
})();
