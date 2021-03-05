//L'utente inserirà il proprio cognome. Il software salva il ognome in una lista che stamperà in ordine alfabetico insieme alla posizione del cognome dell'utente nella lista.

// inizializzo l'array
var names = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// imput del nome nell'array
var name = prompt("What is your surname?");
var name = name.charAt(0).toUpperCase() + name.substring(1);
names.push(name);

// stampo la lista in ordine
names.sort();

for (var i = 0; i < names.length; i++) {
  document.getElementById('list').innerHTML += "<li>" + names[i] + "</li>";
}

var pos = names.indexOf(name) + 1;

document.getElementById('position').innerHTML = "Your last name (" + name + ") is on position number " + pos + ".";
