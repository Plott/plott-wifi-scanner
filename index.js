var wifiscanner = require('node-wifiscanner');

/**
 * Scans surrounding area for wireless access points and routers.
 *
 * @module plott/wifiscanner
 * @category helper
 * @param {Callback} Function Returns object array of access points with rssi value
 * @return {Function}
 * @example
 * plott.wifiscanner(function(err, data){
 * --Do something
 *});
 *
 *
 *
 */

module.exports = function(callback){
  wifiscanner.scan(function(err, data){
  	if (err){
      callback(err, null);
      return;
    }
  	return callback(null, data);
  });
}
