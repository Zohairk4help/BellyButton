// just like spaceX data bringing from url, we loaded the data and run it into our server.[section 12.3.2]
d3.json("samples.json").then(function(data){
    console.log(data);
});


// to get each person's weekly washing frequ for belly button
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// // to get the wfreq sorted in reverse
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// to get rid of "null" values in the sorted array of wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// You are given the following object. Use Object.entries() to print each 
// key-value pair inside an array.

researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));

// using objec.entries() and forEach func to get to the first person, ID 940, 
// in the metadata array [sec 12.3.2]
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});