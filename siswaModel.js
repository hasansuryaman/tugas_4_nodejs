// filename: siswaModel.js

var mongoose = require('mongoose');

// setup schema
var siswaSchema = mongoose.Schema({
    nama: {
        type: String,
        require: true,
    },
    tanggallahir: {
        type: String,
        require: true,
    },
    jeniskelamin: String,
    hobi: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// var siswa model
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);

module.exports.get = function (callback, limit){
    Siswa.find(callback).limit(limit);
}