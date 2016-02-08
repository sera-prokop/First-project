// =============== Validation ==================

$(document).ready(function(){

  $('form').on('reset', function(e){
    $('.tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('tooltip').addClass('hidden');;
    $('#name, #email, #descr').removeClass('tooltip__stroke');
  });

  $('form').on('submit', function(e){

    e.preventDefault();

    if($('#name_project, #pic_project, #url_project, #descr_project, #name, #email, #descr').val() == ''){

      $('.tooltip-name, .tooltip-pic, .tooltip-url, .tooltip-textarea, .tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('hidden').addClass('tooltip');
      $('#name_project, #fileformlabel, #url_project, #descr_project, #name, #email, #descr').addClass('tooltip__stroke');

    }else{
      $('.tooltip-name, .tooltip-pic, .tooltip-url, .tooltip-textarea, .tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('tooltip').addClass('hidden');
      $('#name_project, #fileformlabel, #url_project, #descr_project, #name, #email, #descr').removeClass('tooltip__stroke');
    }
  })

  $('#name_project').keydown(function(e){

    $('.tooltip-name').removeClass('tooltip').addClass('hidden');
      $('#name_project').removeClass('tooltip__stroke');

  });

  $('#url_project').keydown(function(e){

    $('.tooltip-url').removeClass('tooltip').addClass('hidden');
      $('#url_project').removeClass('tooltip__stroke');

  });

  $('#descr_project').keydown(function(e){

    $('.tooltip-textarea').removeClass('tooltip').addClass('hidden');
      $('#descr_project').removeClass('tooltip__stroke');

  });

$('#name').keydown(function(e){

    $('.tooltip-form-name').removeClass('tooltip').addClass('hidden');
      $('#name').removeClass('tooltip__stroke');

  });

$('#email').keydown(function(e){

    $('.tooltip-form-email').removeClass('tooltip').addClass('hidden');
      $('#email').removeClass('tooltip__stroke');

  });

$('#descr').keydown(function(e){

    $('.tooltip-form-question').removeClass('tooltip').addClass('hidden');
      $('#descr').removeClass('tooltip__stroke');

  });

});



