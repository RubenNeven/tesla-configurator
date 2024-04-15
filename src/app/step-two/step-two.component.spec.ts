import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoComponent } from './step-two.component';
import {AppModule} from "../app.module";

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing html element', () => {
    const element = fixture.nativeElement.querySelector('h2');
    expect(element.textContent.trim()).toEqual('Step 2: Select your config and options');
  });
});
