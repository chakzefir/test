$(window).on('load', function(){

    $(window).scrollTop(0);

    setTimeout(function(){
        $('.preloader').fadeOut('slow');
    }, 500);


    var sections = Array.prototype.slice.call(document.getElementsByClassName('section'));

    sections.forEach(function(element){

        new Waypoint({

            element: element,

            handler: function(){
                element.style.opacity = '1';
            },

            offset: '85%'

        })

    });

});