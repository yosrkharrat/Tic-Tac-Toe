let joueurActuel = "X";
const cases = document.querySelectorAll("td");
cases.forEach((caseElement) => {
    caseElement.addEventListener("click", () => {
        if (caseElement.textContent === "") {
            caseElement.textContent = joueurActuel;
            caseElement.classList.add(joueurActuel);
            verifierVictoire();
            changerJoueur();
        }
    });
})
function changerJoueur() {
    // Changer le joueur actuel
    joueurActuel = (joueurActuel === "X") ? "O" : "X";
}
function verifierVictoire() {
    const combinaisonsGagnantes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const combinaison of combinaisonsGagnantes) {
        const [a, b, c] = combinaison;
        if (cases[a].textContent && cases[a].textContent === cases[b].textContent && cases[a].textContent === cases[c].textContent) {
            alert(`Le joueur ${cases[a].textContent} a gagné !`);
            resetJeu();
            return;
        }
    }
    if ([...cases].every(caseElement => caseElement.textContent !== "")) {
        alert("Match nul !");
        resetJeu();
    }
}
function resetJeu() {
    cases.forEach((caseElement) => {
        caseElement.textContent = "";
        caseElement.classList.remove("X", "O");
    });
    joueurActuel = "X"; // Réinitialiser le joueur actuel
}   