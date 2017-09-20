var Pir = require('../models/pir');

// Display list of all PIR events
exports.pir_list = function(req, res) {

    Pir.find()
        .sort([['date', 'descending']])
        .limit(10)
        .exec(function (err, list_pir) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('pir_list', { title: 'PIR Events', pir_list: list_pir });
        });

};

// Handle PIR event create on POST
exports.pir_create_post = function(req, res) {

    var pir = new Pir();

    if (req.get('User-Agent') === 'ESP32HTTPClient') {
        pir.save(function (err) {
            if (err) {
                return next(err);
            }
            res.end("PIR event created");
        });
    }

};
