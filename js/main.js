let addButton = document.querySelector("#bouton-plus"),
    partsNumber = 1

addButton.addEventListener("click", () => {
    partsNumber++

    let sentanceLabel = document.createElement("label"),
        sentanceInput = document.createElement("input"),
        chanceLabel = document.createElement("label"),
        chanceInput = document.createElement("input")

    sentanceLabel.setAttribute("for", "phrase" + partsNumber)
    sentanceInput.setAttribute("id", "phrase" + partsNumber)
    chanceLabel.setAttribute("for", "chance" + partsNumber)
    chanceInput.setAttribute("id", "chance" + partsNumber)
    chanceInput.setAttribute("type", "number")
    chanceInput.setAttribute("value", 100)

    sentanceLabel.appendChild(document.createTextNode("partie " + partsNumber + " "))
    chanceLabel.appendChild(document.createTextNode(" pourcentage de chance "))


    let form = document.querySelector("#form")

    form.appendChild(sentanceLabel)
    form.appendChild(sentanceInput)
    form.appendChild(chanceLabel)
    form.appendChild(chanceInput)
    form.appendChild(document.createElement("br"))

});