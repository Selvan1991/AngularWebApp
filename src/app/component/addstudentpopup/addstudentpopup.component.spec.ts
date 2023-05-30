import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentpopupComponent } from './addstudentpopup.component';

describe('AddstudentpopupComponent', () => {
  let component: AddstudentpopupComponent;
  let fixture: ComponentFixture<AddstudentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudentpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstudentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
