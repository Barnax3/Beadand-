function convertNumber() {
    let input = document.getElementById("inputNumber").value.trim();
    let fromBase = parseInt(document.getElementById("fromBase").value);
    let toBase = parseInt(document.getElementById("toBase").value);
    
    if (input === "") {
        alert("Kérlek, adj meg egy számot!");
        return;
    }

    // Próbáljuk konvertálni a számot a megadott forrás számrendszerből
    let decimalValue;
    try {
        decimalValue = parseInt(input, fromBase);
        if (isNaN(decimalValue)) {
            throw new Error("Érvénytelen bemenet!");
        }
    } catch (error) {
        alert("Hibás számformátum a megadott számrendszerben!");
        return;
    }

    // Konvertálás a cél számrendszerbe
    let result = decimalValue.toString(toBase).toUpperCase();
    
    // Kiírjuk az eredményt
    document.getElementById("result").textContent = result;
}

function copyToClipboard() {
    let resultText = document.getElementById("result").textContent;
    if (resultText === "Eredmény itt jelenik meg" || resultText === "") {
        alert("Nincs mit másolni!");
        return;
    }

    navigator.clipboard.writeText(resultText)
        .then(() => alert("Eredmény másolva!"))
        .catch(err => alert("Másolás sikertelen!"));
}