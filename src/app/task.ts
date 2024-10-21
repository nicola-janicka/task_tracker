export class Task {
  name: string;
  status: string;
  deadline: Date;
  id: number;
  userID: number;

  constructor(
    id: number,
    userID: number,
    name: string,
    status: string,
    deadline: Date
  ) {
    this.id = id;
    this.userID = userID;
    this.name = name;
    this.status = status;
    this.deadline = deadline;
  }

  getJSONString(): string {
    let jsonTask = {
      id: this.id,
      userID: this.userID,
      name: this.name,
      status: this.status,
      deadline: this.deadline,
    };

    return JSON.stringify(jsonTask);
  }
}
