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
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTaskFormComponent>,
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
