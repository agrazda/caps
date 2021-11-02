'use strict';

queue.connect();
  queue.subscribe('delivered', (payload) => {
    // do something with the returned data (payload)
  })