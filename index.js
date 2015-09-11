/* jshint node: true */
'use strict';

module.exports = {
  name: 'unit-types',

  afterInstall: function() {
    return this.addBowerPackageToProject('mathjs', '~2.2.0');
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/mathjs/dist/math.min.js');
  }
};
