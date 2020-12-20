/**
 * A basic demo of websocket
 */

const ws = new WebSocket('wss://echo.websocket.org');

/**
 * Build connection with wss server & send message
 * 
 * @param {*} evt 
 */
ws.onopen = (evt) => {
  console.log('Connection Open...');
  ws.send('Hello WebSockets');
};

/**
 * Receive message from wss server
 * 
 * @param {*} evt 
 */
ws.onmessage = (evt) => {
  console.log('Received Message: ' + evt.data);
  ws.close();
};

/**
 * Invoke onclose callback when connection is closed
 * 
 * @param {*} evt 
 */
ws.onclose = (evt) => {
  console.log('Connection Closed.');
};

export default ws;