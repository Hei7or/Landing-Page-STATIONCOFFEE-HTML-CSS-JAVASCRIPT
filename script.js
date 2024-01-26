
function toggleReceitas() {
var receitasSection = document.getElementById("esconder");

if (receitasSection.style.display === "none" || receitasSection.style.display === "") {
    receitasSection.style.display = "block"; 
}
else {
      receitasSection.style.display = "none";
}
}
