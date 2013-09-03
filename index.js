$(document).ready(function() {
  var q = 0;
  var p = 0;
  $(document).keyup(function(event) {
    var code = event.which;
    if (code === 81) {
      event.preventDefault();
      $('#player1_strip td').eq(q).removeClass("active");
      $('#player1_strip td').eq(q+1).addClass("active");
      q++;
    }  
    if (code === 80) {
      event.preventDefault();
      $('#player2_strip td').eq(p).removeClass("active");
      $('#player2_strip td').eq(p+1).addClass("active");
      p++;
    }

    function restart() {
      if (prompt("Do you want to play another game?", "y or n") === "y") {
        q = 0; p = 0;
        $('#player1_strip').find(".active").removeClass("active");
        $('#player1_strip td').eq(q).addClass("active");
        $('#player2_strip').find(".active").removeClass("active");
        $('#player2_strip td').eq(p).addClass("active");
      }
    }

    if (q === 24) {
      alert("Player 1 wins");
      restart();
    }

    if (p === 24) {
      alert("Player 2 wins");
      restart();
    } 

  });
});


// q = 81
// p =80
