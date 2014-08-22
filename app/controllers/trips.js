'use strict';

//var Trip = require('../models/trip'),
var mp   = require('multiparty');

exports.index = function(req, res){
  res.render('home/index');
};

exports.new = function(req, res){
  res.render('trips/new');
};

exports.create = function(req, res){
  var form = new mp.Form();
  form.parse(req, function(err, fields, files){
    console.log(fields, files);
  });
};
