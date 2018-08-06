var express = require('express');
var router = express.Router();
var path    = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = ""mongodb://label:label123@ds035603.mlab.com:35603/labeldb"";




// GET route for reading data
router.get('/', function (req, res, next) {
 return res.render('index');

});


router.route('/week/:id').get(function (req, res, next) {
  var id = req.params.id
  var productdetails;
  console.log(id);
var productdetails = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { week: id };

  dbo.collection("product").find(query).toArray(function(err, result) {
    if (err) throw err;
console.log(result);
return res.render('week',{products:result});
    
    db.close();
  });

});
console.log(productdetails);

})

router.route('/product/:id').get(function (req, res, next) {
  var id = req.params.id
  var productdetails;
  console.log(id);
var productdetails = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var query = { name: id };

  dbo.collection("product").find(query).toArray(function(err, result) {
    if (err) throw err;
   console.log(result);
 
return res.render('product',{product:result});
    db.close();
  });

});
console.log(productdetails);

})



module.exports = router;

