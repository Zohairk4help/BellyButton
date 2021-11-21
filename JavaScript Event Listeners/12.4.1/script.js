d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

console.log(d3.selectAll("#menu").node().id);
// Correct. Nice work! It will print menu, which is the id of the div that contains the 
// dropdown menu. The div is selected by the d3.selectAll() method, and its id property is 
//printed to the console.
