var dep3_1_1 = require('./dep3-1-1');
var dep3_1_2 = require('./dep3-1-2');

module.exports = {
  exec: function () {
    console.log('dep3-1');
    dep3_1_1.exec();
    dep3_1_2.exec();
  }
};