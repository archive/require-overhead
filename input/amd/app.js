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
