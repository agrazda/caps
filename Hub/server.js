'use strict';

const caps = require('./events');
const logEvent = require('./log-events.js')

caps.on('pickup', logEvent('pickup'));
caps.on('in-transit', logEvent('in-transit'));
caps.on('delivery', logEvent('delivery'));


require('../Driver/driver.js');
require('../Vender/vender');

