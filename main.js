
var random = Math.ceil(Math.random() * 9);

for (var i = 0; i < 35; i++) {
  document.getElementsByClassName('quadratini')[0].innerHTML += '<div class="quadrato"></div>'
}

$(document).ready(function () {
  for (var i = 0; i < 35; i++) {
    var clone = $('.quadrato').clone();
  }

  $('.quadrato').click(function () {

    var quadrato_cliccato = $(this);

    if (!quadrato_cliccato.hasClass('clicked')) {
      $.ajax({
        url: 'https://www.boolean.careers/api/random/int',
        method: 'GET',
        success: function (data) {
          if (random <= 5)
               {
                 quadrato_cliccato.text(data.response);
                 quadrato_cliccato.css("background-color", "yellow");
               }
               else {
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
