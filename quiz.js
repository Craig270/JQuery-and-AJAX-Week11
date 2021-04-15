"use strict";
console.log(`This is the city:`);
$.get(
  "http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9fa9194ca99822138e8273c213e1e2d5&units=imperial",
  (main) => display(main.name)
);
$.get(
  "http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9fa9194ca99822138e8273c213e1e2d5&units=imperial",
  (main) => display(main.main.temp)
);
function display(val) {
  console.log(val);
  //use a loop to go through the list of customer objects
  //for each cutomer, add a row to a table with a colum for first name, last name, email
  $("h1").append(`<p> ${val}</p>`);
  // for (let i = 0; i < arr.length; i++) {
  //   let child = `<tr><td>${arr[i].temp}</td><td>${arr[i].feels_like}</td><td>${arr[i].pressure}</td></tr>`;
  //   $("#customer-table").append(child);
  // }
}
$.get(
  "http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=9fa9194ca99822138e8273c213e1e2d5&units=imperial"
);
