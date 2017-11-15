import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponetComponent } from './form-componet.component';

describe('InputComponetComponent', () => {
  let component: FormComponetComponent;
  let fixture: ComponentFixture<FormComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
