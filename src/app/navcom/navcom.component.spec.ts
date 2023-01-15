import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcomComponent } from './navcom.component';

describe('NavcomComponent', () => {
  let component: NavcomComponent;
  let fixture: ComponentFixture<NavcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
