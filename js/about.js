'use strict'
$(document).ready(()=>{
    
    $('.theme').click(function(e){
       var color = $(e.target).attr('class');
       $('#theme_general').attr('href','basic_knowledge/css/'+color+'.css')
    })
    $("#arrow_up").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        },500)
        return false;
    });
  $('#acordeon').accordion();
});