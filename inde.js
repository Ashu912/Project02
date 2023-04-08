
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
  data = 0;
  document.getElementById("demo").innerText=0;
}function Increment5(){
  data =data+5;
  document.getElementById("demo").innerText=data;
}function Decrement10(){
  data =data-10;
  document.getElementById("demo").innerText=data;
}
