
  // 12.4.3 section 
  // A dropdown menu will list the ID numbers of all the volunteers. 
  // When a volunteer ID is chosen from the dropdown menu, that person's demographics 
  // information, such as location, sex, and age, will be displayed.
  init();

  function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // add optionhange()
  // <select id="myDropdownMenu"
// onchange="doSomething(this.value)"></select> this.value from html 
// and the following fun are equivalent
  function optionChanged(newSample) {
    console.log(newSample);
  }

  // to print information to the Demographic Infopanel
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }
  // then go to "buildMetadata func"
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      // PANEL.append("h6").text(result.location) --> from module 
      Object.entries(result).forEach(([key,value])=> {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`)
      }); // from TA help and possible link towards challenge

    });
  }

  // ask TA how to bring all the keys.values as object.entries for metadata?
  //Object.entries() line 47-49