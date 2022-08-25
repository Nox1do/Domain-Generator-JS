
//Arrays para generar Domains
let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let dots = [".com", ".lol", ".gg", ".app"]

//for loop nested para mezclar los items de los arrays
for (let i = 0; i < adjs.length; i++) { // bucle padre

    for (let j = 0; j < pronouns.length; j++) {

        for (let k = 0; k < nouns.length; k++) {

            for (let l = 0; l < dots.length; l++) {
                console.log(pronouns[i] + adjs[j] + nouns[k] + dots[l]);

            }
        }
    }
}
