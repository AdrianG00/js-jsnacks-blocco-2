// jsnack2

const names = ['Silvio', 'Pierluigi', 'Enrico', 'Carlo', 'Giorgia', 'Matteo','Arnaldo','Ludovico','Giulio','Santino','Renato','Bruno','Beppe'];
const surname = ['Berlusconi', 'Bersani', 'Letta', 'Calenda', 'Meloni', 'Salvini', 'Renzi','Forlani','Andreotti','Brunetta','Vespa','Grillo'];

const fakeList= [];
for (let i = 0; i < 3; i++) {
    thisName = Math.floor(Math.random() * names.length);
    thisSurname = Math.floor(Math.random() * surname.length);

    fakeList.push(`${names[thisName]} ${surname[thisSurname]} `)
    
}

console.log(fakeList);

