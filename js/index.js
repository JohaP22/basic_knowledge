'use strict'
$(document).ready(()=>{
    
    var post;
    $('.slider').bxSlider({
        slideWidth:500,
        responsive:true,
        pager:false
    });
    post = {        
        titulo:'Articulo Lorem Ipsum',
        fecha: 'Fecha de publicación: '+moment().format('DD MMMM YYYY'),
        contenido:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };
    $('#content article h2').append(post.titulo);
    $('#content article span').append(post.fecha);
    $('#content article p').append(post.contenido);
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
    $('#login_form').submit((e)=>{
        var name = $('#user_login').val();
        localStorage.setItem('name_session',name);
        $("#session").append("¡Bienvenid@ "+ localStorage.getItem('name_session').toUpperCase()+'!')
        $("#logout").css('display','inline');
        $("#login").hide();
    })
    $('#logout').click((e)=>{
        localStorage.clear();
        $("#logout").hide();
        $("#session").hide();
        $("#login").show();
        location.reload();
    })
});