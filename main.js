
for (var i = 0; i < 35; i++) {
  document.getElementsByClassName('quadratini')[0].innerHTML += '<div class="quadrato"></div>'
}

$(document).ready(function () {
  for (var i = 0; i < 35; i++) {
    var clone = $('.quadrato').clone();
  }

  $('.quadrato').one( "click", function() {
    var quadrato_cliccato = $(this);
    if (!quadrato_cliccato.hasClass('clicked')) {
      $.ajax({
        url: 'https://www.boolean.careers/api/random/int',
        method: 'GET',
        success: function (data) {
          var cpu_n = data.response;
          var random = Math.floor(Math.random() * 10);
          if (cpu_n <= 5)
             {
               quadrato_cliccato.text(cpu_n);
               quadrato_cliccato.css("background-color", "yellow");
             }
             else if (cpu_n > 5){
               quadrato_cliccato.text(data.response);
               quadrato_cliccato.css("background-color", "green");
          }
        },
        error: function (error) {
          alert(error);
        },
      });
    }
  });
});
