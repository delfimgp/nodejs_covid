var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    dia: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}