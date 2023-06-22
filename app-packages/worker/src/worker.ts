let counter = 0;

self.addEventListener('message', () => {
    self.postMessage(++counter);
});