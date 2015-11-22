define([
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