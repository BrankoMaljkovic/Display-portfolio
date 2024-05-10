var kursevi = "CoursesWebsite.json";

// Prvo sam napravio da se uz pomoc GET ulistava cela tabela - radi odlicno

function loadTable1(){ // pustamo funckiju da izlista sve kategorije, pri reload izlistava sve
    $.get(kursevi, function(data){ // get - prosledjujemo izvor informatija, i pozivamo funkciju, tj govorimo sta cemo raditi sa podacima
        console.log(data); // ulistani podaci - radi
        for (var i = 0; i < data.length; i++ ){  // petlja da se prodje kroz svaki objekat
            // uzimamo element gde cemo upisivati, append funkcija sluzi da dodaje na vec postojece stanje, da ne pregazi postojece
            $('tbody').append(` 
            <tr>
                <th>${data[i].id}</th>
                <th><img src="${data[i].img}" width='30' height='30'></th>
                <th>${data[i].category}</th>
                <th><a href="${data[i].url}" target="_blank">${data[i].title}</a></th>
	        </tr>
            `)
        };
    })
};

loadTable1(); // pokretanje funkcije za load prve strane, posto je u kodu pokrece se na svaki load starne (reload dodje kao refresh)

// ubacujemo kategorije
var kategorija = document.getElementById('menu'); // definisemo polje

kategorija.onchange = function () { // da se na promenu vrednosti polja izabrane kategorije pokrece funkcija
    kategorija = document.getElementById('menu').value; // uzimamo vrednost iz polja
    loadTable(kategorija); 
    $('tbody').html(""); // kada se promeni polje brise se postojece stanje, sa ovim ponistavamo vredosti funkcije loadTable1() da se moze ulistati filtrirano stanje (da se ne dodaje na postojece)
} 

// definisemo vrednost koja se uzima funkcijom loadTable

function loadTable(cat) { // ubacujemo parametar cat - vrednost sa kategorije se dodaje na promeni menu polja, po njoj cemo vrsiti filtriranje 
    $.get(kursevi, function (data) {
        console.log(data);
        // ubacujemo uslove koji se proveravaju pri prolasku kroz svaki objekat
        if (cat == "") {
            loadTable1(); // posto imamo funkciju koja poziva celu tabelu, nema potrebe da stoji ceo kod ispod sa kojim sam krenuo
            
        } 
        else { // treba da postavimo da ispise samo ako je kategorija iz menu polja = category iz objekta
            for (var i = 0; i < data.length; i++) {
                if (data[i].category == cat) {
                    $('tbody').append(`
                    <tr>
                    <th>${data[i].id}</th>
                    <th><img src="${data[i].img}" width='30' height='30'></th>
                    <th>${data[i].category}</th>
                    <th><a href="${data[i].url}" target="_blank">${data[i].title}</a></th>
                    </tr>
                    `)
                }

            }
        }
    }
).fail(function () {
    console.log('Nepoznata greška!');
});
};
