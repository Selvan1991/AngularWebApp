import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartmentpopupComponent } from './adddepartmentpopup.component';

describe('AdddepartmentpopupComponent', () => {
  let component: AdddepartmentpopupComponent;
  let fixture: ComponentFixture<AdddepartmentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddepartmentpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddepartmentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
