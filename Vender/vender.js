'use strict';

const caps = require('../Hub/events');
const faker = require('faker');
const logDelivery = require('./log-delivery.js');

caps.on('delivered', logDelivery);

const store = faker.fake("{{company.companyName}}");
const id = faker.fake("{{datatype.uuid}}");
const timeStamp = faker.fake("{{time.recent}}");
const customerName = faker.name.findName();
const customerAddress = faker.fake("{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCodeByState}}")

function pickup() {
    let payload = {
       'store' : store,
       'id' : id,
       'timeStamp' : timeStamp,
       'customerName' : customerName,
       'customerAddress' : customerAddress

    }

    caps.emit('pickup', payload);

}

pickup();