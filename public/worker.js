onmessage = (e) => {
  console.log('message received from main = ', e.data)
  const response = e.data * e.data;
  this.postMessage(response);
}