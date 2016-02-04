// ============== INPUT FILE ===============
$(function(){
  var wrapper = $( ".downpic__label" ),
    inp = wrapper.find( "input" ),
    btn = wrapper.find( ".downpic__pic" ),
    lbl = wrapper.find( ".downpic__descr" );

  var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

  inp.change(function(){
    var file_name;
    if( file_api && inp[ 0 ].files[ 0 ] )
        file_name = inp[ 0 ].files[ 0 ].name;
    else
        file_name = inp.val().replace( "C:\\fakepath\\", '' );

    if( ! file_name.length )
        return;

    if( lbl.is( ":visible" ) ){
        lbl.text( file_name );
    }else
        btn.text( file_name );
  }).change();

});
$( window ).resize(function(){
  $( ".file_upload input" ).triggerHandler( "change" );
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

  $(document).mouseup(function(e){
    if(! popup.is(e.target)&& popup.has(e.target).length === 0){
      popupWr.hide();
    }
  });
}());
