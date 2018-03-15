var User = require('../models/User.js')
module.exports = (app) => {
/* GET ALL USERS */
app.get('/user/', function(req, res, next) {
    User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE USER BY ID */
app.get('/user/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
app.post('/user/', function(req, res, next) {
    User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE USER */
app.put('/user/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
app.delete('/user/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
}
