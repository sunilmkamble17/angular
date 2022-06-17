import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbcComponent } from './rbc.component';

describe('RbcComponent', () => {
  let component: RbcComponent;
  let fixture: ComponentFixture<RbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
