const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = (evt) => {
  console.log('Connection Open...');
  ws.send('Hello WebSockets');
};

ws.onmessage = (evt) => {
  console.log('Received Message: ' + evt.data);
  ws.close();
};

ws.onclose = (evt) => {
  console.log('Connection Closed.');
};

export default ws;