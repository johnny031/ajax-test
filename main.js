var request = new XMLHttpRequest();
request.open("GET", "https://taiict.herokuapp.com/json-data");
request.onload = function () {
  console.log(request.responseText);
};
request.send();
