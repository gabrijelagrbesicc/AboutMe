// Kada se stranica učita, prikazat ćemo poruku i dugme
window.onload = function() {
    var messageSection = document.getElementById('messageSection');
    
    // Prikazivanje sekcije sa porukom i dugmetom
    messageSection.style.display = 'block';

    // Dodajemo funkcionalnost dugmetu
    document.getElementById('githubButton').addEventListener('click', function() {
        // Otvori GitHub profil u novom tabu
        window.open("https://github.com/gabrijelagrbesicc", "_blank");
    });
}
