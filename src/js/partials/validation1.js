// =============== Validation ==================

$(document).ready(function(){

  $('form').on('reset', function(e){
    $('.tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('tooltip').addClass('hidden');;
    $('#name, #email, #descr').removeClass('tooltip__stroke');
  });

  $('form').unbind().blur( function(){

    e.preventDefault();
    switch($('#name_project, #pic_project, #url_project, #descr_project, #name, #email, #descr')){

    case '$('#name_project')':
      if($('#name_project').val() == ''){

        $('.tooltip-name').removeClass('hidden').addClass('tooltip');
        $('#name_project').addClass('tooltip__stroke');

      }else{
        $('.tooltip-name').removeClass('tooltip').addClass('hidden');
        $('#name_project').removeClass('tooltip__stroke');
      }
    break;

    case '$('#pic_project')':
      if($('#pic_project').val() == ''){

        $('.tooltip-pic').removeClass('hidden').addClass('tooltip');
        $('#fileformlabel').addClass('tooltip__stroke');

      }else{
        $('.tooltip-pic').removeClass('tooltip').addClass('hidden');
        $('#fileformlabel').removeClass('tooltip__stroke');
      }
    break;

    case '$('#url_project')':
      if($('#url_project').val() == ''){

        $('.tooltip-url').removeClass('hidden').addClass('tooltip');
        $('#url_project').addClass('tooltip__stroke');

      }else{
        $('.tooltip-url').removeClass('tooltip').addClass('hidden');
        $('#url_project').removeClass('tooltip__stroke');
      }
    break;


    case '$('#descr_project')':
      if($('#descr_project').val() == ''){

        $('.tooltip-textarea').removeClass('hidden').addClass('tooltip');
        $('#descr_project').addClass('tooltip__stroke');

      }else{
        $('.tooltip-textarea').removeClass('tooltip').addClass('hidden');
        $('#descr_project').removeClass('tooltip__stroke');
      }
    break;


    case '$('#name')':
      if($('#name').val() == ''){

        $('.tooltip-form-name').removeClass('hidden').addClass('tooltip');
        $('#name').addClass('tooltip__stroke');

      }else{
        $('.tooltip-form-name').removeClass('tooltip').addClass('hidden');
        $('#name').removeClass('tooltip__stroke');
      }
    break;

    case '$('#email')':
      if($('#email').val() == ''){

        $('.tooltip-form-email').removeClass('hidden').addClass('tooltip');
        $('#email').addClass('tooltip__stroke');

      }else{
        $('.tooltip-form-email').removeClass('tooltip').addClass('hidden');
        $('#email').removeClass('tooltip__stroke');
      }
    break;


    case '$('#descr')':
      if($('#descr').val() == ''){

        $('.tooltip-form-question').removeClass('hidden').addClass('tooltip');
        $('#descr').addClass('tooltip__stroke');

      }else{
        $('.tooltip-form-question').removeClass('tooltip').addClass('hidden');
        $('#descr').removeClass('tooltip__stroke');
      }
    break;
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









  // if($('#name_project, #pic_project, #url_project, #descr_project, #name, #email, #descr').val() == ''){

  //     $('.tooltip-name, .tooltip-pic, .tooltip-url, .tooltip-textarea, .tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('hidden').addClass('tooltip');
  //     $('#name_project, #fileformlabel, #url_project, #descr_project, #name, #email, #descr').addClass('tooltip__stroke');

  //   }else{
  //     $('.tooltip-name, .tooltip-pic, .tooltip-url, .tooltip-textarea, .tooltip-form-name, .tooltip-form-email, .tooltip-form-question').removeClass('tooltip').addClass('hidden');
  //     $('#name_project, #fileformlabel, #url_project, #descr_project, #name, #email, #descr').removeClass('tooltip__stroke');
  //   }