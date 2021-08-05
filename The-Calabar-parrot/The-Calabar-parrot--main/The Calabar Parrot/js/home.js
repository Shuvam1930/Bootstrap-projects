function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  document.getElementById("header").innerHTML="CALABER";
function searchbtn(){
  var x=document.getElementById("headername");
  if(x.style.display==="none")
  x.style.display="block";
  else
  x.style.display="none";
  var z=document.getElementById("savebtn");
  if(z.style.display==="none")
  z.style.display="block";
  else
  z.style.display="none";
}
function save(){

  var y=document.getElementById("headername").value;
  document.getElementById("header").innerHTML=y;
}
