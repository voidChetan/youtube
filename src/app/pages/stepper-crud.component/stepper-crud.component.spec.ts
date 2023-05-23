import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCrudComponent } from './stepper-crud.component';

describe('StepperCrudComponent', () => {
  let component: StepperCrudComponent;
  let fixture: ComponentFixture<StepperCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
