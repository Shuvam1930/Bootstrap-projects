
// Api call

const input_area= async ()=>{
  var input_ope =document.getElementById("input_ope").value;
  var input =document.getElementById("input").value;
  const url = 'https://newton.now.sh/api/v2/'+input_ope+'/' + encodeURIComponent(input);
  const res = await fetch(url);
  const calc = await  res.json();
  console.log(calc);
  console.log(calc.result);
  document.getElementById("output").innerHTML = 'Answer= '+ calc.result;
} 


