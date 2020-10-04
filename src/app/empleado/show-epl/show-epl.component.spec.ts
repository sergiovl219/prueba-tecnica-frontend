import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEplComponent } from './show-epl.component';

describe('ShowEplComponent', () => {
  let component: ShowEplComponent;
  let fixture: ComponentFixture<ShowEplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
