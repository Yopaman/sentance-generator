/*Sentance-Generator by Yopaman*/

class Sentance {
    constructor(parts) {
        this.parts = parts
    }

    toString() {
        let sentanceArray = [];
        this.parts.chance.forEach((percent, index) => {
            if (Math.random() < percent/100) {
                sentanceArray.push(this.parts.strings[index])
            }
        });

        return sentanceArray.join(" ")
    }
}

