export class Task {
  name: string;
  status: string;
  deadline: Date;

  constructor(name: string, status: string, deadline: Date) {
    this.name = name;
    this.status = status;
    this.deadline = deadline;
  }
}
