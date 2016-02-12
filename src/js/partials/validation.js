
// =============== Validation ==================

$(document).ready(function(){

  $('form').on('reset', function(e){

    $('.tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('tooltip').addClass('hidden');

    $('#name, #email, #descr').removeClass('tooltip__stroke');
  });


    function validation() {
      $('form').find('[id]').each(function() {
        if ($(this).val() == '') {

          $(this).siblings('div').addClass('tooltip').removeClass('hidden');


          $(this).addClass('tooltip__stroke');

        } else {
            $(this).siblings('div').removeClass('tooltip').addClass('hidden');
            $(this).removeClass('tooltip__stroke');
            $(this).siblings('.downpic__descr').removeClass('tooltip__stroke');
        }
      });
    }

    $('form').on('submit', function(e) {

      e.preventDefault();
      validation();
    });


  $('[id]').keydown(function(e) {

    var target = $(e.target);

        $(target).siblings('div').removeClass('tooltip').addClass('hidden');
        $(target).removeClass('tooltip__stroke');
  });
});