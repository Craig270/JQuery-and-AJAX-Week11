"use strict";
$.get("https://reqres.in/api/users", (data) => display(data.data));

function display(arr) {
  console.log(arr);
  //use a loop to go through the list of customer objects
  //for each cutomer, add a row to a table with a colum for first name, last name, email
  for (let i = 0; i < arr.length; i++) {
    let child = `<tr><td>${arr[i].first_name}</td><td>${arr[i].last_name}</td><td>${arr[i].email}</td></tr>`;
    $("#customer-table").append(child);
  }
}
