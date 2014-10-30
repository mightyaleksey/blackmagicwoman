'use strict';

var path = require('path');

// Default directory for configs.
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'configs');
// Default config name to be extended.
process.env.NODE_DEFAULT_ENV = 'default';
// Use NODE_ENV to change running mode. "development" by default.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = require('configs-overload')();
