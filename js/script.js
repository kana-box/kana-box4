$(function(){
  //  
  if(window.matchMedia('(max-width: 600px)').matches){
    $('#drop_menu_hidden').hide();

  }else{
    $('#drop_menu_hidden').show();
  }
// 

$('#spnavi li').click(function(){
  if($('#drop_menu_hidden').is(':hidden')){
    $('#drop_menu_hidden:not(:animated)').slideDown('fast');
  }else{
    $('#drop_menu_hidden:not(:animated)').slideUp('fast');
  }
});
// 
$(window).resize(function(){
  
  if(window.matchMedia('(max-width: 600px)').matches){
    $('#drop_menu_hidden').hide();

  }else{
    $('#drop_menu_hidden').show();
  }

});
});
