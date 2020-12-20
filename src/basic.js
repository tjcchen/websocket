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
  ws.close();

  console.log('readyState: ' + ws.readyState); // 2, CLOSING
};

/**
 * Invoke onclose callback when connection is closed
 * 
 * @param {*} evt 
 */
ws.onclose = (evt) => {
  console.log('readyState: ' + ws.readyState); // 3, CLOSED

  console.log('Connection Closed.');
};

export default ws;