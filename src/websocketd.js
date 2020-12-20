/**
 * A client application for connecting to websocketd
 * 
 * website: http://websocketd.com/
 */

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (evt) => {
  console.log(evt.data);
};