// filename: siswaContoller.js

// import siswa model
Siswa = require('./siswaModel');

// handle index action
exports.index = function(req, res){
    Siswa.get(function(err, siswa){
        if (err){
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "siswa retrieved successfully",
            data: siswa
        });
    });
};

// handle create siswa action
exports.new = function (req, res){
    var siswa           = new Siswa();
    siswa.nama          = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir  = req.body.tanggallahir;
    siswa.jeniskelamin  = req.body.jeniskelamin;
    siswa.hobi          = req.body.hobi;

    // save the siswa and check for error
    siswa.save(function(err){
        // if (err)
        // res.json(err);
        res.json({
            message: 'Data Siswa Baru Telah Dibuat',
            data: siswa
        });
    });
};

// handle view siswa info
exports.view = function(req, res){
    Siswa.findById(req.params.siswa_id, function(err, siswa){
        if (err)
            res.send(err);
        res.json({
            message: 'Memuat Data Siswa....',
            data: siswa
        });
    });
};

// handle update data siswa
exports.update = function(req, res){
    Siswa.findById(req.params.siswa_id, function (err, siswa){
        if(err)
            res.send(err);

        siswa.nama          = req.body.nama ? req.body.nama : siswa.nama;
        siswa.tanggallahir  = req.body.tanggallahir;
        siswa.jeniskelamin  = req.body.jeniskelamin;
        siswa.hobi          = req.body.hobi;

        // save siswa and check for error
        siswa.save(function (err){
            if(err)
                req.json(err);
            res.json({
                message: 'Data Siswa Berhasil Diperbarui',
                data: siswa
            });
        });
    });
};

// handle delete data siswa
exports.delete = function(req, res){
    Siswa.remove({
        _id: req.params.siswa_id
    }, function (err, siswa){
        if(err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Data Siswa Dihapus'
        });
    }) ;
};