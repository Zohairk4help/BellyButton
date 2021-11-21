// section 12.2.1 to 12.2.2
// map function to get to each array to get desired results, better than for-loop funct [see and compare the two funcs]
var numbers = [0,2,4,6,8];
var doubled = numbers.map(function(carPrice) {
  return carPrice + 5;
  });
console.log(doubled);


var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
console.log(words.slice(3, ));


var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);