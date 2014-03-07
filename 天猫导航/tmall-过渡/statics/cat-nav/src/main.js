define(function(require) {

    var CatNavMenuAim = require('./cat-nav-menu');
    //var CatNavSlide = require('./cat-nav-slide');

    var catNavMenuAim = new CatNavMenuAim('.left-menu','.cat-slide-content');
    catNavMenuAim.render();

    //var catNavSlide = new CatNavSlide();
    //catNavSlide.render();

});

