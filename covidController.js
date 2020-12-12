//Import Bio Model
Bio = require('./covidModel');

//Para index
exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Obtidos Dados com Sucesso",
            data: bio       
        });
    });
};

//Criar nova BIO
exports.add = function (req, res) {
    var bio = new Bio();
    bio.data = req.body.data? req.body.data: bio.data;
    bio.valor = req.body.valor;

    //Guardar e verificar erros
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Novos Dados Adicionados!",
            data: bio
        });
    });
};

// Ver Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes...',
            data: bio
        });
    });
};

// Atualizar Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.data = req.body.data ? req.body.data : bio.data;
        bio.valor = req.body.valor;
    
        //Guardar e verificar erros
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Dados Atualizados com Sucesso",
                data: bio
            });
        });
    });
};

// Apagar Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "OK",
            message: 'Bio Eliminada!'
        });
    });
};