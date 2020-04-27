var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

var products = [   
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_%28promo_image%29.jpg',
        title: 'Call of Duty',
        description: 'Super Awesome Game!!!',
        price: 40
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/t75nrS5Jndbl1Av03shQK6VoO-E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15957232/0fe20042_0bb8_4781_82f4_7130f928b021.jpg',
        title: 'minecraft Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
        title: 'GTA V Game',
        description: 'Awesome Game!!!',
        price: 25
    }),
    new Product({
        imagePath: 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pub_660x450_010219045955.jpg',
        title: 'Pubg Game',
        description: 'Awesome Game!!!',
        price: 40
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/86/Sands_of_time_cover.jpg',
        title: 'Price of Persia',
        description: 'Awesome Game!!!',
        price: 20
    })
];

var done = 0;
for (var i=0; i<products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
mongoose.disconnect();
}