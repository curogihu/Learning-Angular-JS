(function(){
  var app = angular.module('store', []);

  app.controller("PanelController", function(){
    this.tab = 2;

    this.selectTab = function(setTab){
      this.tab = setTab;
    }

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller('StoreController', function(){
    this.products = gem;
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
    }
  })

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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "aaaa@aaaa.com"
        },
        {
          stars: 4,
          body: "I live this product!",
          author: "bbbbb@bbbbb.com"
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "aaaa@aaaa.com"
        },
        {
          stars: 4,
          body: "I live this product!",
          author: "bbbbb@bbbbb.com"
        }
      ]
    },

  ];

})();