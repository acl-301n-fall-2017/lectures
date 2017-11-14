const doctors = [
  { number: 20, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];

// var filterByEndDate = doctor => doctor.end > 2000;

var filterByEndDate = year => {
  return (doctor) => doctor.end > year;
}

let mappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin) + 1
  }
}) // => Returns a new array of doctors; each new object has a number, name, and yearsPlayed prop with pass-thru or new values

let anotherMappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin) + 1
  }
})
.filter(doctor => doctor.yearsPlayed < 5)
.sort((left, right) => left.yearsPlayed - right.yearsPlayed);
 // Newly mapped array is returned from map, and filter is called on that new array

 let newArray = doctors.reduce((bucket, current) => {
   if (current.number > 10) {
     bucket.push({
       number: current.number,
       name: current.actor.split(' '),
       yearsPlayed: (current.end - current.begin) + 1
     })
   }
   return bucket
 }, []);
