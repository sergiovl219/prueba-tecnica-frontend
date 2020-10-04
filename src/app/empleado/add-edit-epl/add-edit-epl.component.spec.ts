import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEplComponent } from './add-edit-epl.component';

describe('AddEditEplComponent', () => {
  let component: AddEditEplComponent;
  let fixture: ComponentFixture<AddEditEplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
