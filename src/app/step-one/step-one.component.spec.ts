import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneComponent } from './step-one.component';
import {AppModule} from "../app.module";

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing html element', () => {
    const element = fixture.nativeElement.querySelector('.form-label');
    expect(element.textContent).toContain('Model');
  });
});
