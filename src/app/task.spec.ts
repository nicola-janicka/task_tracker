import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(
      new Task(0, 2, 'userUser', 'To do', new Date(Date.now()))
    ).toBeTruthy();
  });
});
