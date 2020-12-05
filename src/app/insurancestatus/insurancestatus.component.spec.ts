import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancestatusComponent } from './insurancestatus.component';

describe('InsurancestatusComponent', () => {
  let component: InsurancestatusComponent;
  let fixture: ComponentFixture<InsurancestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
