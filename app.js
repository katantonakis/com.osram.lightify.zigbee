'use strict';

const Homey = require('homey');
const Log = require('homey-log').Log;

class OsramApp extends Homey.App {
	onInit() {
		this.log('init OsramApp')
	}
}

module.exports = OsramApp;
