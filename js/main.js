let addButton = document.querySelector("#bouton-plus"),
    minusButton = document.querySelector("#bouton-moins"),
    createButton = document.querySelector("#creer-phrase"),
    partsNumber = 1

addButton.addEventListener("click", () => {
    partsNumber++

    let sentanceLabel = document.createElement("label"),
        sentanceInput = document.createElement("input"),
        chanceLabel = document.createElement("label"),
        chanceInput = document.createElement("input")


    sentanceLabel.setAttribute("for", "phrase" + partsNumber)
    sentanceLabel.setAttribute("class", partsNumber)
    sentanceInput.setAttribute("id", "phrase" + partsNumber)
    sentanceInput.setAttribute("class", partsNumber)
    chanceLabel.setAttribute("for", "chance" + partsNumber)
    chanceLabel.setAttribute("class", partsNumber)
    chanceInput.setAttribute("id", "chance" + partsNumber)
    chanceInput.setAttribute("class", partsNumber)
    chanceInput.setAttribute("type", "number")
    chanceInput.setAttribute("value", 100)
    chanceInput.setAttribute("min", 0)
    chanceInput.setAttribute("max", 100)

    sentanceLabel.appendChild(document.createTextNode("partie " + partsNumber + " "))
    chanceLabel.appendChild(document.createTextNode(" pourcentage de chance "))


    let form = document.querySelector("#form")

    form.appendChild(sentanceLabel)
    form.appendChild(sentanceInput)
    form.appendChild(chanceLabel)
    form.appendChild(chanceInput)
    form.appendChild(document.createElement("br"))
})

minusButton.addEventListener("click", () => {
    if (partsNumber > 1) {
        let toRemove = document.getElementsByClassName(partsNumber)
        document.getElementById("form").removeChild(document.getElementById("form").lastChild)
        while(toRemove[0]) {
            toRemove[0].parentNode.removeChild(toRemove[0])
        }
        partsNumber--
    }
})

createButton.addEventListener("click", () => {
    let form = document.querySelector("#form"),
        resultZone = document.querySelector("#phrase"),
        partsArray = [],
        chanceArray = [],
        formChildrens = form.children

    for (let i = 0; i < formChildrens.length; i++) {
        if (formChildrens[i].tagName == "INPUT") {
            if (formChildrens[i].id.startsWith("phrase")) {
                partsArray.push(formChildrens[i].value)
            } else if (formChildrens[i].id.startsWith("chance")) {
                chanceArray.push(parseInt(formChildrens[i].value))
            }
        }
    }

    let phrase = new Sentance({
        strings: partsArray,
        chance: chanceArray
    })

    resultZone.value = phrase.toString()

})

