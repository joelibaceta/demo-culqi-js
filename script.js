var inputPublicKey = document.getElementById("inputPublicKey");

inputPublicKey.addEventListener("change", function(){
	Culqi.publicKey = document.getElementById("inputPublicKey").value;
  Culqi.init();
});



function tokenize() {
    Culqi.createToken(); 
    setTimeout(writeOutput, 2000);
}



function writeOutput() {
  var bin = document.getElementById("card[number]").value.substring(-8,7);
  
  document.getElementById("token").textContent = "El token generado es: " + Culqi.token.id;
  document.getElementById("bin").textContent = "El BIN de tarjeta es: " + bin;

}