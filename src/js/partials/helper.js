
// ============== INPUT FILE ===============

$(function(){
  var wrapper = $( ".downpic__label" ),
    inp = wrapper.find( "input" ),
    btn = wrapper.find( ".downpic__pic" ),
    lbl = wrapper.find( ".downpic__descr" );

  var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

  inp.change(function(){
    var file_name;
    if( file_api && inp[ 0 ].files[ 0 ] ){
        file_name = inp[ 0 ].files[ 0 ].name;
        $('.tooltip-pic').removeClass('tooltip').addClass('hidden');
        $('#fileformlabel').removeClass('tooltip__stroke');
    }else
        file_name = inp.val().replace(/.+[\\\/]/, "");

    if( ! file_name.length )
        return;

    if( lbl.is( ":visible" ) ){
        lbl.text( file_name );
    }else
        btn.text( file_name );
  }).change();

});

// =========== POPUP ============

(function() {
  var cl = $('.add-project'),
      popupWr = $('.popup-wrapper'),
      popup = $('.popup'),
      close = $('.popup__close');

  cl.on('click', function(e) {
    e.preventDefault();
    popupWr.show();
  });

  close.on('click', function(e) {
    popupWr.hide();
  });

  $(document).keyup(function(e){
    if (event.keyCode == 27) {
        popupWr.hide();
    }
  });
}());

// ==================== Avoid `console` errors in browsers that lack a console.=====================

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


// ============== Placeholder IE8 ================

$(function() {
  $('input, textarea').placeholder();
});
