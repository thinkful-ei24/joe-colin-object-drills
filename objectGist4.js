const people = [
    {
        name: 'John Doe',
        jobtitle: 'Substitute'
    },
    {
        name: 'Batman',
        jobtitle: 'Billionaire'
    },
    {
        name: 'Legalos',
        jobtitle: 'Archer'
    },
    {
        name: 'Boss Baby',
        jobtitle: 'CEO'
    }
]

const transparency = function(arr) {
    arr.forEach(person => {
            console.log(`${person.name} is a ${person.jobtitle}`);
    })
}

transparency(people);