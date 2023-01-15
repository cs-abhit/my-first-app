import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirstComponent } from './comfirst.component';

describe('ComfirstComponent', () => {
  let component: ComfirstComponent;
  let fixture: ComponentFixture<ComfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
