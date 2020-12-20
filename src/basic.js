/**
 * A basic demo of websocket
 * 
 * The WebSocket.readyState property returns the current state of the WebSocket connection
 * 
 * readyState:
 *  0 - CONNECTING - after instantiating WebSocket
 *  1 - OPEN       - after onopen callback is invoked
 *  2 - CLOSING    - after ws.close() is invoked
 *  3 - CLOSED     - after onclose callback is invoked
 */

const ws = new WebSocket('wss://echo.websocket.org');
console.log('readyState: ' + ws.readyState); // 0, CONNECTING

/**
 * Build connection with wss server & send message
 * 
 * @param {*} evt 
 */
ws.onopen = (evt) => {
  console.log('readyState: ' + ws.readyState); // 1, OPEN

  console.log('Connection Open...');
  ws.send('Hello WebSockets');
};

/**
 * Receive message from wss server
 * 
 * @param {*} evt 
 */
ws.onmessage = (evt) => {
  console.log('readyState: ' + ws.readyState); // 1, OPEN
  
  console.log('Received Message: ' + evt.data);

  // TODO: process evt.data coming from server below
  // ...

  ws.close();
  console.log('readyState: ' + ws.readyState); // 2, CLOSING
};

// We can also add multiple message callback functions by addEventListener
// ws.addEventListener('message', function(event) {
//   // response is string
//   if (typeof event.data === 'string') {
//     console.log('received string data');
//   }
//
//   // response is blob or ArrayBuffer
//   if (event.data instanceof ArrayBuffer) {
//     console.log('received arraybuffer');
//   }
// });

// We can also utilize following approaches to explicitly specify binary data type
// Response data is blob
// ws.binaryType = 'blob';
// ws.onmessage = (e) => {
//   console.log(e.data.size);
// };
//
// Response data is arraybuffer
// ws.binaryType = "arraybuffer";
// ws.onmessage = (e) => {
//   console.log(e.data.byteLength);
// };

// Monitor onerror callback function to deal with errors
// ws.onerror = (evt) => {
//   // add error handling code logic
// };
// ws.addEventListener('error', (evt) => {
//   // add error handling code logic
// });

/**
 * Invoke onclose callback when connection is closed
 * 
 * @param {*} evt 
 */
ws.onclose = (evt) => {
  console.log('readyState: ' + ws.readyState); // 3, CLOSED

  // check ws.onclose() event relevant parameter
  console.log('event code: ' + evt.code);         // 1005
  console.log('event reason: ' + evt.reason);     // "", a empty string
  console.log('event wasClean: ' + evt.wasClean); // true

  console.log('Connection Closed.');
};

export default ws;