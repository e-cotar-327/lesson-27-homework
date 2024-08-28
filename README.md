Exerciţiul: Ana’s calculator v.3

Să îmbunătățim și mai mult calculatorul de bacșișuri al Anei, de data aceasta folosind cicluri!
1. Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
2. Creați 2 array-uri goale pentru “tips” și “totals”
3. Utilizați funcția „calcTip” pe care am scris-o înainte (nu este nevoie să repetați) pentru a calcula bacșișurile și valorile totale (factură + bacșiș) pentru fiecare valoare din array-ul de facturi. Utilizați ciclul for pentru a efectua cele 10 calcule!
DATE TESTARE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 și 52
SFAT: Apelați calcTip în ciclu și utilizați metoda push pentru a adăuga valori in array-urile tips si totals.
4. Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. Această funcție calculează media tuturor numerelor din array-ul primit. Apelați funcția cu array-ul „totals”.


--------------------------------------------------------------------------------------------------------------------------
Opţional: Calcularea economiilor și a dobânzii compuse
Funcția calculateInterest(principal, rate, years): Această funcție primește o sumă principală, o rată a dobânzii și un număr de ani. Ea va calcula suma acumulată în cont în urma aplicării dobânzii compuse anuale. Utilizați un ciclu "for" pentru a actualiza suma în fiecare an.
Funcția calculateMonthlyContribution(contribution, rate, years): Această funcție primește o contribuție lunară, o rată a dobânzii și un număr de ani. Ea va calcula suma acumulată în cont dacă s-a făcut o contribuție lunară, aplicând dobânda compusă în fiecare lună. Utilizați un ciclu "for" pentru a actualiza suma în fiecare lună.
Funcția printSavings(name, principal, rate, years, contribution): Această funcție apelează celelalte două funcții și afișează în consolă suma totală de bani economisiți în cont după un anumit număr de ani, luând în considerare suma inițială, dobânda anuală și contribuțiile lunare.
Funcția printSavings ar trebui să afișeze un mesaj precum: "Ioana, suma totală pe care o vei avea în cont după x ani este [Suma]."
Exemplu de apelare a funcției printSavings: printSavings('Ioana', 1000, 5, 10, 50)
În acest exemplu, 'Ioana' începe cu 1000 lei în cont, adaugă 50 lei lunar și are o rată a dobânzii de 5% pe an. Funcția ar trebui să calculeze suma totală de bani pe care Ioana o va avea în cont după 10 ani.
