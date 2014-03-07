define(function(require) {
    require('ie7Patch')();

    var CatNavMenuAim = require('./cat-nav-menu');
    var catNavMenuAim = new CatNavMenuAim('.left-menu','.cat-slide-content');
    catNavMenuAim.render();

    var CatNavSlide = require('./cat-nav-slide');
    var catNavSlide = new CatNavSlide('#J_MarketBannerSlide',{btnUlClass:'market-slide-nav',btnCurClass:'market-nav-selected',ifArr:true});
    catNavSlide.render();
});

