import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatDialogModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css',
})
export class NewTaskFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onCancel(): void {
    this.dialogRef.close();
  }
}
