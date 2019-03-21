
  //Business logic
function Ticket(movie,time,age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
Ticket.prototype.fullInfo = function() {
  return this.movie + " at " + this.time;
}

//User interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("#movie").val();
    var inputTime =parseInt($("#time").val());
    var inputAge = parseInt($("#age").val());
    var myTicket = new Ticket(inputMovie,inputTime,inputAge)


  $("ul#result").append("<li>" + myTicket.fullInfo() + "</li>");


  if (inputAge < 18 || inputAge > 63  ) {
    $("#result").append("$5.00");
  } else if (inputTime > 9) {
    $("#result").append("$8.00");
  }else {
    $("#result").append("$17.00");
  }
  });
});
