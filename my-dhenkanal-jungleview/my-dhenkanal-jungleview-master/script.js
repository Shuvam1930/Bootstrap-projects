function myFunction() {
    var c = document.createComment("My personal comments");
    document.body.appendChild(c);
    var x = document.getElementById("respond");
    onclick="myFunction()"
}
function msg(){
    alert("JUNGLEVIEW THANKING YOU!");

}
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y= document.getElementById("panel");
    if(y.style.display === "none"){
        y.style.display="block";
    } else{
        y.style.display= "none";
    }
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }  
}
function my(){
    var div= document.getElementById("newpost");
    if(div.styleSheets.display === "none")
    {
        div.styleSheets.display="block";

    }
    else{
        div.style.display ="none";
    }
}
