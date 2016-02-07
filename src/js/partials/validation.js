// =============== Validation ==================

$(document).ready(function(){
  $('form#form').on('submit', function(e){
    e.preventDefault();
    if($('.input-prokop').val() == ''){
      $('.tooltip__name').addClass('tooltip')
    }
  })
});
  // $('input, textarea').unbind().blur( function(){

  //   var cl = $(this).attr('class');

  //   var val = $(this).val();

  //   switch(cl){

  //     case 'tooltip__name':

  //       var rv_name = /^[a-zA-Zа-яА-Я]+$/;

  //       if(val.lenght > 2 && val != '' && rv_name.test(val)){

  //         console.log("prokop");
  //       }
  //   }
  // });
