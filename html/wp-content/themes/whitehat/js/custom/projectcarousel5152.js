jQuery(document).ready(function( $ ) {
 "use strict";
 
    var owl = $(".recent-project-carousel");
    owl.owlCarousel({
        items: carousel.column,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });
});