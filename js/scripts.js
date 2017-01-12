$(document).ready(function() {
  // var ostrich = $("input:radio[name=ostrich]:checked").val();
  // var dolphins = $("input:radio[name=dolphins]:checked").val();
  // var tarantula = $("input:radio[name=tarantula]:checked").val();

  $(".btn").click(function(event){
    var animalInput = $("input:radio[name=animal]:checked").val();
    console.log(snake);
    event.preventDefault();
    if(animalInput === "snake") {
      $("#snake").show();
    } else if (animalInput === "ostrich") {
      $("#ostrich").show();
    } else if (animalInput === "dolphins") {
      $("#dolphins").show();
    } else if (animalInput === "tarantula") {
      $("#tarantula").show();
    } else {
      alert("Please choose an animal.")
    }
  });

});
