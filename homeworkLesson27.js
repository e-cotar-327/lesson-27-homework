// Calculatorul Anei V.3
//Pasul 1 Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
const facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Pasul 2 Creați 2 array-uri goale pentru “tips” și “totals”
const tips = [];
const totals = [];

// Pasul 3 Utilizați funcția „calcTip” pe care am scris-o înainte (nu este nevoie să repetați) pentru a calcula bacșișurile și valorile totale (factură + bacșiș) pentru fiecare valoare din array-ul de facturi. Utilizați ciclul for pentru a efectua cele 10 calcule!
function calcTip(factura) {
    let tip;
    factura >= 50 && factura <= 300 ? tip = 0.15 : tip = 0.2;
    return factura * tip;
}

for (let i = 0; i < facturi.length; i++) {
    const tip = calcTip(facturi[i]);
    tips.push(tip);
    totals.push(tip + facturi[i]);
}

// Pasul 4 Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. Această funcție calculează media tuturor numerelor din array-ul primit. Apelați funcția cu array-ul „totals”.
function calcAverage(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    // Alternativ pentru for loop - reduce()
    // let suma = arr.reduce((acc, curr) => acc + curr, 0);
    
    return suma / arr.length;
}

const mediaTotal = calcAverage(totals);
console.log(`Media totală este: ${mediaTotal}`);


// - - - - - - - - - Calcularea economiilor și a dobânzii compuse - - - - - - - - - - - //
function calculateInterest(principal, rate, years) {
    let amount = principal;
    for (let i = 0; i < years; i++) {
        amount += (amount * rate / 100);
    }
    return amount;
}

function calculateMonthlyContribution(contribution, rate, years) {
    let amount = 0;
    for (let i = 0; i < years * 12; i++) {
        amount += contribution;
        amount += (amount * rate / 100 / 12);
    }
    return amount;
}

function printSavings(name, principal, rate, years, monthlyContribution) {
    const interest = calculateInterest(principal, rate, years);
    const contributions = calculateMonthlyContribution(monthlyContribution, rate, years);
    const total = interest + contributions;
    console.log(`${name}, suma totală pe care o vei avea în cont după ${years} ani este ${total.toFixed(2)}.`);
}

printSavings('Ioana', 1000, 5, 10, 50);

