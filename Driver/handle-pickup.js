'use strict';

const caps = require('../Hub/events.js');

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.id}`);
  caps.emit('in-transit', payload);

  console.log(`DRIVER: delivered ${payload.id}`);
  caps.emit('delivered', payload);
}

module.exports = handlePickup;