import { asyncCounter } from '@mystuff/worker';

export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    element.innerHTML = `count is ${count}`
  }
  const signalWorker = () => {
    asyncCounter().then(setCounter);
  }
  element.addEventListener('click', signalWorker);
  setCounter(0)
}
