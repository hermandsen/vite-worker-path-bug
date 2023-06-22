import WorkerClass from './worker?worker';

const worker = new WorkerClass();
let workerResponse = (value: number) => {};

worker.addEventListener('message', event => {
  workerResponse(event.data);
});

export function asyncCounter() {
  return new Promise<number>(resolve => {
    workerResponse = resolve;
    worker.postMessage('count');
  });
}