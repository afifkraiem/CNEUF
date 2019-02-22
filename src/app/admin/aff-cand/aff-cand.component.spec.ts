import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffCandComponent } from './aff-cand.component';

describe('AffCandComponent', () => {
  let component: AffCandComponent;
  let fixture: ComponentFixture<AffCandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffCandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
