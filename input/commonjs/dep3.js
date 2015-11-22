var dep3_1 = require('./dep3-1');
var dep3_2 = require('./dep3-2');

var pub = {
  exec: function () {
    console.log('dep3');
    dep3_1.exec();
    dep3_2.exec();
  }
};

module.exports = pub;