import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppComponent } from './quiz-app.component';

describe('QuizAppComponent', () => {
  let component: QuizAppComponent;
  let fixture: ComponentFixture<QuizAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
