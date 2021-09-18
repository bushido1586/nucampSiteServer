const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user:{ 
       type: mongoose.Schema.Types.ObjectId, 
       ref : 'Users'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsites'
    }]
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;