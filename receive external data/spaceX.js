const url = "https://api.spacexdata.com/v2/launchpads";
// "receivedData" is an arbitary and can be named anything
d3.json(url).then(receivedData => console.log(receivedData));
d3.json(url).then(spaceXResults => console.log(spaceXResults[4].full_name));

// to get the [4] space station lat
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[4].location.latitude, spaceXResults[4].location.longitude)
); //TA helped

// // to get to every stations' lat and long by map()func   [ sec 12.3.1 ask TA] 
// x =  d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults.map(function(lat){
//     return lat.location;
// } )));
// console.log(x);



// // var cityNames = cities.map(function(city){
// //     return city.City;
// //   });
// //   console.log(cityNames);


