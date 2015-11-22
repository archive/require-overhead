require([
  './dep1',
  './dep2',
  './dep3'
], function (
  dep1,
  dep2,
  dep3
) {
  dep1.exec();
  dep2.exec();
  dep3.exec();
  window.no = 'yes';
});
define([
], function (
) {
  var pub = {
    exec: function () {
      console.log('dep1');
    }
  };

  return pub;
});define([
], function (
) {
  var pub = {
    exec: function () {
      console.log('dep2');
    }
  };

  return pub;
});define([
], function (
) {
  return {
    exec: function () {
      console.log('dep3-1-1');
    }
  };
});define([
], function (
) {
  return {
    exec: function () {
      console.log('dep3-1-2');
    }
  };
});define([
  './dep3-1-1',
  './dep3-1-2'
], function (
  dep3_1_1,
  dep3_1_2
) {
  return {
    exec: function () {
      console.log('dep3-1');
      dep3_1_1.exec();
      dep3_1_2.exec();
    }
  };
});define([
], function (
) {
  return {
    exec: function () {
      console.log('dep3-2');
    }
  };
});define([
  './dep3-1',
  './dep3-2'
], function (
  dep3_1,
  dep3_2
) {
  var pub = {
    exec: function () {
      console.log('dep3');
      dep3_1.exec();
      dep3_2.exec();
    }
  }

  return pub;
});