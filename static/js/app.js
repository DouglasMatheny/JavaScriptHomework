// from data.js
var tbody = d3.select("tbody");

function appendTable(filteredData) {

    
    var Parent = document.getElementById("tbody1");
    while(Parent.hasChildNodes())
    {
       Parent.removeChild(Parent.firstChild);
    }
    
    
    filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        console.log("test1");
      });
});
}


appendTable(data);

var submit = d3.select("#filter-btn");


submit.on("click", function() {

  // Prevent the page from refreshing
 d3.event.preventDefault();

//Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  console.log(`${inputElement == null}`);

//Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(`Input Value ${inputValue}`);
  var filteredData = data.filter(data => data.datetime == inputValue);
    
  appendTable(filteredData);
}); 



