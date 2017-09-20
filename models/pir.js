var mongoose = require('mongoose');
var moment = require('moment-timezone');
moment.tz.setDefault("Europe/Madrid");

var Schema = mongoose.Schema;

var PirSchema = Schema({
  date: {type: Date, default: Date.now},
});

PirSchema
    .virtual('date_formatted')
    .get(function () {
        return moment(this.date).format('DD-MMM-YYYY');
    });

PirSchema
    .virtual('hour_formatted')
    .get(function () {
        return moment(this.date).format('HH:mm:ss');
    });

//Export model
module.exports = mongoose.model('Pir', PirSchema);