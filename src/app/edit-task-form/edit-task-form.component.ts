import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

interface Status {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-edit-task-form',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.css',
})
export class EditTaskFormComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onCancel(): void {
    this.dialogRef.close();
  }
  statuses: Status[] = [
    { value: 0, viewValue: 'To do' },
    { value: 1, viewValue: 'In progress' },
    { value: 2, viewValue: 'Done' },
    { value: 3, viewValue: 'On hold' },
  ];
}
