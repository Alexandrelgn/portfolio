document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // 1. Fonction pour ouvrir la modale
    galleryImages.forEach(img => {
        img.onclick = function(){
            lightbox.style.display = "block";
            // Charge la source haute résolution depuis l'attribut data-full-src
            const fullSrc = this.getAttribute('data-full-src') || this.src;
            lightboxImg.src = fullSrc;
            
            // Affiche la description (alt) de l'image
            lightboxCaption.innerHTML = this.alt;
        }
    });

    // 2. Fonction pour fermer la modale (bouton X)
    closeBtn.onclick = function() {
        lightbox.style.display = "none";
    }

    // 3. Fermeture si l'utilisateur clique en dehors de l'image
    lightbox.onclick = function(event) {
        // S'assurer qu'on ne ferme que si l'on clique sur le fond ou le bouton, pas l'image
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    }

    // 4. Fermeture avec la touche Échap
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && lightbox.style.display === "block") {
            lightbox.style.display = "none";
        }
    });
});