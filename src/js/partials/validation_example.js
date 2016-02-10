<script type="text/javascript">

  $(document).ready(function(){

     // Устанавливаем обработчик потери фокуса для всех полей ввода текста
     $('input#name, input#email, textarea#message').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(this).attr('id');
         var val = $(this).val();

       // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
       switch(id)
       {
             // Проверка поля "Имя"
             case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                   $(this).addClass('not_error');
                   $(this).next('.error-box').text('Принято')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }

              // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
              // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else
                {
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;

           // Проверка email
           case 'email':
               var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               if(val != '' && rv_email.test(val))
               {
                  $(this).addClass('not_error');
                  $(this).next('.error-box').text('Принято')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }
               else
               {
                  $(this).removeClass('not_error').addClass('error');
                  $(this).next('.error-box').html('поле "Email" обязательно для заполнения<br>, поле должно содержать правильный email-адрес<br>')
                                             .css('color','red')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;


          // Проверка поля "Сообщение"
          case 'message':
              if(val != '' && val.length < 5000)
              {
                 $(this).addClass('not_error');
                 $(this).next('.error-box').text('Принято').
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $(this).removeClass('not_error').addClass('error');
                 $(this).next('.error-box').html('поле "Текст письма" обязательно для заполнения')
                                           .css('color','red')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
          break;

       } // end switch(...)

     }); // end blur()

     // Теперь отправим наше письмо с помощью AJAX
     $('form#feedback-form').submit(function(e){

         // Запрещаем стандартное поведение для кнопки submit
         e.preventDefault();

         // После того, как мы нажали кнопку "Отправить", делаем проверку,
         // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
         // выполняем наш Ajax сценарий и отправляем письмо адресату

         if($('.not_error').length == 3)
         {
            // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
            // и вызываем метод .serialize().
            // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

             $.ajax({
                    url: 'send.php',
                    type: 'post',
                    data: $(this).serialize(),

                    beforeSend: function(xhr, textStatus){
                         $('form#feedback-form :input').attr('disabled','disabled');
                    },

                   success: function(response){
                        $('form#feedback-form :input').removeAttr('disabled');
                        $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                        alert(response);
                   }
            }); // end ajax({...})
        }

        // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме
       else
       {
          return false;
       }

   }); // end submit()

  }); // end script

</script>

// ==================== Avoid `console` errors in browsers that lack a console.===================== //

(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
}());



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