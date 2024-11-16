import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskFormComponent } from './new-task-form.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('NewTaskFormComponent', () => {
  let component: NewTaskFormComponent;
  let fixture: ComponentFixture<NewTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskFormComponent, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
