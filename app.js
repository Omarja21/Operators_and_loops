var value =0;
var Isvalid= true;
while(Isvalid){
  var ValidValue=prompt("plase enter a valid value between 1-5");
  if (ValidValue>=1 && ValidValue<=5){
      Isvalid=false;
      value = ValidValue;
  }

}
for(var i=1; i<=value; i++){
  var elem = document.createElement("img");
  elem.src = 'https://thumbs.dreamstime.com/z/haert-flat-vector-icon-app-web-eps-164508540.jpg';
  document.getElementById("placehere").appendChild(elem);
 
    
}
