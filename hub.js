'use strict';

const Events  = require('events');

const messengerEvents  = new Events();

const parcel = require('./hub.js');
const faker = require('faker');

const store = faker.fake("{{company.companyName}}");
const id = faker.fake("{{datatype.uuid}}");
const timeStamp = faker.fake("{{time.recent}}");
const customerName = faker.fake.FindName();
const customerAddress = faker.fake("{{address.street}}, {{adress.cityName}}, {{address.state}} address.zipCodeByState}}")




parcel.emit('message', {
    "event":"pickup",
    "time": console.log(`${timeStamp}`),
    "payload": {
        "store":console.log(`${store}`),
        "orderID": console.log(`${id}`),
        "customer": console.log(`${customerName}`),
        "address": console.log(`${customerAddress}`),
    }
})

module.exports = messengerEvents;