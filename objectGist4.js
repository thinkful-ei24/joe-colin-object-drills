const people = [
    {
        name: 'John Doe',
        jobtitle: 'Substitute',
        boss: 'Jane Doe'
    },
    {
        name: 'Batman',
        jobtitle: 'Billionaire',
        boss: 'Alfred'
    },
    {
        name: 'Legalos',
        jobtitle: 'Archer',
        boss: ''
    },
    {
        name: 'Boss Baby',
        jobtitle: 'CEO',
        boss: 'other baby'
    }
]

const transparency = function(arr) {
    arr.forEach(person => { 
      if (!person['boss']) {
        console.log(`${person.jobtitle} ${person.name} doesn't report to anybody.`)
      } else {
        console.log(`${person.jobtitle} ${person.name} reports to ${person.boss}`);
      }
    })
}
transparency(people);
