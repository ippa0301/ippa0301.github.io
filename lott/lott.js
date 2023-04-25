const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById ("input_antal_vinster")

const vinster = [
    "scrub mommy",
    "mommy massage",
    "u lose L bozo",
    "mommy slippers",
    "massage från putin",
    "100 000 kr skadestånd",
    "trip to mommy town",
    "trip to mommy castle",
    "skäggig mommy",
    "måltid från brittney spears",
    "pepsi max",
    "grillad bäbis",
    "mommy oil",
    "koka kola",
    "feet pic",
    "alloush kiss",
    "mommy treatment",
    "anton i maid  dress",
    "17 spänn",
    "slott i ryssland",
    "biljett till travis scott konsär",
    "4 discord mods",
    "2 ekittens",
    "minecraft server",
    "resa till ukraina",
    "atom bomb",
    "siberia",
    "4 lik från medeltiden",
    "golden shower",
    "ginger disease",
    "en prinskorv",
    "en extra njure",
    "mommy milk",
    "mommy milkers",
    "mommy smash",
    "andrew tates bugatti",
    "+ 10 hjärnceller",
    "formassage från trump",
    "minecraft steve stripper",
    "bodypillow av minion",
    "mommy bathwater",
    "sweaty socks",


]

function slumpaClick(){

    let vinst = `<h3> Dina Vinster </h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    for (i=0; i<int_antalv; i++) {
        let slumptal = Math.floor(Math.random() *42)
        let tvinst = vinster[slumptal] ;
        vinst += `<p>${tvinst}</p>`
    }

    svar_div.innerHTML = vinst;
}