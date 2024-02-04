document.getElementById("ExpandableButton").addEventListener("click", function() {
    var text = document.getElementById("ExpandableText");
    var button = document.getElementById("ExpandableButton");

    if (button.innerHTML === "Ausklappen") {
        text.style.webkitLineClamp = "inherit"; // Entfernt die Begrenzung der Zeilenanzahl, um den gesamten Text anzuzeigen.
        button.innerHTML = "Einklappen";
    } else {
        text.style.webkitLineClamp = "3"; // Begrenzt den Text wieder auf die ursprünglichen Zeilen.
        button.innerHTML = "Ausklappen";
    }
});
