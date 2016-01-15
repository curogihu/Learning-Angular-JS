(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gem;
  });

  var gem = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '...',
      canPurchase: true,
      soldOut: false,
    },

    {
      name: 'Dodecahedron-A',
      price: 2.96,
      description: '....',
      canPurchase: true,
      soldOut: false,
    },

  ];

})();