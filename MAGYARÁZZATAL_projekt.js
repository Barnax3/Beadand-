function convertNumber() {
    let input = document.getElementById("inputNumber").value.trim();//Felhaszáló átsl beírt adat
    let fromBase = parseInt(document.getElementById("fromBase").value);//Forrás számredszer
    let toBase = parseInt(document.getElementById("toBase").value);//Cél számredszer
    
    if (input === "") {//Ha nics adat akkor hibát ad ki
        alert("Kérlek, adj meg egy számot!");
        return;
    }

    let decimalValue;
    try {
        decimalValue = parseInt(input, fromBase);//Megprobálja a beírt számot 10 számredszerbe átváltani
        if (isNaN(decimalValue)) {//Ha van érvénytelen szám pl 356ssl akkor
            throw new Error("Érvénytelen bemenet!");
        }
    } catch (error) {
        alert("Hibás számformátum a megadott számrendszerben!");
        return;
    }

    // Konvertálás a cél számrendszerbe és nagybetővé teszi a 16 számrendszernél
    let result = decimalValue.toString(toBase).toUpperCase();
    
    // Kiírjuk az eredményt
    document.getElementById("result").textContent = result;
}

function copyToClipboard() {//Ez a rész csak a vágólaspra másolja az erdedményt
    let resultText = document.getElementById("result").textContent;
    if (resultText === "Eredmény itt jelenik meg" || resultText === "") {//Ha nics eredmény akkor hiba kiirás
        alert("Nincs mit másolni!");
        return;
    }

    navigator.clipboard.writeText(resultText)//vágólapra másolja az erdemnény
        .then(() => alert("Eredmény másolva!"))
        .catch(err => alert("Másolás sikertelen!"));
}