
  var data=0
  function submit()
  {
    var inputdata=Number(document.getElementById('data').value);
        data=document.getElementById("demo").innerHTML = inputdata;
  }

function Add() {
   data = data + 1;
    document.getElementById("demo").innerText = data;
}function Sub() {
   data = data - 1;
    document.getElementById("demo").innerText = data;
}function Reset(){
  data = data;
  document.getElementById("demo").innerText=0;
}
