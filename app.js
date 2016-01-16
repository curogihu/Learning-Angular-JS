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
      images: [
        {
          full: '1a-full.jpg',
          thumb: '1a-thumb.jpg'
        },
        {
          full: '1b-full.jpg',
          thumb: '1b-thumb.jpg'
        }
      ]
    },

    {
      name: 'Dodecahedron-A',
      price: 2.96,
      description: '....',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: '2a-full.jpg',
          thumb: '2a-thumb.jpg'
        }
      ]
    },

  ];

})();