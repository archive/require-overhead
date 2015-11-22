define([
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
});