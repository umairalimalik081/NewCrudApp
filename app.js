function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").vlaue;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert("Name is Required");
    return false;
  }
  if (age == "") {
    alert("age is Required");
    return false;
  } else if (age < 1) {
    alert("Age cannot be zero or less than zero ");
    return false;
  }
  if (address == "") {
    alert("Address is Required");
    return false;
  }
  if (email == "") {
    alert("Email is Required");
    return false;
  } else if (!email.includes("@")) {
    alert("invalid email address");
    return false;
  }

  return true;
}

function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  var html = "";

  peopleList.forEach((element) => {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onClick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button><button onClick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
  });
  //(function (element, index){

  // });
  document.querySelector("#table1 tbody").innerHTML = html;
  console.log("peopleList");
}
document.onload = showData();

function addData() {
  if (validateForm() == true) {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").vlaue;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });
    localStorage.setItem("peopleList", JSON.stringify("peopleList"));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("age").vlaue = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  }
}
