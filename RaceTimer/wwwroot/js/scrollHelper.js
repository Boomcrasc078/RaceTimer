window.scrollToBottom = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    var targetScrollTop = element.scrollHeight - element.clientHeight;
    const scrollSpeed = 10; // Justera hastigheten f�r scrollning h�r

    // Definiera scrollStep som en funktion
    const scrollStep = () => {
        const currentScrollTop = element.scrollTop;
        const distance = targetScrollTop - currentScrollTop;

        // Om vi �r n�ra botten, s�tt scrollTop till botten och avsluta
        if (distance <= 1) {
            element.scrollTop = targetScrollTop;
            return;
        }

        // Stega ner�t med scrollSpeed varje frame
        element.scrollTop += scrollSpeed;

        // Anropa n�sta steg av animationen
        requestAnimationFrame(scrollStep);
    };

    // V�nta 10ms innan scrollningen b�rjar
    setTimeout(() => {
        targetScrollTop = element.scrollHeight - element.clientHeight;
        requestAnimationFrame(scrollStep);
    }, 50);
};
