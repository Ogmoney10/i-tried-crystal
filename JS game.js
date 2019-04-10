$(document).ready(function() {
    $(document).on("click", ".crystal", game);
  
    var randomNumber1 = Math.floor(Math.random() * 13);
    var randomNumber2 = Math.floor(Math.random() * 13);
    var randomNumber3 = Math.floor(Math.random() * 13);
    var randomNumber4 = Math.floor(Math.random() * 13);
    var computerNumbe = Math.floor(Math.random() *101 +19);
  
    $(".c1").attr("value", randomNumber1);
    function game() {
      console.log($(this).attr("value"));
  
    $(".c2").attr("value", randomNumber2);
    function game(){
      console.log($(this).attr("value"))};
  
    $(".c3").attr("value", randomNumber3);
    function game(){
      console.log($(this).attr("value"))};
  
  
    $(".c4").attr("value", randomNumber4);
    function game(){
      console.log($(this).attr("value"))};
  
    
      $("#ComputerNumber").text(computerNumbe);
      function game(){
      console.log($(this).text("value"))};
  
      var TotalSum =randomNumber1 + randomNumber2 +
      randomNumber3 + randomNumber4
      console.log(TotalSum)
  
  
      if( TotalSum=computerNumbe){
        alert("good job you win")
      } else{
        alert("you lose")
  
      }
      
      document.getElementById("ComputerNumber").innerHTML=
      Math.floor(Math.random()*100+19);
      
      
      
  
    }
  
  });
  