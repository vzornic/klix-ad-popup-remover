let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return

        for (let i = 0; i < mutation.addedNodes.length; i++) {

            if (mutation.addedNodes[i].className === 'fc-ab-root') {
                let overlay = mutation.addedNodes[i];
                overlay.remove();
                document.body.style.overflow = 'auto';
                console.log('Removed popup');
                observer.disconnect();
                console.log('Disconnected observer');
            }
        }
    })
})

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
});