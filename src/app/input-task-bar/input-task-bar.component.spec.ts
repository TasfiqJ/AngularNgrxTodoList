import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskBarComponent } from './input-task-bar.component';

describe('InputTaskBarComponent', () => {
  let component: InputTaskBarComponent;
  let fixture: ComponentFixture<InputTaskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTaskBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
