import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponetComponent } from './table-componet.component';

describe('TableComponetComponent', () => {
  let component: TableComponetComponent;
  let fixture: ComponentFixture<TableComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
