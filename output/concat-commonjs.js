var dep1 = require('./dep1');
var dep2 = require('./dep2');
var dep3 = require('./dep3');

dep1.exec();
dep2.exec();
dep3.exec();
window.no = 'yes';var pub = {
  exec: function () {
    console.log('dep1');
  }
};

module.exports = pub;var pub = {
  exec: function () {
    console.log('dep2');
  }
};

module.exports = pub;module.exports = {
  exec: function () {
    console.log('dep3-1-1');
  }
};module.exports = {
  exec: function () {
    console.log('dep3-1-2');
  }
};var dep3_1_1 = require('./dep3-1-1');
var dep3_1_2 = require('./dep3-1-2');

module.exports = {
  exec: function () {
    console.log('dep3-1');
    dep3_1_1.exec();
    dep3_1_2.exec();
  }
};module.exports = {
  exec: function () {
    console.log('dep3-2');
  }
};var dep3_1 = require('./dep3-1');
var dep3_2 = require('./dep3-2');

var pub = {
  exec: function () {
    console.log('dep3');
    dep3_1.exec();
    dep3_2.exec();
  }
};

module.exports = pub;