module.exports = function(params) {

  return function (req, res, next) {
    params.forEach(function(param) {
      if (req.body[param] == undefined || req.body[param] == null) {
        next(new Error('request missing '+param));
      }
    });
    next();
  }

};
