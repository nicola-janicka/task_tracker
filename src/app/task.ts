export class Task {
  name: string;
  status: string;
  deadline: Date;
  id: number;

  constructor(id: number, name: string, status: string, deadline: Date) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.deadline = deadline;
  }
}
