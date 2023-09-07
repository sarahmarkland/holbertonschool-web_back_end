export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task3 = false;
    const task4 = true;
    return [task3, task4];
  }

  return [task, task2];
}
