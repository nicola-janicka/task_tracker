import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPageComponent } from './admin-login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminLoginPageComponent', () => {
  let component: AdminLoginPageComponent;
  let fixture: ComponentFixture<AdminLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLoginPageComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
