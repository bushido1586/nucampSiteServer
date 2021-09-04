const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionsSchema = new Schema({
    name:{
        type: String, 
        require: true, 
        unique: true
    }, 
    image: {
        type: String, 
        required: true
    }, 
    featured:{
        type: String
    },
    cost: {
        type: Currency, 
        required: true, 
        min: 0
    },
    description: {
        type: String, 
        requires: true
    }

},
{
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionsSchema);

module.exports = Promotion;