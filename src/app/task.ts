export class Task {
  name: string;
  status: string;
  deadline: number;

  constructor(name: string, status: string, deadline: number) {
    this.name = name;
    this.status = status;
    this.deadline = deadline;
  }
}
